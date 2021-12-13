import React, { useEffect, useState } from "react";
import type { NextPage } from 'next'
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import router from "next/router";
import _ from "lodash";

import Head from '../components/Head'
import Navbar from '../components/Navbar'
import Widget from '../components/Widget'
import ApplicationTable from "../components/ApplicationTable";
import Reports from "../components/Reports";


import {
    collection,
    getFirestore,
    query,
    getDocs,
    
  } from "firebase/firestore";

const Dashboard: NextPage = () => {
    const [applications, setApplications] = useState([]);
    const [pending, setPending] = useState(true);
    const [totalApplication, setTotalApplication] = useState(0);
    const [totalComplete, setTotalComplete] = useState(0);
    const [totalPending, setTotalPending] = useState(0);
    const [totalActionNeeded, SetTotalActionNeeded] = useState(0);

    const filterStatus = (filterArray: any) => {
        if (filterArray.length > 0) {
          var result = applications.filter((item: any) =>
            filterArray.every((o: any) => o == item.status)
          );
          setApplications(result);
        } else {
          loadData();
        }
      };
  
      const datesFilter = (filterArray: any) => {};
  
      const loadData = async () => {
        const snapshot = await getDocs(query(collection(getFirestore(), "application")));
        const applicationList: any = [];
        snapshot.forEach((doc) => {
          applicationList.push(doc.data());
          console.log(doc.data())
        });
        setApplications(applicationList);
        // calculate widgets
        setTotalApplication(applicationList.length);
        setTotalComplete(
          _.countBy(applicationList, (app) => app.jobApplication.status === "APPROVED")
            .true || 0
        );
        SetTotalActionNeeded(
          _.countBy(applicationList, (app) => app.jobApplication.status === "MORE_INFO")
            .true || 0
        );
        setTotalPending(
          _.countBy(applicationList, (app) => app.jobApplication.status === "NEW").true || 0
        );
        setPending(false);
      };
      useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (!user) {
            router.replace("/");
          }
          loadData();
        });
      }, []);

    return (
        <div>
            <Head />
            <div className="wrapper">
            <Navbar />
            <div className="container mt-2">
            <Widget
              total={totalApplication}
              pending={totalPending}
              completed={totalComplete}
              actionNeeded={totalActionNeeded}
            />
            </div>
            <div>
            <div className="container mt-2">
              <Reports filterStatus={filterStatus} datesFilter={datesFilter} />
            </div>
                <ApplicationTable data={applications} pending={pending}/>
            </div>
            </div>
        </div>
    )
}

export default Dashboard
