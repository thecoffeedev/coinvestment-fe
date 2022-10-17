import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from ".";
import {
  changeUserEmail,
  changeUserPassword,
  getUserData,
  userLogout,
} from "../../apis/user";
import ProfilePicture from "../../assets/defaultProfile.png";
import Modal from "../../components/Modal/Modal";
import { Toastify } from "../../utils/Toast";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [changeEmailModal, setChangeEmailModal] = useState(false);
  const [disableChangeEmailBtn, setDisableChangeEmailBtn] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const [disableChangePasswordBtn, setDisableChangePasswordBtn] =
    useState(false);
  const [emailChangeObj, setEmailChangeObj] = useState({
    password: "",
    email1: "",
    email2: "",
  });
  const [passwordChangeObj, setPasswordChangeObj] = useState({
    password: "",
    newPassword1: "",
    newPassword2: "",
  });

  useEffect(() => {
    getUserData().then((res) => setUser(res.data));
  }, []);

  const handleEmailChangeSubmit = () => {
    setDisableChangeEmailBtn(true);
    if (emailChangeObj.password === "") {
      Toastify("error", "No password is given!");
      setDisableChangeEmailBtn(false);

      return;
    }
    if (emailChangeObj.email1 !== emailChangeObj.email2) {
      Toastify("error", "Email addresses given does not match!");
      setDisableChangeEmailBtn(false);

      return;
    }
    if (
      emailChangeObj.email1 === emailChangeObj.email2 &&
      !emailChangeObj.email1.includes("@") &&
      !emailChangeObj.email1.includes(".")
    ) {
      Toastify("error", "Enter valid email address!");
      setDisableChangeEmailBtn(false);
      return;
    }
    changeUserEmail({
      currentPassword: emailChangeObj.password,
      newEmailAddress: emailChangeObj.email1,
    }).then((res) => {
      Toastify("success", res.data.status.statusMessage);
      setChangeEmailModal(false);
      getUserData().then((res) => setUser(res.data));
    });
    setDisableChangeEmailBtn(false);
  };

  const handlePasswordChangeSubmit = () => {
    setDisableChangePasswordBtn(true);
    if (passwordChangeObj.password === "") {
      Toastify("error", "No password is given!");
      setDisableChangePasswordBtn(false);
      return;
    }
    if (passwordChangeObj.newPassword1 !== passwordChangeObj.newPassword2) {
      Toastify("error", "New passwords does not match!");
      setDisableChangePasswordBtn(false);
      return;
    }
    changeUserPassword({
      currentPassword: passwordChangeObj.password,
      newPassword: passwordChangeObj.newPassword1,
    })
      .then((res) => {
        Toastify("success", res.data.status.statusMessage);
        setChangePasswordModal(false);
        userLogout().then((res) => {
          localStorage.clear();
          navigate("/login");
        });
      })
      .catch((err) => console.log(err));
    setDisableChangePasswordBtn(false);
  };

  return (
    <Dashboard>
      <div className="w-full max-w-3xl p-8 mx-auto text-center text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100">
        <div className="w-full">
          <h1 className="text-4xl font-bold">Profile</h1>
          <img
            src={ProfilePicture}
            alt="profile picture"
            width={"98px"}
            className="bg-white rounded-full p-0 my-8 mx-auto border-primaryPurple border-4 hover:cursor-pointer"
            title="Profile"
          />
          <div className="grid grid-cols-2 text-left px-16 mx-12 gap-4">
            <div>Name</div>
            <div>{user.name}</div>
            <div>Email</div>
            <div>{user.emailAddress}</div>
            <div>Customer ID</div>
            <div>{user.customerID}</div>
            <div>Last Login</div>
            <div>{user.previousSignInDatetime?.split(" ").join(" | ")}</div>
            <div>Current Login</div>
            <div>{user.currentSignInDatetime?.split(" ").join(" | ")}</div>
          </div>
        </div>
        <div className="flex flex-row justify-end mt-8 gap-2 px-6">
          <button
            className="rounded-full bg-[#3f0071] text-white px-3 py-1"
            onClick={() => setChangeEmailModal(true)}
          >
            Change email
          </button>
          <button
            className="rounded-full bg-[#3f0071] text-white px-3 py-1"
            onClick={() => setChangePasswordModal(true)}
          >
            Change password
          </button>
        </div>
      </div>
      {/* Change Email modal */}
      <Modal
        title="Change your email"
        onClose={() => setChangeEmailModal(false)}
        show={changeEmailModal}
        actionBtn="Change email"
        submitAction={handleEmailChangeSubmit}
        primaryBtnDisable={disableChangeEmailBtn}
      >
        <div className="grid grid-cols-2 gap-4 my-4 px-8 mx-6">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="border-2 rounded-sm px-2"
            onChange={(e) =>
              setEmailChangeObj((prevState) => {
                return { ...prevState, password: e.target.value };
              })
            }
          />
          <label htmlFor="email1">Email</label>
          <input
            id="email1"
            type="email"
            placeholder="Enter new email"
            className="border-2 rounded-sm px-2"
            onChange={(e) =>
              setEmailChangeObj((prevState) => {
                return { ...prevState, email1: e.target.value };
              })
            }
          />
          <label htmlFor="email2">Confirm email</label>
          <input
            id="email2"
            type="email"
            placeholder="Confirm new email"
            className="border-2 rounded-sm px-2"
            onChange={(e) =>
              setEmailChangeObj((prevState) => {
                return { ...prevState, email2: e.target.value };
              })
            }
          />
        </div>
      </Modal>
      {/* Change Password modal */}
      <Modal
        title="Change your Password"
        onClose={() => setChangePasswordModal(false)}
        show={changePasswordModal}
        actionBtn="Change password"
        submitAction={handlePasswordChangeSubmit}
        primaryBtnDisable={disableChangePasswordBtn}
      >
        <div className="grid grid-cols-2 gap-4 my-4 px-8 mx-6">
          <label htmlFor="passwordP">Password</label>
          <input
            id="passwordP"
            type="password"
            placeholder="Enter your password"
            className="border-2 rounded-sm px-2"
            onChange={(e) =>
              setPasswordChangeObj((prevState) => {
                return { ...prevState, password: e.target.value };
              })
            }
          />
          <label htmlFor="passwordP1">New password</label>
          <input
            id="passwordP1"
            type="password"
            placeholder="Enter new password"
            className="border-2 rounded-sm px-2"
            onChange={(e) =>
              setPasswordChangeObj((prevState) => {
                return { ...prevState, newPassword1: e.target.value };
              })
            }
          />
          <label htmlFor="passwordP2">Confirm password</label>
          <input
            id="passwordP2"
            type="password"
            placeholder="Confirm new Password"
            className="border-2 rounded-sm px-2"
            onChange={(e) =>
              setPasswordChangeObj((prevState) => {
                return { ...prevState, newPassword2: e.target.value };
              })
            }
          />
        </div>
      </Modal>
    </Dashboard>
  );
}

export default Profile;
