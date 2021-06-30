import request from "../utils/request";
export const reqSendCode = (phone) => {
  return request({
    method: "GET",
    url: `/user/passport/sendCode/${phone}`,
  });
};
