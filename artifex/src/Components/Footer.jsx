import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Footer({ setLoginVisible, setSignUp }) {
  function handleButtonClick() {
    setLoginVisible(true);
    setSignUp(false);
  }
  return (
    <footer className=" p-8 mt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="mb-8 md:mx-auto">
            <h3 className="text-xl text-black font-bold mb-4">ҮНДСЭН ЦЭС</h3>
            <nav>
              <a
                href="/accessor"
                className="text-gray-400 block hover:text-btnColor2"
              >
                Үнэт эдлэл
              </a>
              <a
                href="/painting"
                className="text-gray-400 block hover:text-btnColor2"
              >
                Уран зураг
              </a>
              <a
                href="/clothes"
                className="text-gray-400 block hover:text-btnColor2"
              >
                Хувцас
              </a>
              <a
                href="/souvenirs"
                className="text-gray-400 block hover:text-btnColor2"
              >
                Бэлэг дурсгал
              </a>
            </nav>
          </div>
          <div className="mb-8">
            <h3 className="text-xl text-black font-bold mb-4">
              ARTIFEX ГЭЖ ЮУ ВЭ?{" "}
            </h3>
            <p className="text-gray-400 w-4/5">
              Artifex бол хэрэглэгч, үйлдвэрлэгч хоёрыг холбох онлайн худалдааны
              вебсайт юм.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl text-black font-bold mb-4">
              ХЭРЭГЛЭГЧИЙН БУЛАН
            </h3>
            <ul className="text-gray-400">
              <li
                onClick={() => {
                  setLoginVisible(true);
                }}
                className=" hover:text-btnColor2"
              >
                Нэвтрэх
              </li>

              <li onClick={handleButtonClick} className=" hover:text-btnColor2">
                Бүртгүүлэх
              </li>
              <li
                onClick={() => {
                  alert("Энэ цэс түр хаалттай байна.");
                }}
                className=" hover:text-btnColor2"
              >
                Санал хүсэлт
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-black font-bold">БИДНИЙГ ХОЛБОГДОХ</h3>
            <p className="text-gray-400">
              Утас: (+976) 9911-1234
              <br /> Имэйл: Artifex@gmail.com
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                className="text-gray-400 hover:text-btnColor2"
              >
                <BsFacebook className="w-8 h-8" />
              </a>
              <a
                href="https://www.twitter.com/"
                className="text-gray-400 hover:text-btnColor2"
              >
                <BsTwitter className="w-8 h-8" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-gray-400 hover:text-btnColor2"
              >
                <BsInstagram className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/"
                className="text-gray-400 hover:text-btnColor2"
              >
                <BsLinkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Бүх эрх хуулиар хамгаалагдсан.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
