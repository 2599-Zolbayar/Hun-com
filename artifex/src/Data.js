import image1 from "./Components/itemPicture/image1.png";
import image2 from "./Components/itemPicture/image2.png";
import image3 from "./Components/itemPicture/image3.png";
import image4 from "./Components/itemPicture/image4.png";
import image5 from "./Components/itemPicture/image5.png";
import image6 from "./Components/itemPicture/image6.png";
import uranzurag1 from "./Components/itemPicture/Uranzurag1.png";
import uranzurag2 from "./Components/itemPicture/Uranzurag2.png";
import uranzurag3 from "./Components/itemPicture/Uranzurag3.png";
import uranzurag4 from "./Components/itemPicture/Uranzurag4.png";
import uranzurag5 from "./Components/itemPicture/Uranzurag5.png";
import uranzurag6 from "./Components/itemPicture/Uranzurag6.png";
import Huvtsas1 from "./Components/itemPicture/Huvtsas1.png";
import Huvtsas2 from "./Components/itemPicture/Huvtsas2.png";
import Huvtsas3 from "./Components/itemPicture/Huvtsas3.png";
import Huvtsas4 from "./Components/itemPicture/Huvtsas4.png";
import Huvtsas5 from "./Components/itemPicture/Huvtsas5.png";
import Huvtsas6 from "./Components/itemPicture/Huvtsas6.png";
const data = [
    {
      type: "Үнэт эдлэл",
      id: 1,
      title: "ХӨВДӨГ ХӨӨРӨГ",
      img: image1,
      price: 3000000,
      artist: "Дархан Дорж",
      itemQuantity: 2
    },
    {
      type: "Үнэт эдлэл",
      id: 2,
      title: "ХОС МӨНГӨН АЯГА",
      img: image2,
      price: 2350000,
      artist: "Аяга урлан",
      itemQuantity: 20
    },
    {
      type: "Үнэт эдлэл",
      id: 3,
      title: "МӨНГӨН ХӨӨРӨГ",
      img: image3,
      price: 3000000,
      artist: "Дархан Болд",
      itemQuantity: 1
    },
    {
      type: "Үнэт эдлэл",
      id: 4,
      title: "ДАРЬГАНГА ЭМЭЭЛ",
      img: image4,
      price: 3200000,
      artist: "Ганаа",
      itemQuantity: 5
    },
    {
      type: "Үнэт эдлэл",
      id: 5,
      title: "ДОМБО",
      img: image5,
      price: 670000,
      artist: "Мөнгөн завьяа",
      itemQuantity: 15
    },
    {
      type: "Үнэт эдлэл",
      id: 6,
      title: "МӨНГӨН ЭЭМЭГ",
      img: image6,
      price: 1000000,
      artist: "Ээмэг урлан",
      itemQuantity: 12
    },
    {
      type: "Уран зураг",
      id: 7,
      title: "АДУУЧИН ЗАЛУУ",
      img: uranzurag1,
      price: 2000000,
      artist: "Найдандорж",
      itemQuantity: 1
    },
    {
      type: "Уран зураг",
      id: 8,
      title: "НААДАМ",
      img: uranzurag2,
      price: 2100000,
      artist: "Сэргэлэн",
      itemQuantity: 1
    },
    {
      type: "Уран зураг",
      id: 9,
      title: "ХӨДӨӨНИЙ АЙЛ",
      img: uranzurag3,
      price: 1000000,
      artist: "Заяасайхан",
      itemQuantity: 1,
    },
    {
      type: "Уран зураг",
      id: 10,
      title: "АДУУНУУД",
      img: uranzurag4,
      price: 1800000,
      artist: "Дархан Дорж",
      itemQuantity: 2
    },
    {
      type: "Уран зураг",
      id: 11,
      title: "ДАЙН",
      img: uranzurag5,
      price: 950000,
      artist: "Дархан Дорж",
      itemQuantity: 2
    },
    {
      type: "Уран зураг",
      id: 12,
      title: "ТЭМЭЭН НҮҮДЭЛ",
      img: uranzurag6,
      price: 1600000,
      artist: "Дархан Дорж",
      itemQuantity: 2
    },
    {
      type: "Бэлэг дурсгал",
      id: 13,
      title: "Бэлэг дурсгал1",
      img: "https://picsum.photos/id/19/500/500",
      price: 3000000,
      artist: "Дархан Дорж",
      itemQuantity: 2
    },
    {
      type: "Бэлэг дурсгал",
      id: 14,
      title: "Бэлэг дурсгал2",
      img: "https://picsum.photos/id/20/500/500",
      price: 2350000,
      artist: "Дархан Дорж",
      itemQuantity: 2
    },
    {
      type: "Бэлэг дурсгал",
      id: 15,
      title: "Бэлэг дурсгал3",
      img: "https://picsum.photos/id/100/500/500",
      price: 3000000,
      artist: "Дархан Дорж",
      itemQuantity: 2
    },
    {
      type: "Бэлэг дурсгал",
      id: 16,
      title: "Бэлэг дурсгал4",
      img: "https://picsum.photos/id/102/500/500",
      price: 3200000,
      artist: "Дархан Дорж",
      itemQuantity: 2
    },
    {
      type: "Бэлэг дурсгал",
      id: 17,
      title: "Бэлэг дурсгал5",
      img: "https://picsum.photos/id/23/500/500",
      price: 670000,
      artist: "Дархан Дорж",
      itemQuantity: 2
    },
    {
      type: "Бэлэг дурсгал",
      id: 18,
      title: "Бэлэг дурсгал6",
      img: "https://picsum.photos/id/24/500/500",
      price: 1000000,
      artist: "Дархан Дорж",
      itemQuantity: 2
    },
    {
      type: "Хувцас",
      id: 19,
      title: "НИМГЭН ЦАМЦ",
      img: Huvtsas1,
      price: 75000,
      artist: "Дархан Дорж",
      itemQuantity: 2
    },
    {
      type: "Хувцас",
      id: 20,
      title: "ЭМЭГТЭЙ ЦАМЦ",
      img: Huvtsas2,
      price: 120000,
      artist: "Дархан Дорж",
      itemQuantity: 2
    },
    {
      type: "Хувцас",
      id: 21,
      title: "МАЛГАЙТАЙ ЦАМЦ",
      img: Huvtsas3,
      price: 210000,
      artist: "Дархан Дорж",
      itemQuantity: 2
    },
    {
      type: "Хувцас",
      id: 22,
      title: "ГЭРИЙН ӨМД",
      img: Huvtsas4,
      price: 60000,
      artist: "Дархан Дорж",
      itemQuantity: 2
    },
    {
      type: "Хувцас",
      id: 23,
      title: "ХОС ДЭЭЛ",
      img: Huvtsas5,
      price: 1600000,
      artist: "Дархан Дорж",
      itemQuantity: 2
    },
    {
      type: "Хувцас",
      id: 24,
      title: "ХҮҮХДИЙН ЦАМЦ",
      img: Huvtsas6,
      price: 65000,
      artist: "Дархан Дорж",
      itemQuantity: 2
    },
  ];
export default data;