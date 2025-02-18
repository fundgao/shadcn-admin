import axios from "axios";
import {
  AUTH_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  USER_KEY,
} from "@/constants/common";
import { getItem, getPathname, setItem, reload, removeItem } from "@/utils";
// import { message } from "antd";

const AUTH_TOKEN = getItem(AUTH_TOKEN_KEY) || "";
const REFRESH_TOKEN = getItem(REFRESH_TOKEN_KEY) || "";
const USER = JSON.parse(getItem(USER_KEY) || "{}");
// const baseURL = "http://localhost:3001";
const baseURL = "http://43.138.199.159:3001"; // 腾讯云
// const baseURL = "http://13.250.41.158:3001"; // AWS

// https://github.com/axios/axios
const service = axios.create({
  baseURL,
});

service.defaults.headers.common["Authorization"] = AUTH_TOKEN
  ? `Bearer ${AUTH_TOKEN}`
  : "";
service.defaults.headers["user"] = USER.username;
service.defaults.headers["page"] = getPathname();
service.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
service.defaults.timeout = 10000;

async function refreshToken() {
  const { data } = await service.get("/refresh", {
    params: {
      token: REFRESH_TOKEN,
    },
  });
  if (data.code == "0") {
    setItem(AUTH_TOKEN_KEY, data.data.accessToken);
    setItem(REFRESH_TOKEN_KEY, data.data.refreshToken);
    setItem(USER_KEY, JSON.stringify(data.data.user));
    reload();
  }
}

export const request = async ({ method, url, params }: AxiosDataType) => {
  try {
    const { data } = await service({
      method,
      url,
      params,
    });
    // data?.message && message.error(data?.message);
    return data;
  } catch (error: any) {
    const { status = "" } = error;
    if (typeof window !== "undefined" && status == "401") {
      removeItem(AUTH_TOKEN_KEY);
      removeItem(REFRESH_TOKEN_KEY);
      removeItem(USER_KEY);
      if (REFRESH_TOKEN) {
        refreshToken();
      } else {
        return (location.href = "/");
      }
    }
  }
};

export default request;
