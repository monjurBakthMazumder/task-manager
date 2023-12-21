
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGetSingleTask = (id) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: task = {},
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["task",id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/lists/${id}`);
      return res.data;
    },
  });
  return { task, isPending, refetch };
};

export default useGetSingleTask;