"use client";

import { redirect, useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useCallback, useContext, useLayoutEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import "./admin.style.css";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary";

interface ILoginData {
  email: string;
  password: string;
}

export default function Login() {
  const [authUser, setAuthUser] = useState<ILoginData>({
    email: "",
    password: "",
  });

  const authContext = useContext(AuthContext);
  const router = useRouter();

  useLayoutEffect(() => {
    authContext.handleAuthServiceVerifyUser();
    if (authContext.isAuth) {
      redirect("/teste");
    }
  }, [authContext]);

  const handleSignIn = useCallback(
    async (e: React.MouseEvent) => {
      await authContext.handleAuthServiceSignIn(authUser);
      authContext.handleAuthServiceVerifyUser();

      if (authContext.isAuth) {
        redirect("/teste");
      }
    },
    [authContext, authUser]
  );

  return (
    <section id="login-area">
      <div className="container">
        <form>
          <label>
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Digite seu email"
            required
            onChange={(e) =>
              setAuthUser({
                email: e.target.value,
                password: authUser.password,
              })
            }
          />

          <label>
            <b>Senha</b>
          </label>
          <input
            type="password"
            placeholder="Digite sua senha"
            required
            onChange={(e) =>
              setAuthUser({ email: authUser.email, password: e.target.value })
            }
          />
          <ButtonPrimary click={handleSignIn}>Login</ButtonPrimary>
        </form>
      </div>
    </section>
  );
}
