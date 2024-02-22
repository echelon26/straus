import React, { useState } from "react";
import { Popover, Space, Divider, Input, Select } from "antd";
import { CloseOutlined } from "@ant-design/icons";
const Template = () => {
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <div style={{ width: "300px", height: "60px" }}>
      <Popover
        content={
          <a onClick={hide}>
            <CloseOutlined />
          </a>
        }
        title="Title"
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Space>
          <Input
            // style={{ width: "810px", height: "40px" }}
            size="large"
            placeholder="Template Name"
          />
        </Space>
        <Space>
          <Select
            //   style={{ width: "145px", height: "40px" }}
            defaultValue="Select Template"
            // options={options}
          />
        </Space>

        <Divider orientation="left" />
      </Popover>
    </div>
  );
};
export default Template;
