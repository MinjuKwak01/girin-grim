import { joinURL, loginURL, headerMemberUrl } from "@/constants/urls";
import { Server } from "./axios";
import { UserFeed } from "@/Model/Feed";
import { LoginUser, UserDetail, UserForm } from "@/Model/user";
import { Backed } from "@/Model/Backed";
import { TPostResponse, TResponse } from "@/Model/Response";
import { setToken } from "@/utils/authenticate";
import { JoinPostResponseError } from "@/constants/responseData";

export const checkDuplicate = async ({
  email,
  nickname,
  type,
}: {
  email: string;
  nickname: string;
  type: "email" | "name";
}) => {
  if (type === "email" && email.length === 0) return JoinPostResponseError;
  if (type === "name" && nickname.length === 0) return JoinPostResponseError;

  const params = type == "email" ? { email } : { nickname };
  const data = await Server.get(joinURL, { params }).then((res) => res.data);
  return data;
};

export const join = async (submitData: UserForm) => {
  // submitData.favUniversity.push({ favUniversityId: 1 });
  const data = Server.post(joinURL, submitData).then((res) => res.data.success);
  return data;
};

export const login = async (submitData: LoginUser): Promise<TPostResponse> => {
  //TODO: 에러 처리 추가하기
  return Server.post(loginURL, submitData)
    .then((res) => {
      const {
        response: { accessToken, refreshToken },
      } = res.data;
      setToken(accessToken, refreshToken);
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export const getUser = async (): Promise<
  TResponse<{
    memberId: number;
    image: string;
  }>
> => {
  const data = Server.get(headerMemberUrl).then((res) => res.data);
  return data;
};

export const getUserDetail = async (
  memberId: number
): Promise<TResponse<UserDetail>> => {
  const data = await Server.get("/member/" + memberId).then((res) => res.data);
  return data;
};

export const getMyFunding = async (
  memberId: number
): Promise<TResponse<UserFeed>> => {
  const data = await Server.get(`/member/${memberId}/backed`).then(
    (res) => res.data
  );
  return data;
};

export const getBacked = async (
  memberId: number,
  fundingId: number
): Promise<TResponse<Backed>> => {
  const data = await Server.get(`/member/${memberId}/backed/${fundingId}`).then(
    (res) => res.data
  );
  return data;
};
