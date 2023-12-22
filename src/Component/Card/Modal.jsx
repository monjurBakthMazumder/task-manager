import PropTypes from "prop-types";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useTask from "../../Hook/useTask";

const Modal = ({ item }) => {
  const axiosPublic = useAxiosPublic();
  const loginSuccessToast = () =>
    toast.success("This task status update successfully");
  const { refetch } = useTask(item?.status);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      status: item?.status,
    },
  });
  const onSubmit = async (data) => {
    const status = data.status;
    const task = {
      status,
    };
    console.log(task);
    await axiosPublic.put(`/lists-status/${item?._id}`, task).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        loginSuccessToast();
        refetch();
      }
    });
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-primary btn-sm rounded-none mt-5"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Change status
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h1 className="text-xl sm:text-2xl lg:text-3xl text-center mt-10 font-bold">
            Change status
          </h1>
          <form className="card-body pt-0" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select
                defaultValue={item?.status}
                {...register("status", { required: "Status is required" })}
                className="select select-bordered w-full"
              >
                <option value="todo">todo</option>
                <option value="ongoing">ongoing</option>
                <option value="completed">completed</option>
              </select>
              {errors.status?.message && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.status?.message}
                </p>
              )}
            </div>
            <div className="form-control mt-6 grid grid-cols-1 md:grid-cols-2 gap-2">
              <button className="btn btn-primary rounded-sm" type="submit">
                Change
              </button>
              <form method="dialog">
                <button className="btn btn-primary rounded-sm w-full btn-outline">
                  Close
                </button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

Modal.propTypes = {
  item: PropTypes.object,
};

export default Modal;
