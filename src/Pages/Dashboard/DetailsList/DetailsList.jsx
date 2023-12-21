import { Link, useNavigate, useParams } from "react-router-dom";
import useGetSingleTask from "../../../Hook/useGetSingleTask";
import { MdDateRange, MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import toast from "react-hot-toast";

const DetailsList = () => {
  const deleteSuccessToast = () => toast.success("Delete successfully");
  const deleteErrorToast = () => toast.error("Something went wrong");
  const id = useParams();
  const { task } = useGetSingleTask(id.id);
  const { _id, title, description, date, priority } = task || {};
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/lists/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            deleteSuccessToast();
            navigate(-1);
          } else {
            deleteErrorToast();
          }
        });
      }
    });
  };
  return (
    <div className="px-5 md:px-10 my-5 md:my-10">
      <button onClick={handleBack}  className="btn btn-primary btn-sm rounded-none">Back</button>
      <div className="flex justify-between items-center gap-5 p-5 border shadow-lg mt-5">
        <div className="flex-1">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold">{title}</h1>
          <p className="text-xs md:text-sm lg:text-base">{description}</p>
          <div className="flex flex-wrap items-center gap-5">
            <p className="flex items-center gap-1">
              <MdDateRange /> {date}
            </p>
            <p>Priority: {priority}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 text-3xl">
          <button onClick={handleDelete}>
            <MdDelete className="text-red-600 border-red-600 hover:border-red-700 hover:text-red-700 border p-[2px] rounded-sm" />
          </button>
          <Link to={`/dashboard/update/${_id}`}>
            <MdEdit className="text-blue-600 border-blue-600 hover:border-blue-700 hover:text-blue-700 border p-[2px] rounded-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsList;
