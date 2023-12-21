import Card from "../../../Component/Card/Card";
import useTask from "../../../Hook/useTask";

const ToDoList = () => {
  const { task } = useTask("todo");
  return (
    <div className="px-5 md:px-10 my-5 md:my-10">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
        ToDo list {task?.length}
      </h1>
      <div>
        {task?.map((item) => (
          <Card key={item?._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
