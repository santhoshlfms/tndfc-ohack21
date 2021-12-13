import React, { useEffect, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";

interface Props {
  userList?: any;
}

export default function AddUser(props: Props): JSX.Element {
  const { currentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userList = props.userList;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    console.log({ username: username.value, password: password.value });
    fetch("/api/users/create-admin", {
      method: "POST",
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(
        (data) => {
          if (data.status === "SUCCESS") {
            userList();
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="col-lg-7">
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Add Admin</h3>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="username">Email address</label>
              <input
                type="email"
                className="form-control"
                id="username"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Create Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
