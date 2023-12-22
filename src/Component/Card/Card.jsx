import PropTypes from "prop-types";
import { MdDateRange, MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
import useTask from "../../Hook/useTask";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Modal from "./Modal";
const Card = ({ item }) => {
  const deleteSuccessToast = () => toast.success("Delete successfully");
  const deleteErrorToast = () => toast.error("Something went wrong");
  const { title, description, date, priority, status, _id } = item || {};
  const axiosPublic = useAxiosPublic();
  const { refetch } = useTask(status);
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
            refetch();
          } else {
            deleteErrorToast();
          }
        });
      }
    });
  };
  return (
    <div className="flex justify-between items-center gap-5 p-5 border shadow-lg mt-5" data-aos="zoom-in">
      <div className="flex-1">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold">{title}</h1>
        <p className="text-xs md:text-sm lg:text-base">{description}</p>
        <div className="flex flex-wrap items-center gap-5">
          <p className="flex items-center gap-1">
            <MdDateRange /> {date}
          </p>
          <p>Priority: {priority}</p>
        </div>
        <Modal item={item}/>
      </div>
      <div className="flex flex-col items-center gap-3 text-3xl">
        <button onClick={handleDelete}>
          <MdDelete className="text-red-600 border-red-600 hover:border-red-700 hover:text-red-700 border p-[2px] rounded-sm" />
        </button>
        <Link to={`/dashboard/update/${_id}`}>
          <MdEdit className="text-blue-600 border-blue-600 hover:border-blue-700 hover:text-blue-700 border p-[2px] rounded-sm" />
        </Link>
        <Link to={`/dashboard/details/${_id}`}>
          <MdRemoveRedEye className="text-blue-600 border-blue-600 hover:border-blue-700 hover:text-blue-700 border p-[2px] rounded-sm" />
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
