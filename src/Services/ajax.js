import axios from "axios";

const ajax = axios.create({});

const CancelToken = () => axios.CancelToken.source();
const { isCancel } = axios;

const authHeaders = () => ({
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiZG9jdG9yX3VuaXF1ZV9pZCI6ImtkblcxNTQ3WUJBNDgiLCJtb2JpbGVfbm8iOiI5OTc4NTAxNDMyIiwiY2xpbmljX2lkIjoiMSIsImhvc3BpdGFsX2J1c2luZXNzX2lkIjoiNTQ1NjE0OTEiLCJ1c2VyX2lkIjoiMSJ9LCJpYXQiOjE3MDg2MjUyOTMsImV4cCI6MTcwODY1NDA5M30.q_t-Vu3XnjJwtHTmA3g8oqrXV6wym3vWDHk4Fgr2wBQ`,
  "Content-Type": "application/json",
});

ajax.defaults.baseURL =
  "https://diagnosis-webservice.azurewebsites.net/api/v1/diagnosis/";
ajax.interceptors.request.use((config) => {
  return { ...config, headers: { ...config.headers, ...authHeaders() } };
});

export { ajax, CancelToken, isCancel };
