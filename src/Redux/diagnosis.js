import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getDiagnosisListHook,
  addTemplateHook,
  searchDiagnosisHook,
  listTemplateHook,
  editTemplateHook,
} from "../Hooks/useDiagnosis";

const initialState = {
  miniOptionsList: [],
  selectedDiagnosis: [],
  diagnosisOptionsList: [],
  templateList: [],
};

export const getDiagnosisList = createAsyncThunk(
  "diagnosisList",
  async () => await getDiagnosisListHook()
);
export const searchDiagnosis = createAsyncThunk(
  "searchDiagnosis",
  async (queryText) => await searchDiagnosisHook(queryText)
);
export const listDiagnosisTemplate = createAsyncThunk(
  "listTemplate",
  async () => await listTemplateHook()
);

export const addTemplate = createAsyncThunk(
  "addTemplate",
  async (record) => await addTemplateHook(record)
);

export const editTemplate = createAsyncThunk(
  "editTemplate",
  async (record) => await editTemplateHook(record)
);
const diagnosis = createSlice({
  name: "diagnosis",
  initialState,
  extraReducers: (create) => {
    create.addCase(getDiagnosisList.fulfilled, (state, action) => {
      state.diagnosisOptionsList = action.payload?.data;
    });
    create.addCase(searchDiagnosis.fulfilled, (state, action) => {
      state.diagnosisOptionsList = action.payload;

      state.searchFilterOptionsList?.push(action.payload?.data);
    });
    create.addCase(addTemplate.fulfilled, (state, action) => {
      state.templateList?.push(action.payload);
    });
    create.addCase(listDiagnosisTemplate.fulfilled, (state, action) => {
      state.templateList?.push(action.payload);
    });
    create.addCase(editTemplate.fulfilled, (state, action) => {
      state.templateList = action.payload.diagnosis;
      const currentIndex = state.templateList?.findIndex(
        (template) => template.tdt_id === action.payload.tdt_id
      );
      if (currentIndex >= 0) {
        state.templateList[currentIndex] = action.payload;
      }
    });
  },
});

export default diagnosis.reducer;
