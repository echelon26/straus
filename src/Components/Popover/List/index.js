import React, { useState } from "react";
import { List } from "antd";
import {
  Card,
  Space,
  Input,
  Flex,
  Select,
  Button,
  Divider,
  Radio,
  Row,
  Col,
  Popover,
  Typography,
} from "antd";
import {
  SaveTwoTone,
  LayoutTwoTone,
  SearchOutlined,
  ThunderboltTwoTone,
  DeleteOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const data = [
  {
    title: "Manish",
    description:
      "Unspecified mental disorder due to known physiological condition, ",
  },
  {
    title: "Jitendra",
    description:
      "Unspecified mental disorder due to known physiological condition, ",
  },
  {
    title: "Amit",
    description:
      "Unspecified mental disorder due to known physiological condition, ",
  },
  {
    title: "Ashok",
    description:
      "Unspecified mental disorder due to known physiological condition, ",
  },
];

const Lists = () => (
  <div style={{ minWidth: "300px" }}>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Typography>Diagnosis Templates</Typography>
      </div>
      <div>
        <Button type="text" onClick={() => {}}>
          <CloseOutlined />
        </Button>
      </div>
    </div>
    <Space>
      <Input
        style={{ width: "280px", marginTop: "16px" }}
        size="large"
        placeholder="Search Template"
        prefix={<SearchOutlined />}
      />
    </Space>

    <List
      itemLayout="Diagnosis Template"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <div style={{ marginRight: "16px" }}>
            <LayoutTwoTone />
          </div>
          <List.Item.Meta title={item.title} description={item.description} />
          <div>
            <Button type="text">
              <DeleteOutlined />
            </Button>
          </div>
        </List.Item>
      )}
    />
  </div>
);
export default Lists;
