import React, { useState } from "react";
import { Space, Input, Button } from "antd";

const TemplateNew = () => (
  <div>
    <Space>
      <Input
        style={{ width: "300px", marginTop: "14px" }}
        size="large"
        placeholder="Template Name"
      />
    </Space>
    <Space style={{ marginLeft: "14px" }}>
      <Button type="primary">Save</Button>
    </Space>
  </div>
);
export default TemplateNew;
