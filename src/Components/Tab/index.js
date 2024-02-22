import React from "react";
import TemplateNew from "./TemplateNew";
import { Button, Tabs } from "antd";
import TemplateUpdate from "./TemplateUpdate";
import {
  SaveTwoTone,
  LayoutTwoTone,
  SearchOutlined,
  ThunderboltTwoTone,
  DeleteOutlined,
  CloseOutlined,
} from "@ant-design/icons";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "New Template",
    children: <TemplateNew />,
  },
  {
    key: "2",
    label: "Update Template",
    children: <TemplateUpdate />,
  },
];
const Tab = () => (
  <div style={{ width: "450px" }}>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
      <div>
        <Button type="text">
          <CloseOutlined />
        </Button>
      </div>
    </div>
  </div>
);
export default Tab;
