import API from "../api/apiConfig";
import { AuthUserType } from "../interfaces/auth";

export const apiLogin = async (data: { email: string; password: string }) => {
  const url = `/auth/login`;
  return API.post<AuthUserType>(url, data);
};
