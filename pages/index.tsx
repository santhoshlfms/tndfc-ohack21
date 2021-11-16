import type { NextPage } from "next";
import type { RefObject } from "react";
import Head from "./components/Head";
import Image from "next/image";
import Link from "next/link";
import authError from "./_auth-error";
import { getAuth, signInWithEmailAndPassword, signOut, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Alert, Button, Card, Container, Dropdown, Form } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import "../firebase/fbClient";

interface FormData {
  email: string;
  password: string;
}

declare global {
  interface Window {
    FB: any;
  }
}

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

const Home: NextPage = () => {
  const router = useRouter();
  const [loggingIn, setLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const form: RefObject<HTMLFormElement> = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    setLoggingIn(true);
    try {
      console.log(data);
      const { user } = await signInWithEmailAndPassword(getAuth(), data.email, data.password);
      if (!user.emailVerified) {
        await signOut(getAuth());
        throw { code: "auth/email-not-verified" };
      }
      form.current?.reset();
      reset();
      console.log(user);
      router.replace((router.query?.next ?? "/dashboard") as string);
    } catch (err: any) {
      console.log(err);
      setLoginError(authError(err?.code));
    }
    setLoggingIn(false);
  };

  return (
    <div>
      <Head />
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="" className="h1">
                <b>TNDFC</b> Admin
              </a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Sign in to start your session</p>

              <form action="" method="post"    
                  onKeyPress={(e) => {
                if (e.code === "Enter") {
                  setLoginError("");
                  handleSubmit(onSubmit)();
                }
              }}>
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Email" 
                  disabled={loggingIn}
                   {...register("email")}/>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Password"  disabled={loggingIn}
                    {...register("password")}/>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8"></div>
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block" disabled={loggingIn}
                      onClick={() => {
                      setLoginError("");
                      handleSubmit(onSubmit)();
                    }}>
                      Sign In
                    </button>
                   
                  </div>
                </div>
              </form>
            </div>
            <div className="m-2">
               {loginError && <Alert variant="danger">{loginError}</Alert>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
