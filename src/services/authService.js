import http from "./httpService";
import jwtDecode from "jwt-decode";

const authApiEndPoint = "/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(authApiEndPoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function logiWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logiWithJwt,
  logout,
  getCurrentUser,
  getJwt
};
