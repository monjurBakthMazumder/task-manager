import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import UseAuth from "../../../Hook/UseAuth";
import SocialSingIn from "../SocialSingIn/SocialSingIn";
import toast from "react-hot-toast";

const Login = () => {
  const loginSuccessToast = () => toast.success("Login successfully");
  const [isShow, setIsShow] = useState(false);
    const { loginUser } = UseAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loc = useLocation();

  const from = loc.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    setError("");
    console.log(email, password);
    // login user
    loginUser(email, password)
      .then(() => {
        navigate(from, { replace: true });
        loginSuccessToast()
      })
      .catch(() => {
        setError("Email or password don't match");
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100 border rounded-sm">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center mt-10 font-bold">
          Login now!
        </h1>
        <p className="text-sm text-red-600 mt-3 text-center">
          {error ? error : ""}
        </p>
        <SocialSingIn/>
        <form className="card-body pt-0" onSubmit={handleSubmit(onSubmit)}>
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-sm">Login</button>
          </div>
          <p className="text-xs text-center mt-5">
            New here? please{" "}
            <Link
              className="font-bold underline cursor-pointer text-blue-600"
              to={"/registration"}
            >
              Registration
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
