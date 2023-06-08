import { useUserContext } from "./useUserContext";

export const useUser = () => {
  const { username } = useUserContext();

  return username;
}
