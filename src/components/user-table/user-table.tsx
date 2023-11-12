import React, { useState } from "react";
import { Table } from "@mantine/core";
import "./user-table.scss";
import User from "../../models/user-model";
import UserDetail from "../user-detail/user-detail";
import { NationalityConverter } from "../../enums/nationality-converser";
import { Image } from "@mantine/core";
import { ThemeIcon } from "@mantine/core";
import { IconAccessibleOff } from "@tabler/icons-react";
import { Loader } from "@mantine/core";

const UserTable: React.FC<{ users: User[] | undefined }> = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleRowClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };
  if (!users) {
    return (
      <div className="loader">
        <Loader color="gray" size="xl" type="dots" />
      </div>
    );
  } else if (users.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-text">No results</div>
        <ThemeIcon
          variant="filled"
          radius="md"
          size="xl"
          color="gray"
          className="icon"
        >
          <IconAccessibleOff className="svg-icon" />
        </ThemeIcon>
      </div>
    );
  }

  const rows = users.map((user) => (
    <Table.Tr
      key={user.phone}
      onClick={() => handleRowClick(user)}
      className="table-row"
    >
      <Table.Td>
        <Image radius="md" src={user.picture.thumbnail} />
      </Table.Td>
      <Table.Td>
        {user.name.first} {user.name.last}
      </Table.Td>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>{user.phone}</Table.Td>
      <Table.Td>{NationalityConverter[user.nat]}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="users-table">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th className="table-header">Picture</Table.Th>
            <Table.Th className="table-header">User name</Table.Th>
            <Table.Th className="table-header">Email</Table.Th>
            <Table.Th className="table-header">Phone</Table.Th>
            <Table.Th className="table-header">Nationality</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <UserDetail user={selectedUser} onClose={handleCloseModal} />
    </div>
  );
};

export default UserTable;
