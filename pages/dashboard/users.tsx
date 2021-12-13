import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Toggle from "react-toggle";

import Head from "../components/Head";
import Navbar from "../components/Navbar";
import userSchema from "../../types/user";
import { app } from "firebase-admin";
import _ from "lodash";
import AddUser from "../components/AddUser";

export default function Users(): JSX.Element {
  const router = useRouter();
  const [users, setUsers] = useState<userSchema[]>();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);

  const options: any = [
    { value: "APPROVED", label: "Approve" },
    { value: "DECLINED", label: "Decline" },
    { value: "MORE_INFO", label: "Need More Info" },
  ];

  const usersList = () => {
    fetch("/api/users")
      .then((res) => res.json())
      .then(
        (data) => {
          if (data.status === "SUCCESS") {
            setUsers(data.data);
            setShowAddUser(false)
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handleAdminFilter = (event: any) => {
    setIsAdmin(event.target.checked);
    if (event.target.checked) {
      let onlyAdminList: any = _.filter(users, function (o: any) {
        return o.customClaims["ROLE"] === "ADMIN_TNDFC";
      });
      setUsers(onlyAdminList);
    } else {
      usersList();
    }
  };

  const enableDisableUser = (user: any) => {
    let disable = !user.disabled;
    fetch("/api/users/change-status", {
      method: "POST",
      body: JSON.stringify({
        uid: user.uid,
        disable: disable,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(
        (data) => {
          if (data.status === "SUCCESS") {
            usersList();
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const enableAdmin = (user: any) => {
    let enable = user.customClaims["ROLE"] === "ADMIN_TNDFC" ? false : true;
    fetch("/api/users/make-admin", {
      method: "POST",
      body: JSON.stringify({
        uid: user.uid,
        enbale: enable,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(
        (data) => {
          if (data.status === "SUCCESS") {
            usersList();
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    usersList();
  }, []);

  return (
    <div>
      <Head />
      <Navbar></Navbar>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-xs-2">
            <button type="submit" className="btn btn-outline-primary" onClick={()=> setShowAddUser(!showAddUser)}>
              Add Admin
            </button>
          </div>
        </div>
        <div className="row mt-2 " >
          {
            showAddUser ? <AddUser userList={usersList}/> : null
          }
           
        </div>
       
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">List of Admin Users</h3>
          </div>
          <div className="card-body p-0">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th style={{ width: "10px" }}>#</th>
                  <th>Users</th>
                  <th>Email</th>
                  <th>Uid</th>
                  <th>Enable/Disable</th>
                  <th>Make Admin</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user: any) => (
                    <tr key={user.uid}>
                      <td>1.</td>
                      <td> {user.displayName}</td>
                      <td> {user.email}</td>
                      <td> {user.uid}</td>
                      <td>
                        <Toggle
                          defaultChecked={user.disabled}
                          name="admin"
                          value="onlyAdmin"
                          onChange={() => enableDisableUser(user)}
                        />
                      </td>
                      <td>
                        <Toggle
                          defaultChecked={
                            user.customClaims["ROLE"] === "ADMIN_TNDFC" ? true : false
                          }
                          name="admin"
                          value="onlyAdmin"
                          onChange={() => enableAdmin(user)}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
