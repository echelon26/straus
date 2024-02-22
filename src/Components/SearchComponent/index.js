import React, { useCallback, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useDiagnosis } from "../../Hooks/useDiagnosis";
import { Space, Input, AutoComplete } from "antd";

const SearchComponent = ({ onSelectRecord }) => {
  const { getDiagnosisList, searchDiagnosis } = useDiagnosis();
  const [searchResult, setSearchResult] = useState("");
  const [diagnosisList, setDiagnosisList] = useState([
    { value: "", label: "" },
  ]);
  const updateDiagnosisData = (data) => {
    let list = data?.map((item) => ({
      value: item.tds_name,
      label: item.tds_name,
      key: item?.tds_id,
    }));
    setDiagnosisList(list);
  };

  React.useEffect(() => {
    if (!searchResult?.length)
      getDiagnosisList().then(({ data }) => updateDiagnosisData(data));
  }, [searchResult?.length]);

  const onSearchDiagnisis = (query) => {
    setSearchResult(query);
    if (query?.length) {
      searchDiagnosis(query).then(({ data }) => updateDiagnosisData(data));
    }
  };

  const onSelect = (text, data) => {
    onSelectRecord(data);
  };

  return (
    <>
      <Space>
        <AutoComplete
          style={{ width: "810px", height: "40px" }}
          showSearch
          value={searchResult}
          onSelect={onSelect}
          onSearch={onSearchDiagnisis}
          options={diagnosisList}
        >
          <Input placeholder="Search Diagnosis" prefix={<SearchOutlined />} />
        </AutoComplete>
      </Space>
    </>
  );
};
export default SearchComponent;
