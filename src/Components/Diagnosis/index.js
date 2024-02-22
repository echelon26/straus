import React, { useState, useCallback, useEffect } from "react";
import "./style.css";
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
  AutoComplete,
  Popover,
} from "antd";
import {
  SaveTwoTone,
  LayoutTwoTone,
  ThunderboltTwoTone,
  SearchOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { STATUS_LIST, SINCE_LIST } from "../../constant";
import { useSelector, useDispatch } from "react-redux";
import Tabs from "../Tab";
import Lists from "../Popover/List";

import {
  getDiagnosisList,
  addTemplate,
  searchDiagnosis,
  listDiagnosisTemplate,
  editTemplate,
} from "../../Redux/diagnosis";

export const Diagnosis = () => {
  const { diagnosisOptionsList } = useSelector((state) => {
    return state.diagnosis;
  });
  const dispatch = useDispatch();
  const [diagnosisData, setDiagnosisData] = useState([]);
  const [rowDiagnosisData, setRowDiagnosisData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpenChange = () => {
    setOpen(false);
  };
  const handleOpenChanges = () => {
    setOpenModal(false);
  };
  const onSelect = (text, data) => {
    setRowDiagnosisData([...rowDiagnosisData, { ...data }]);
  };

  useEffect(() => {
    if (!searchQuery?.length) {
      dispatch(getDiagnosisList());
    }
  }, [searchQuery?.length]);

  useEffect(() => {
    if (diagnosisOptionsList?.length) {
      let list = diagnosisOptionsList?.map((data) => ({
        ...data,
        value: data?.tds_name,
        label: data?.tds_name,
      }));
      setDiagnosisData(list);
    }
  }, [diagnosisOptionsList]);

  const onSearchDiagnisis = (text) => {
    setSearchQuery(text);
    dispatch(searchDiagnosis(text));
  };

  const onRecordDelete = () => {};

  return (
    <>
      <Card>
        <Row>
          <Col span={4}>
            <ThunderboltTwoTone /> Diagnosis
          </Col>

          <Col span={6} offset={14}>
            <Space size="large">
              <Space>
                <Popover
                  content={
                    <div>
                      <Lists />
                    </div>
                  }
                  trigger="click"
                  open={open}
                  onOpenChange={handleOpenChange}
                >
                  <Button
                    type="text"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <LayoutTwoTone />
                    <span>Templates</span>
                  </Button>
                </Popover>
              </Space>

              <Space onClick={() => {}}>
                <Popover
                  content={<Tabs />}
                  trigger="click"
                  open={openModal}
                  onOpenChange={handleOpenChanges}
                >
                  <Button
                    type="text"
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    <SaveTwoTone />
                    <span>Save</span>
                  </Button>
                </Popover>
              </Space>
            </Space>
          </Col>
        </Row>
        {rowDiagnosisData?.map((list, index) => (
          <>
            <Flex>
              <Space direction="vertical" size="middle">
                <Space.Compact>
                  <li>
                    <AutoComplete
                      style={{ width: "235px", height: "40px" }}
                      defaultValue={list?.label}
                      value={list?.label}
                      placeholder="Diagnosis Name"
                      defaultOpen={false}
                      onSearch={(text) => {
                        onSearchDiagnisis(text);
                      }}
                      onFocus={() => {}}
                      options={diagnosisData}
                      defaultActiveFirstOption={true}
                      onSelect={(data, e) => {}}
                    />
                  </li>
                  <li>
                    <AutoComplete
                      style={{ width: "145px", height: "40px" }}
                      placeholder="Since"
                      defaultOpen={false}
                      onSearch={(text) => {
                        onSearchDiagnisis(text);
                      }}
                      onFocus={() => {}}
                      options={SINCE_LIST}
                      defaultActiveFirstOption={true}
                      onSelect={(data, e) => {}}
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
            </Flex>{" "}
          </>
        ))}
        <AutoComplete
          style={{ width: "810px", height: "70px" }}
          showSearch
          value={searchQuery}
          onSelect={onSelect}
          onSearch={onSearchDiagnisis}
          options={diagnosisData}
        >
          <Input placeholder="Search Diagnosis" prefix={<SearchOutlined />} />
        </AutoComplete>
      </Card>
    </>
  );
};
