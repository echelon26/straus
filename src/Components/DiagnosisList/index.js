import React, { useState } from "react";
import { STATUS_LIST } from "../../constant";
import { Space, Input, Select, Radio, Row, Col, AutoComplete } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export const DiagnosisList = ({ list, onRecordDelete }) => {
  const [diagnosisListData, setDiagnosisListData] = useState([list]);

  return (
    <Row>
      <Space direction="vertical" size="middle">
        <Space.Compact>
          <li>
            <AutoComplete
              defaultValue={list?.label}
              value={list?.label}
              placeholder="Diagnosis Name"
              bordered={false}
              defaultOpen={false}
              onSearch={(text) => {
                onSearchDiagnisis(text);
              }}
              onFocus={() => {}}
              options={diagnosisListData}
              defaultActiveFirstOption={true}
              onSelect={(data, e) => {}}
            />
          </li>
          <li>
            <Input
              style={{ width: "145px", height: "40px" }}
              defaultValue="Jitendra"
            />
          </li>
          <li>
            <Select
              style={{ width: "145px", height: "40px" }}
              defaultValue="status"
              options={STATUS_LIST}
            />
          </li>
          <li>
            <Input
              style={{ width: "245px", height: "40px" }}
              defaultValue="Hello"
            />
          </li>
          <li>
            <Radio.Button value="large" style={{ height: "40px" }}>
              {<DeleteOutlined onClick={onRecordDelete} />}
            </Radio.Button>
          </li>
        </Space.Compact>
      </Space>
    </Row>
  );
};
