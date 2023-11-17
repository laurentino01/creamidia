import { setCookie, parseCookies, destroyCookie } from "nookies";

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

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth`, options);
  console.log(process.env.NEXT_PUBLIC_BASE_URL);

  const { body } = await res.json();
  const token = body.data["x-auth-token"];

  if (token) {
    setCookie(undefined, "token", token, {
      maxAge: 60 * 60 * 24,
    });
    return token;
  } else {
    return null;
  }
}

function verifyUser() {
  const token = parseCookies().token;

  return token;
}

function logout() {
  destroyCookie(undefined, "token");
}
export const authService = {
  signIn,
  verifyUser,
  logout,
};
