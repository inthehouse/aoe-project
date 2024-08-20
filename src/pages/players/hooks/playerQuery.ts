import { useQuery } from "react-query";
import { getPlayers } from "services/playerService";

export const usePlayerQuery = () => {
  const { isLoading, data: players , error } = useQuery(
    ["getPlayers"],
    async () => getPlayers(),
    {
      staleTime: 300,
      refetchOnWindowFocus: false,
    }
  );

  return {
    isLoading,
    players,
    error
  };
};
