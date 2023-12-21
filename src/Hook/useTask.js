
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import UseAuth from "./UseAuth";

const useTask = (status) => {
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth()
  const {
    data: task = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["task",user?.email, status],
    queryFn: async () => {
      const res = await axiosPublic.get(`/lists?email=${user?.email}&status=${status}`);
      return res.data;
    },
  });
  return { task, isPending, refetch };
};

export default useTask;