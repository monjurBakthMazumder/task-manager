import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const messageToast = () => toast.success("Send message successfully");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      message: "",
    },
  });
  const onSubmit = async () => {
    reset();
    messageToast();
  };
  return (
    <div
      className=" flex justify-center items-center p-5 md:p-10"
      style={{ "min-height": "calc(100vh - 100px)" }}
    >
      <div className="card shrink-0 w-full max-w-7xl shadow-2xl bg-base-100 border rounded-sm">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center mt-10 font-bold">
          Contact us
        </h1>
        <form className="card-body pt-0" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First name</span>
              </label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                placeholder="First name"
                type="text"
                className="input input-bordered"
              />
              {errors.firstName?.message && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.firstName?.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last name</span>
              </label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                placeholder="Last name"
                type="text"
                className="input input-bordered"
              />
              {errors.lastName?.message && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.lastName?.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5">
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
                <span className="label-text">Number</span>
              </label>
              <input
                {...register("number", { required: "Number is required" })}
                placeholder="Number"
                type="number"
                className="input input-bordered"
              />
              {errors.number?.message && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.number?.message}
                </p>
              )}
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              {...register("message", {
                required: "Message is required",
              })}
              className="textarea textarea-bordered resize-none h-40"
              placeholder="Message"
              type="text"
            ></textarea>
            {errors.message?.message && (
              <p className="text-xs text-red-600 mt-1">
                {errors.message?.message}
              </p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-sm">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
