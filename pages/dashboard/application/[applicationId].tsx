import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Select from "react-select";
import Image from "next/image";
import moment from "moment";
import { getFirestore, getDoc, doc, updateDoc } from "firebase/firestore";
import Head from "../../components/Head";
import Navbar from "../../components/Navbar";
import userSchema from "../../../types/user";

export default function Application(): JSX.Element {
  const router = useRouter();
  const [application, setApplication] = useState<userSchema>();
  const [applicationId, setApplicationId] = useState("");
  const [appStatus, setAppStatus] = useState();

  const options: any = [
    { value: "APPROVED", label: "Approve" },
    { value: "DECLINED", label: "Decline" },
    { value: "MORE_INFO", label: "Need More Info" },
  ];

  const handleChange = (selectedOption: any) => {
    setAppStatus(selectedOption);
    //console.log(`Option selected:`, selectedOption);
    if (applicationId) {
      updateStatus(selectedOption.value);
    }
  };

  const updateStatus = async (status: string) => {
    const appRef = doc(getFirestore(), "application", applicationId);
    await updateDoc(appRef, {
      "jobApplication.status": status,
    });
  };

  const getApplicationById = async (param: any) => {
    if (param.applicationId) {
      const docRef = doc(getFirestore(), "application", param.applicationId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const appData = docSnap.data() as userSchema;
        //console.log("Document data:", docSnap.data());
        setApplication(appData);
        setAppStatus(
          options.filter(
            (i: { value: string | undefined }) => i.value === appData?.jobApplication?.status
          )
        );
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
  };
  useEffect(() => {
    console.log(router.query.applicationId);
    getApplicationById(router.query);
    setApplicationId(router.query.applicationId as string);
  }, [router.query.applicationId]);

  return (
    <div>
      <Head />
      <Navbar></Navbar>
      <hr />
      <div className="container">
        <div className="card card-secondary">
        

          <form className="form-horizontal">
            <div className="card-body">
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Name</label>
                <div className="col-sm-8 p-2">{application?.name}</div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Address</label>
                <div className="col-sm-8 p-2">
                  <div>{application?.address?.line1}</div>
                  <div>{application?.address?.line2}</div>
                  <div>{application?.address?.line3}</div>
                  <div>{application?.address?.city}</div>
                  <div>{application?.address?.state}</div>
                  <div>{application?.address?.country}</div>
                  <div>{application?.address?.pinCode}</div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Contact No.</label>
                <div className="col-sm-8 p-2">{application?.mobileNo}</div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Email id.</label>
                <div className="col-sm-8 p-2">{application?.email}</div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Age & Date of Birth</label>
                <div className="col-sm-8 p-2">{moment(application?.dob).format("MM YYYY")}</div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Gender</label>
                <div className="col-sm-8 p-2">{application?.sex}</div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Educational Qualification</label>
                <div className="col-sm-8 p-2">{application?.education}</div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Type of Disability</label>
                <div className="col-sm-8 p-2">{application?.disability}</div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Type of Job required</label>
                <div className="col-sm-8 p-2">{application?.jobApplication?.jobType}</div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Experience if any</label>
                <div className="col-sm-8 p-2">
                  {application?.jobApplication?.experience == true ? "Yes" : "No"}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">
                  Are you need any Training/Skill required
                </label>
                <div className="col-sm-8 p-2">
                  {application?.jobApplication?.trainingNeeded == true ? "Yes" : "No"}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">
                  If yes, what type of training you need
                </label>
                <div className="col-sm-8 p-2">{application?.jobApplication?.trainingDetails}</div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Expected salary (per month)</label>
                <div className="col-sm-8 p-2">{application?.jobApplication?.expectedSalary}</div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Are you willing to work in shifts</label>
                <div className="col-sm-8 p-2">
                  {application?.jobApplication?.nightShits == true ? "Yes" : "No"}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">
                  Are you willing to work outside from your own district
                </label>
                <div className="col-sm-8 p-2">
                  {application?.jobApplication?.relocate == true ? "Yes" : "No"}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">
                  Any other information willing to share for supporting your employment
                </label>
                <div className="col-sm-8 p-2">{application?.jobApplication?.otherInfo}</div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Application decision:</label>
                <div className="col-sm-8 p-2">
                  <Select value={appStatus} onChange={handleChange} options={options} />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div></div>
      </div>
    </div>
  );
}
