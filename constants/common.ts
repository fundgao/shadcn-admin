export const REFRESH_TOKEN_KEY = "REFRESH_TOKEN"; //refreshToken
export const AUTH_TOKEN_KEY = "AUTH_TOKEN";
export const USER_KEY = "USER_KEY";

// X | 今日头条 | 百度 | 小红书 | 微博
export const PLATFORM_MAP: any = {
  x: "Twt",
  toutiao: "今日头条",
  baidu: "百度",
  redbook: "小红书",
  weibo: "微博",
};

export const PLATFORM_OPTION = Object.keys(PLATFORM_MAP).map((key) => ({
  key: key,
  label: PLATFORM_MAP[key],
}));

export enum ModalType {
  Edit = "edit",
  Add = "add",
}

