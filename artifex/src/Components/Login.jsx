import Logo from "./itemPicture/Logo.svg";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser, userData, setLoginVisible }) {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const checkUser = () => {
    const usercheck = userData.find(
      (user) =>
        user.username === data.username && user.password === data.password
    );
    if (usercheck) {
      alert("Нэвтрэлт амжилттай");
      setUser(data.username);
      setLoginVisible(false);
    } else {
      setLoginVisible(true);
    }
    navigate("/ҮнэтЭдлэл");
  };

  console.log(data);
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0",
          zIndex: "3",
        }}
        onClick={() => {
          setLoginVisible(false);
        }}
      ></div>
      <div className="flex flex-col w-2/5 justify-center px-6 pb-12 rounded-3xl lg:px-8 bg-white z-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-52 w-52" src={Logo} alt="Your Company" />
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Нэвтрэх
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Бүртгэлтэй хаягаа оруулна уу
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Bulgan"
                  onChange={changeHandler}
                  value={data.username}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Нууц үг
                </label>
                <div className="text-sm">
                  <a
                    onClick={() => {
                      {
                        userData.map((item) => {
                          alert(item.username + ":" + item.password);
                        });
                      }
                    }}
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Нууц үгээ мартсан уу?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={data.password}
                  placeholder="Нууц үг"
                  onChange={changeHandler}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={() => checkUser(userData)}
                className="flex w-full justify-center rounded-xl bg-btnColor2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-btnColor1 hover:text-btnColor2"
              >
                Нэвтрэх
              </button>
            </div>
          </form>
          <div className="mt-10 flex flex-row justify-between">
            <a className="text-center text-sm text-gray-500" href="/Бүртгүүлэх">
              Шинээр бүртгүүлэх
            </a>
            <button
              className="text-red-500 text-sm font-semibold leading-6"
              onClick={() => {
                setUser("Зочин");
              }}
            >
              Гарах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
