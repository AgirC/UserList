import React from "react";
import { Modal } from "@mantine/core";
import User from "../../models/user-model";
import { Image } from "@mantine/core";
import { NationalityConverter } from "../../enums/nationality-converser";
import "./user-detail.scss";
import { ThemeIcon } from "@mantine/core";
import { IconFlag3, IconOld, IconPhone, IconMail } from "@tabler/icons-react";

const UserDetail: React.FC<{ user: User | null; onClose: () => void }> = ({
  user,
  onClose,
}) => {
  return (
    <Modal
      opened={!!user}
      size="auto"
      withCloseButton={false}
      onClose={onClose}
      centered
    >
      <div className="user-detail-title">{`${user?.name.title} ${user?.name.first} ${user?.name.last}`}</div>
      <div className="user-detail-content">
        <div className="user-detail-left">
          <Image radius="100" h={200} w="auto" src={user?.picture.large} />
        </div>
        <div className="user-detail-right">
          <div className="item">
            <ThemeIcon
              variant="light"
              radius="md"
              size="sm"
              color="gray"
              className="icon"
            >
              <IconOld />
            </ThemeIcon>
            <span className="title">Age: </span>
            <span className="subtitle"> {user?.dob.age}</span>
          </div>
          {user && (
            <div className="item">
              <ThemeIcon
                variant="light"
                radius="md"
                size="sm"
                color="gray"
                className="icon"
              >
                <IconFlag3 />
              </ThemeIcon>
              <span className="title">Nationality: </span>
              <span className="subtitle">{NationalityConverter[user.nat]}</span>
            </div>
          )}

          <div className="item">
            <ThemeIcon
              variant="light"
              radius="md"
              size="sm"
              color="gray"
              className="icon"
            >
              <IconPhone />
            </ThemeIcon>
            <span className="title">Phone: </span>
            <span className="subtitle"> {user?.phone}</span>
          </div>
          <div className="item">
            <ThemeIcon
              variant="light"
              radius="md"
              size="sm"
              color="gray"
              className="icon"
            >
              <IconMail />
            </ThemeIcon>
            <span className="title">Email: </span>
            <span className="subtitle"> {user?.email}</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserDetail;
