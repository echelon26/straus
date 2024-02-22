import React from "react";
import { List } from "antd";
import {} from "antd";
import { LayoutTwoTone } from "@ant-design/icons";

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
const UpdateList = () => (
  <List
    itemLayout="Diagnosis Template"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <div style={{ marginRight: "10px" }}>
          <LayoutTwoTone />
        </div>
        <List.Item.Meta title={item.title} description={item.description} />
      </List.Item>
    )}
  />
);
export default UpdateList;
