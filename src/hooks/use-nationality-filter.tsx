import { usersState, filteredUsersState } from "../providers/recoil";
import { useRecoilState } from "recoil";

const useNationalityFilter = () => {
  const [, setUsers] = useRecoilState(usersState);
  const [, setFilteredUsers] = useRecoilState(filteredUsersState);

  const fetchUsersByNationalities = async (selectedNationalities: string[]) => {
    try {
      setFilteredUsers(undefined)
      const path = selectedNationalities.length
        ? `https://randomuser.me/api/?results=100&nat=${selectedNationalities.join(",")}`
        : "https://randomuser.me/api/?results=100";
      const response = await fetch(path);
      const data = await response.json();
      setUsers(data.results);
      setFilteredUsers(data.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return fetchUsersByNationalities;
};

export default useNationalityFilter;
