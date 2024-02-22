import { ajax } from "./ajax";

export const getDiagnosisListService = (credentials) =>
  ajax.get(`/frequentlyDiagnosis`, credentials);

export const getDiagnosisTypeService = (credentials) =>
  ajax.get(`/diagnosis_type`, credentials);

export const editTemplateService = (template) =>
  ajax.get(`/editTemplate`, template);
export const addTemplateService = (template) =>
  ajax.get(`/addTemplate`, template);

export const listTemplateService = () => ajax.post(`/listTemplate`);

export const searchDiagnosisService = (searchText) =>
  ajax.post(`/searchDiagnosis`, { search: searchText });
