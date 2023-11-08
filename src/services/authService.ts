import * as nookies from "nookies";

export interface ISignInData {
  email: string;
  password: string;
}

export interface IUserData {
  email: string;
}

async function signIn({ email, password }: ISignInData) {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  const res = await fetch(`${process.env.BASE_URL}/admin/login`, options);

  const { body } = await res.json();
  const token = body.data["x-auth-token"];

  nookies.setCookie(undefined, "token", token, {
    maxAge: 60 * 60 * 60,
  });

  return token;
}

export const authService = {
  signIn,
};
