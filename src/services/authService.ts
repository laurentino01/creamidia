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

  const res = await fetch(`http://localhost:3001/auth`, options);

  const { body } = await res.json();
  const token = body.data["x-auth-token"];

  nookies.setCookie(undefined, "token", token, {
    maxAge: 60 * 60 * 60,
  });

  return token as string;
}

export const authService = {
  signIn,
};
