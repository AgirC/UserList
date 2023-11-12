import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { usersState, filteredUsersState, filterValueState } from "../../providers/recoil";
import UserTable from "../user-table/user-table";
import UserFilter from "../user-filter/user-filter";
import NationalityFilter from "../nationality-filter/nationality-filter";
import { useUsers } from "../../hooks/use-users";
import useNationalityFilter from "../../hooks/use-nationality-filter";
import "./user-list.scss";

const UserList: React.FC = () => {
  useUsers();
  const allUsers = useRecoilValue(usersState);
  const [filteredUsers, setFilteredUsers] = useRecoilState(filteredUsersState);
  const fetchUsersByNationalities = useNationalityFilter();
  const [filterValue, setFilterValue] = useRecoilState(filterValueState);

  const handleFilterChange = (filterValue: string) => {
    const filtered = allUsers?.filter(
      (user) =>
        user.name.first.toLowerCase().includes(filterValue.toLowerCase()) ||
        user.name.last.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleNationalityChange = (selectedNationalities: string[]) => {
    setFilterValue('')
    fetchUsersByNationalities(selectedNationalities);
  };

  return (
    <div className="user-list">
      <div className="user-list-title">User List Page</div>
      <div className="user-list-content">
        <div className="left-content">
          <div className="title">User Filters</div>
          <UserFilter onFilterChange={handleFilterChange}/>
          <NationalityFilter onNationalityChange={handleNationalityChange} />
        </div>
        <div className="right-content">
          <UserTable users={filteredUsers} />
        </div>
      </div>
    </div>
  );
};

export default UserList;
