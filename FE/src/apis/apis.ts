//TODO: 반환 타입 지정하기

import { joinURL, loginURL } from "@/constants/urls";
import { Server } from "./axios";
import { TOKEN_EXPIRED_TIME } from "@/constants/LoginData";

export const checkDuplicate = async (email: string) => {
  const data = await Server.get(joinURL, { params: { email } }).then(
    (res) => res.data
  );
  // .catch((error) => {
  //   if (error.response.status === 400) {
  //     // 요청이 잘못되었습니다.
  //   }
  //   if (error.request.status === 423) {
  //     // 중복
  //     console.log("중복되었습니다!");
  //   }
  // });
  return data;
};

export const join = async (submitData: UserForm) => {
  const data = Server.post(joinURL, submitData).then((res) => res.data.success);
  return data;
};

export const login = async (submitData: LoginUser) => {
  //TODO: 에러 처리 추가하기
  Server.post(loginURL, submitData)
    .then((res) => {
      const {
        response: { accessToken, refreshToken },
      } = res.data;
      Server.defaults.headers.common["Authorization"] = accessToken; //TODO: Bearer 까지 받아오는지

      localStorage.setItem("accessToken", accessToken); //TODO: 쿠키로 바꾸기

      setTimeout(() => {
        //accessToken 만료 1분전에 refrechToken 으로 재발급
      }, TOKEN_EXPIRED_TIME - 6000);

      return true;
    })
    .catch((error) => {
      // if (error.response.status === 400) {
      //   // 요청이 잘못되었습니다.
      // }
      // if (error.response.status === 401) {
      //   // 비밀번호가 틀렸습니다.
      // }
      // if (error.response.status === 404) {
      //   // 존재하지 않는 이메일입니다.
      // }
    });
};