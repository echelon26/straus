import {
  getDiagnosisListService,
  getDiagnosisTypeService,
  editTemplateService,
  addTemplateService,
  listTemplateService,
  searchDiagnosisService,
} from "../Services";

export const getDiagnosisListHook = async () => {
  return getDiagnosisListService()
    .then(({ data }) => {
      return data;
    })
    .catch((error) =>
      console.log(">>>>>>>>>>>>> API error>>>>>>>>>>>>", error)
    );
};

export const getDiagnosisTypeHook = async () => {
  return getDiagnosisTypeService()
    .then(({ data }) => {
      return data;
    })
    .catch((error) =>
      console.log(">>>>>>>>>>>>> API error>>>>>>>>>>>>", error)
    );
};

export const editTemplateHook = async () => {
  return editTemplateService()
    .then(({ data }) => {
      return data;
    })
    .catch((error) =>
      console.log(">>>>>>>>>>>>> API error>>>>>>>>>>>>", error)
    );
};

export const addTemplateHook = async () => {
  return addTemplateService()
    .then(({ data }) => {
      return data;
    })
    .catch((error) =>
      console.log(">>>>>>>>>>>>> API error>>>>>>>>>>>>", error)
    );
};

export const searchDiagnosisHook = async (searchText) => {
  return searchDiagnosisService(searchText)
    .then(({ data }) => {
      return data;
    })
    .catch((error) =>
      console.log(">>>>>>>>>>>>> API error>>>>>>>>>>>>", error)
    );
};

export const listTemplateHook = async () => {
  return listTemplateService()
    .then(({ data }) => {
      return data;
    })
    .catch((error) =>
      console.log(">>>>>>>>>>>>> API error>>>>>>>>>>>>", error)
    );
};
