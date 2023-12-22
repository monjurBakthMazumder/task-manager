import toast from "react-hot-toast";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useGetSingleTask from "../../../Hook/useGetSingleTask";

const UpdateList = () => {
  const axiosPublic = useAxiosPublic();
  const loginSuccessToast = () =>
    toast.success("This task update successfully");
  const navigate = useNavigate();
  const id = useParams();
  const { task } = useGetSingleTask(id.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: task?.title,
      description: task?.description,
      date: task?.date,
      priority: task?.priority,
    },
  });
  const onSubmit = async (data) => {
    const title = data.title;
    const description = data.description;
    const date = data.date;
    const priority = data.priority;
    const task = {
      title,
      description,
      date,
      priority,
    };
    console.log(task);
    await axiosPublic.put(`/lists/${id?.id}`, task).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        navigate(-1);
        loginSuccessToast();
      }
    });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100 border rounded-sm">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center mt-10 font-bold">
          Update Task
        </h1>
        <form className="card-body pt-0" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              defaultValue= {task?.title}
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
              defaultValue= {task?.description}
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
              defaultValue= {task?.date}
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
              defaultValue= {task?.priority}
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
            <button className="btn btn-primary rounded-sm">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateList;
