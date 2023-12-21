import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import UseAuth from "./UseAuth";

const useGetStats = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();
  const {
    data: stats = {},
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["stats", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/stats/${user?.email}`);
      return res.data;
    },
  });
  return { stats, isPending, refetch };
};

export default useGetStats;
