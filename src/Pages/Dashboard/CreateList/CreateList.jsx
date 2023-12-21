import toast from "react-hot-toast";
import UseAuth from "../../../Hook/UseAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const CreateList = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const loginSuccessToast = () => toast.success("New task create successfully");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      date: "",
      priority: "",
    },
  });
  const onSubmit = async (data) => {
    const title = data.title;
    const description = data.description;
    const date = data.date;
    const priority = data.priority;
    const email = user?.email;
    const status = "todo";
    const task = {
      title,
      description,
      date,
      priority,
      email,
      status,
    };
    console.log(task);
    await axiosPublic.post("/list", task).then((res) => {
      if (res.data.insertedId) {
        navigate("/dashboard/toDoList");
        loginSuccessToast();
      }
    });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100 border rounded-sm">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center mt-10 font-bold">
          Create Task
        </h1>
        <form className="card-body pt-0" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              placeholder="Title"
              type="text"
              className="input input-bordered"
            />
            {errors.title?.message && (
              <p className="text-xs text-red-600 mt-1">
                {errors.title?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="textarea textarea-bordered resize-none"
              placeholder="Description"
              type="text"
            ></textarea>
            {errors.description?.message && (
              <p className="text-xs text-red-600 mt-1">
                {errors.description?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              {...register("date", { required: "Date is required" })}
              type="date"
              className="input input-bordered"
            />
            {errors.date?.message && (
              <p className="text-xs text-red-600 mt-1">
                {errors.date?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Priority</span>
            </label>
            <select
              {...register("priority", { required: "Priority is required" })}
              className="select select-bordered w-full"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            {errors.priority?.message && (
              <p className="text-xs text-red-600 mt-1">
                {errors.priority?.message}
              </p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-sm">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateList;
