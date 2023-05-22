import React, { useRef, useState } from "react";
import Cover from "./itemPicture/Cover.png";
import { TfiArrowCircleDown } from "react-icons/tfi";
import painting from "./itemPicture/painting.png";
import clotches from "./itemPicture/Clotches.png";
import acceciors from "./itemPicture/Acceciors.png";
import souvenirs from "./itemPicture/souvniers.png";
import artist from "./itemPicture/artist.png";
import { useNavigate } from "react-router-dom";
import MakeProduct from "./makeProduct";
import image1 from "./itemPicture/image1.png";
import image4 from "./itemPicture/image4.png";
import uranzurag2 from "./itemPicture/Uranzurag2.png";
import uranzurag6 from "./itemPicture/Uranzurag6.png";
import Huvtsas5 from "./itemPicture/Huvtsas5.png";
import Huvtsas6 from "./itemPicture/Huvtsas6.png";

function HomePage({ cart, setCart, setTotalQuantity }) {
  const scrollRef = useRef(null);

  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex flex-col items-center">
        <img src={Cover} alt="Cover" className="w-full" />
        <button onClick={scrollToBottom}>
          {" "}
          <TfiArrowCircleDown className="absolute w-10 h-10 bottom-1 text-btnColor2 transition-all duration-300 transform hover:translate-y-3" />
        </button>
      </div>
      <div
        ref={scrollRef}
        className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-8"
      >
        <Menu img={painting} title="УРАН ЗУРАГ" link="painting" />
        <Menu img={souvenirs} title="БЭЛЭГ ДУРСГАЛ" link="souvenirs" />
        <Menu img={clotches} title="ХУВЦАС" link="clothes" />
        <Menu img={acceciors} title="ҮНЭТ ЭДЛЭЛ" link="accessor" />
      </div>
      <div className="container mx-auto mt-8">
        <ProductList
          cart={cart}
          setCart={setCart}
          setTotalQuantity={setTotalQuantity}
        />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="p-20 font-semibold text-3xl">Уран бүтээлчид</h3>
        <div className="grid grid-cols-3 gap-y-7 gap-x-28">
          <Artist artist={artist} title="MR.Балдан" />
          <Artist artist={artist} title="MR.Балдан" />
          <Artist artist={artist} title="MR.Балдан" />
          <Artist artist={artist} title="MRS.Алимаа" />
          <Artist artist={artist} title="MRS.Алимаа" />
          <Artist artist={artist} title="MRS.Алимаа" />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-5/6">
        <h3 className="pt-20 font-semibold text-3xl mx-auto">Бидний тухай</h3>
        <h4 className="text-2xl">Бидний түүх</h4>
        <hr className="w-1/4" />
        <p className="text-xl">
          Artifex гэж юу вэ?
          <br />
          Artifex бол хэрэглэгч, үйлдвэрлэгч хоёрыг холбож, гараар урласан
          “онцгой” бүтээгдэхүүнийг зарах, худалдан авах, захиалах боломжийг
          олгох онлайн худалдааны вебсайт юм.
        </p>
        <h4 className="text-2xl">Зорилго</h4>
        <hr className="w-1/4" />
        <p className="text-xl">
          Монголд гараар бүтээгдэхүүн үйлдвэрлэдэг хувь хүмүүс цөөнгүй бий.
          Тэдний хувьд бизнесээ өргөжүүлэх, хэрэглэгч олох тал дээр дутмаг
          байдаг. Бид тэдний бараа бүтээгдэхүүнийг хэрэглэгчидэд илүү хялбар
          хүргэх, сурталчилах, борлуулалтын хүрээг тэлэх зорилготой. 
        </p>
      </div>
    </div>
  );
}

function Artist({ artist, title }) {
  return (
    <div className="flex flex-row gap-4 items-center">
      <img src={artist} alt="artist" />
      <p>{title}</p>
    </div>
  );
}

function Menu({ img, title, link }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/${link}`);
      }}
      style={{ height: "406px", width: "282px" }}
      className="flex flex-col items-center rounded-3xl drop-shadow-xl bg-white transition-all duration-300 transform hover:scale-105"
    >
      <img
        style={{ height: "342px" }}
        className="w-full rounded-t-3xl"
        src={img}
        alt={title}
      />
      <p className="flex flex-col justify-center h-full text-xl font-bold">
        {title}
      </p>
    </div>
  );
}

const ProductList = ({ cart, setCart, setTotalQuantity }) => {
  const [showLastThree, setShowLastThree] = useState(false);

  const products = [
    {
      type: "Үнэт эдлэл",
      id: 1,
      title: "ХӨВДӨГ ХӨӨРӨГ",
      img: image1,
      price: 3000000,
      artist: "Дархан Дорж",
      itemQuantity: 2,
    },
    {
      type: "Уран зураг",
      id: 8,
      title: "НААДАМ",
      img: uranzurag2,
      price: 2100000,
      artist: "Сэргэлэн",
      itemQuantity: 1,
    },
    {
      type: "Хувцас",
      id: 23,
      title: "ХОС ДЭЭЛ",
      img: Huvtsas5,
      price: 1600000,
      artist: "Дархан Дорж",
      itemQuantity: 2,
    },
    {
      type: "Хувцас",
      id: 24,
      title: "ХҮҮХДИЙН ЦАМЦ",
      img: Huvtsas6,
      price: 65000,
      artist: "Дархан Дорж",
      itemQuantity: 2,
    },
    {
      type: "Уран зураг",
      id: 12,
      title: "ТЭМЭЭН НҮҮДЭЛ",
      img: uranzurag6,
      price: 1600000,
      artist: "Дархан Дорж",
      itemQuantity: 2,
    },
    {
      type: "Үнэт эдлэл",
      id: 4,
      title: "ДАРЬГАНГА ЭМЭЭЛ",
      img: image4,
      price: 3200000,
      artist: "Ганаа",
      itemQuantity: 5,
    },
  ];

  const handleToggle = () => {
    setShowLastThree(!showLastThree);
  };

  const filteredProducts = showLastThree
    ? products.slice(3)
    : products.slice(0, 3);

  return (
    <div className="flex flex-col items-center">
      <h3 className="font-semibold text-3xl my-20 mx-auto">
        Онцлох бүтээгдэхүүн
      </h3>
      <div className="grid grid-cols-3 gap-20">
        {filteredProducts.map((product) => (
          <MakeProduct
            itemQuantity={product.itemQuantity}
            artist={product.artist}
            cart={cart}
            setCart={setCart}
            setTotalQuantity={setTotalQuantity}
            title={product.title}
            img={product.img}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
      <div className="mt-4">
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="toggle"
              checked={showLastThree}
              onChange={handleToggle}
              className="sr-only"
            />
            <div className="w-10 h-6 bg-gray-300 rounded-full shadow-inner"></div>
            <div
              className={`${
                showLastThree ? "bg-green-500" : "bg-gray-200"
              } absolute left-0 top-0 w-6 h-6 rounded-full shadow transform transition-transform`}
            ></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default HomePage;
