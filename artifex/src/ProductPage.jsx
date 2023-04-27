import image1 from "./Components/itemPicture/image1.png";
import image2 from "./Components/itemPicture/image2.png";
import image3 from "./Components/itemPicture/image3.png";
import image4 from "./Components/itemPicture/image4.png";
import image5 from "./Components/itemPicture/image5.png";
import image6 from "./Components/itemPicture/image6.png";
import React from "react";
import Product from "./Components/Product";

function ProductPage(props) {
  const setSelectedPrice = props.setSelectedPrice;
  const setSelectedTitle = props.setSelectedTitle;
  const setSelectedImage = props.setSelectedImage;
  const data = [
    {
      title: "ХӨВДӨГ ХӨӨРӨГ",
      img: image1,
      price: "3,000,000",
    },
    {
      title: "ХОС МӨНГӨН АЯГА",
      img: image2,
      price: "2,350,000",
    },
    {
      title: "МӨНГӨН ХӨӨРӨГ",
      img: image3,
      price: "2,500,000",
    },
    {
      title: "ДАРЬГАНГА ЭМЭЭЛ",
      img: image4,
      price: "3,200,000",
    },
    {
      title: "ДОМБО",
      img: image5,
      price: "670,000",
    },
    {
      title: "МӨНГӨН ЭЭМЭГ",
      img: image6,
      price: "1,000,000",
    },
  ];

  return (
    <Product
      data={data}
      setSelectedPrice={setSelectedPrice}
      setSelectedTitle={setSelectedTitle}
      setSelectedImage={setSelectedImage}
    />
  );
}

export default ProductPage;
