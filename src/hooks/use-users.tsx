import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { usersState, filteredUsersState } from "../providers/recoil";
import { User } from "../models/user-model";
import { useEffect } from "react";

const fetchUsers = async () => {
  const response = await fetch("https://randomuser.me/api/?results=100");
  const data = await response.json();
  return data.results;
};

export const useUsers = () => {
  const [users, setUsers] = useRecoilState(usersState);
  const [, setFilteredUsers] = useRecoilState(filteredUsersState);

  const { data: fetchedUsers, refetch } = useQuery<User[]>(
    "users",
    fetchUsers,
    {
      enabled: false,
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        await refetch();
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    if (!users || users.length === 0) {
      fetchData();
    }
  }, [users, refetch]);

  useEffect(() => {
    if (fetchedUsers) {
      setUsers(fetchedUsers);
      setFilteredUsers(fetchedUsers);
    }
  }, [fetchedUsers, setFilteredUsers, setUsers]);

  return users;
};
