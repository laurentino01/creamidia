"use client";

import { redirect, useRouter } from "next/navigation";
import { useCallback, useContext, useLayoutEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";

import "./admin.style.css";
import Image from "next/image";

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
      redirect("/admin/dashboard");
    }
  }, [authContext]);

  const handleSignIn = useCallback(
    async (e: React.MouseEvent) => {
      await authContext.handleAuthServiceSignIn(authUser);
      authContext.handleAuthServiceVerifyUser();

      if (authContext.isAuth) {
        redirect("/admin/dashboard");
      }
    },
    [authContext, authUser]
  );

  return (
    <section id="login-area">
      <div className="container">
        <div>
          <Image
            src={"/images/logoWhite.svg"}
            alt="Logo creamidia"
            width={234}
            height={117}
          />
        </div>
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
          <button className="btn btn-green" onClick={handleSignIn}>
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
