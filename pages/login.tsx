import type { NextPage } from 'next'
import type { RefObject } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'
import Link from "next/link";
import authError from "./_auth-error";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Alert, Button, Card, Container, Dropdown, Form } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import "../firebase/fbClient"


interface FormData {
    email: string;
    password: string;
  }
  
  const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  });

const Login: NextPage = () => {
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
          console.log(data)
          const { user } = await signInWithEmailAndPassword(getAuth(), data.email, data.password);
          if (!user.emailVerified) {
            await signOut(getAuth());
            throw { code: "auth/email-not-verified" };
          }
          form.current?.reset();
          reset();
          console.log(user)
          router.replace((router.query?.next ?? "/") as string);
        } catch (err:any) {
          console.log(err)
          setLoginError(authError(err?.code));
        }
        setLoggingIn(false);
      };
  
  return (
    <Container className={styles.container}>
    <Card className={styles.card}>
      <Card.Body>
        <Card.Title className="text-center">Login</Card.Title>

        <Dropdown.Divider></Dropdown.Divider>

        <Form
          className={styles.form}
          ref={form}
          onKeyPress={(e) => {
            if (e.code === "Enter") {
              setLoginError("");
              handleSubmit(onSubmit)();
            }
          }}
        >
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email address"
              autoComplete="email"
              disabled={loggingIn}
              {...register("email")}
            />
            <Form.Text className={styles.formInputError}>{errors.email?.message}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your password"
              autoComplete="current-password"
              disabled={loggingIn}
              {...register("password")}
            />
            <Form.Text className={styles.formInputError}>{errors.password?.message}</Form.Text>
          </Form.Group>
        </Form>

        <Button
          variant="success"
          disabled={loggingIn}
          className={styles.btnSubmit}
          onClick={() => {
            setLoginError("");
            handleSubmit(onSubmit)();
          }}
        >
          Submit
        </Button>

        {loginError && <Alert variant="danger">{loginError}</Alert>}

       
      </Card.Body>
    </Card>
  </Container>
  )
}

export default Login
