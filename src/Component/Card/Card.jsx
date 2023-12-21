import PropTypes from "prop-types";
import { MdDateRange } from "react-icons/md";
const Card = ({ item }) => {
  const { title, description, date, priority, email, status } = item || {};
  return (
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
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
