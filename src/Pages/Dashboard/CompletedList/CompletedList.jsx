import Card from "../../../Component/Card/Card";
import Loading from "../../../Component/Loading/Loading";
import useTask from "../../../Hook/useTask";

const CompletedList = () => {
  const { task, isPending } = useTask("completed");
  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <div className="px-5 md:px-10 my-5 md:my-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Completed List {task?.length}
          </h1>
          <div>
            {task?.map((item) => (
              <Card key={item?._id} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CompletedList;
