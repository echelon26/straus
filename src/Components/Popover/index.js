import React, { useState } from "react";
import {
  Radio,
  Popover,
  Space,
  Typography,
  Divider,
  List,
  Input,
  ConfigProvider,
} from "antd";
import {
  CloseOutlined,
  DeleteOutlined,
  SearchOutlined,
  LayoutTwoTone,
} from "@ant-design/icons";
const Popeover = ({ open, setOpen }) => {
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <ConfigProvider
      button={{
        style: { width: 260, margin: 4 },
      }}
    >
      <Popover
        content={
          <a onClick={() => setOpen(false)}>
            <CloseOutlined />
          </a>
        }
        title="Title"
        trigger="click"
        placement="bottom"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Divider orientation="left" />
      </Popover>
    </ConfigProvider>
  );
};
export default Popeover;
