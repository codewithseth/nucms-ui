import { Label, TextInput } from "flowbite-react";
import { FileInput, Button } from "flowbite-react";
import { useState, useEffect } from "react";
import profile from "../../../../../../_timouy/assets/images/pf.png";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import useUser from "../../users/core/action";
import { useSelector } from "react-redux";
import { uploadImage } from "../core/Request";
import { setInfo } from "../../users/core/reducer";
import UpdatePassword from "./PasswordModal";

export const ContactSetting = () => {
  const { getUserInfo, getUserDetail } = useUser();
  const dispatch = useDispatch();
  const userInfo = localStorage.getItem("user");
  const userInfoObject = JSON.parse(userInfo);
  const id = userInfoObject.id;
  const user = useSelector((state) => state.user.info);

  // const [showModal, setShowModal] = useState(false);
  // const handleOpenModal = () => {
  //     setShowModal(!showModal);
  // };

  useEffect(() => {
    const tokenStore = localStorage.getItem("token");
    const getUserData = async () => {
      try {
        const data = await getUserInfo(tokenStore);
        dispatch(setInfo(data));
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };
    getUserData();
  }, [id]);

  const [previewUrl, setPreviewUrl] = useState(null);
  const [templatePreviewUrl, setTemplatePreviewUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const tokenStore = localStorage.getItem("token");
  const { editUser } = useUser();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      setSelectedFile(e.target.files[0]);
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    const token = tokenStore;
    const url = process.env.REACT_APP_IMAGE_URL;
    try {
      const data = await uploadImage(token, selectedFile);
      console.log(data);

      const newProfileUrl = `${url}${data.data}`;
      setTemplatePreviewUrl(URL.createObjectURL(selectedFile));

      const updatedUserData = {
        ...user,
        profile: newProfileUrl,
      };

      dispatch(setInfo(updatedUserData));

      editUser(id, updatedUserData).then(() => {
        getUserDetail(user?.id);
      });
    } catch (error) {
      console.error("Failed to upload template file:", error);
    }
  };

  const fileInputRef = useRef(null);
  return (
    <div className="px-4">
      {/* <AccountInformation /> */}
      <div className="flex justify-end items-end mt-4">
        <button
          className="bg-primary text-white hover:bg-sky-600 font-semibold text-[14px] py-2 px-5 border border-gray-400 rounded-lg shadow"
          onClick={handleUpload}
        >
          Save
        </button>
      </div>
      {/* Site Profile */}
      <div className="gap-4">
        <div className="flex flex-col mt-6 md:flex-row md:items-start">
          <div className="w-full md:w-1/2">
            <div className="font-semibold text-black text-[17px] mb-4 md:mb-4">Site Profile</div>
          </div>
          <div className="w-full md:w-3/4 border rounded-xl p-5">
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white h-auto"
            >
              Site Title
            </label>
            <input
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              disabled
              value={user?.siteUrl}
            />
            <label
              htmlFor="default-input"
              className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Site Address
            </label>
            <input
              type="text"
              id="default-input"
              placeholder="timouy.com"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              disabled
            />
          </div>
        </div>
      </div>

      {/* Contact information */}
      <div className="gap-4">
        <div className="flex flex-col mt-5 md:flex-row md:items-start">
          <div className="w-full md:w-1/2">
            <div className="font-semibold text-black text-[17px] mb-4 md:mb-0">Contact information</div>
          </div>
          <div className="w-full md:w-3/4 mb-6 border rounded-xl p-5">
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="your username"
              disabled
              value={user?.username}
              className="w-full"
            />
            <div className="mt-2 mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="name@gmail.com"
              disabled
              value={user?.email}
              className="w-full"
            />
            <div className="mt-2 mb-2 block">
              <Label htmlFor="role" value="Role" />
            </div>
            <TextInput id="role" type="text" placeholder="your role" disabled value={user?.roles} className="w-full" />
          </div>
        </div>
      </div>

      {/* Profile Setting */}
      <div className="gap-4">
        <div className="flex flex-col mt-5 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="font-semibold text-black text-[17px] mb-4 md:mb-0">Profile Setting</div>
            <h1 className="mt-2">Change your basic profile information</h1>
          </div>
          <div className="w-full md:w-3/4 border rounded-xl p-5 mb-6">
            <div className="font-semibold text-black text-[14px] mb-5">Avatar</div>
            <div className="upload-image flex flex-col gap-4 items-center md:flex-row">
              {previewUrl ? (
                <img className="w-24 h-24 rounded-full" src={previewUrl} alt="Selected" />
              ) : (
                <img className="w-24 h-24 rounded-full" src={user?.profile || profile} alt="profile" />
              )}
              <FileInput id="file-upload" onChange={handleFileChange} style={{ display: "none" }} ref={fileInputRef} />
              <div>
                <p className="text-sm text-gray-600 mb-3">Recommended dimensions of 100*100</p>
                <label htmlFor="file-upload" className="custom-file-upload">
                  <Button
                    color="light"
                    pill
                    className="rounded-lg focus:ring-0"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Change Avatar
                  </Button>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col mt-5 md:flex-row md:items-start">
          <div className="w-full md:w-1/2">
            <div className="font-semibold text-black text-[17px] mb-4 md:mb-0">Password</div>
            <h1 className="mt-2">Change your password.</h1>
          </div>
          <div className="w-full md:w-3/4 mb-6 border rounded-xl p-5">
            <UpdatePassword
              // show={showModal}
              // handleClose={handleOpenModal}
              id={user?.id}
            />
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between">
                <Button
                    className="mt-2 text-white text-sm bg-primary rounded-lg"
                    onClick={handleOpenModal}
                >
                    <h1 className="font-light px-2">Update Password</h1>
                </Button>
            </div> */}
    </div>
  );
};
