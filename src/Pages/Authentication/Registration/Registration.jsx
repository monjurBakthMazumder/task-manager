import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../../Hook/UseAuth";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import SocialSingIn from "../SocialSingIn/SocialSingIn";
import toast from "react-hot-toast";

const Registration = () => {
  const loginSuccessToast = () => toast.success("Account create successfully");
  const [isShow, setIsShow] = useState(false);

  const [error, setError] = useState("");
  const { createUser, setUser } = UseAuth();

  const loc = useLocation();

  const from = loc.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      photo: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    console.log(name, email, password);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.photo[0] };
    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      imageFile,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    const photo = res.data.data.display_url;
    setError("");
    // create user
    createUser(email, password)
      .then((result) => {
        loginSuccessToast()
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        setUser({
          displayName: name,
          photoURL: photo,
          email: email,
        });
        navigate(from, { replace: true });
      })
      .catch(() => {
        setError("Email already registered");
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100 border rounded-sm">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center mt-10 font-bold">
          Registration
        </h1>
        <p className="text-sm text-red-600 mt-3 text-center">
          {error ? error : ""}
        </p>
        <SocialSingIn/>
        <form className="card-body pt-0" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
              type="text"
              className="input input-bordered"
            />
            {errors.name?.message && (
              <p className="text-xs text-red-600 mt-1">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              {...register("photo", { required: "Photo is required" })}
              placeholder="Name"
              type="file"
              className="py-2 input input-bordered"
            />
            {errors.photo?.message && (
              <p className="text-xs text-red-600 mt-1">
                {errors.photo?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Email"
              className="input input-bordered"
            />
            {errors.email?.message && (
              <p className="text-xs text-red-600 mt-1">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
                    message:
                      "Your password must be one uppercase, special characters and 6 character longer",
                  },
                })}
                type={isShow ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full pr-12"
              />
              <span
                className="absolute cursor-pointer -ml-10 mt-[9px] text-3xl text-primary"
                onClick={() => setIsShow(!isShow)}
              >
                {isShow ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            {errors.password?.message && (
              <p className="text-xs text-red-600 mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-sm">Registration</button>
          </div>
          <p className="text-xs text-center mt-5">
            Already have account? please{" "}
            <Link
              className="font-bold underline cursor-pointer text-blue-600"
              to={"/login"}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
