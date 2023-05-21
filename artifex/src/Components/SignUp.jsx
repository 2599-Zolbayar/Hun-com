import Logo from "./itemPicture/Logo.svg";
import React, { useState } from "react";

export default function SignUp({ userData, setUserData, setSignUp }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleButtonClick = () => {
    const newUser = {
      username: user.username,
      password: user.password,
    };

    setUserData([...userData, newUser]);
    alert("Бүртгэл ажилттай үүслээ");
    setSignUp(true);
  };

  return (
    <div className="flex flex-col w-2/5 justify-center px-6 pb-12 rounded-3xl lg:px-8 bg-white z-40">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-52 w-52" src={Logo} alt="Artifex" />
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Бүртгэл үүсгэх
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div className="flex-1">
            <label
              htmlFor="email"
              className="flex w-full text-sm font-medium leading-6 text-gray-900"
            >
              Хэрэглэгчийн нэр үүсгэнэ үү
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Bulgan"
                onChange={changeHandler}
                value={user.username}
                required
                className="flex w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Нууц үг үүсгэнэ үү
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={changeHandler}
                value={user.password}
                required
                className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              onClick={() => {
                setSignUp(true);
              }}
              type="button"
              className="px-3 py-2 text-sm font-semibold leading-6 drop-shadow-2xl"
            >
              Буцах
            </button>
            <button
              type="submit"
              onClick={handleButtonClick}
              className="rounded-md bg-btnColor2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-btnColor1 hover:text-btnColor2"
            >
              Хадгалах
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
