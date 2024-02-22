import React, { useState } from "react";
import { Space, Button, Select } from "antd";

const TemplateUpdate = () => (
  <div>
    <Space>
      {/* <Select
        style={{ width: "300px", marginTop: "14px" }}
        size="large"
        placeholder="Select Template "
        // options={<UpdateList />}
        defaultValue={data}
      /> */}
      <Select
        showSearch
        style={{
          width: 300,
          marginTop: "14px",
        }}
        placeholder="Select Template "
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={[
          {
            value: "1",
            label: "Not Identified",
          },
          {
            value: "2",
            label: "Closed",
          },
          {
            value: "3",
            label: "Communicated",
          },
          {
            value: "4",
            label: "Identified",
          },
          {
            value: "5",
            label: "Resolved",
          },
          {
            value: "6",
            label: "Cancelled",
          },
        ]}
      />
    </Space>
    <Space style={{ marginLeft: "12px" }}>
      <Button type="primary">Update</Button>
    </Space>
  </div>
);
export default TemplateUpdate;
