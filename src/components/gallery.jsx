import React from "react";
import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://i.postimg.cc/nhmQVKMW/lab2-1.jpg",
    thumbnail: "https://i.postimg.cc/nhmQVKMW/lab2-1.jpg",
    description: "Lab 2",
  },
  {
    original: "https://i.postimg.cc/pXFdKWxh/lab3-1.jpg",
    thumbnail: "https://i.postimg.cc/pXFdKWxh/lab3-1.jpg",
  },
  {
    original:
      "https://i.postimg.cc/2jL5pQyL/310546989-452392656731339-7728599566196858820-n.jpg",
    thumbnail:
      "https://i.postimg.cc/2jL5pQyL/310546989-452392656731339-7728599566196858820-n.jpg",
  },
  {
    original:
      "https://i.postimg.cc/wBP7J03H/310059671-662967542061776-3880630518763336330-n.jpg",
    thumbnail:
      "https://i.postimg.cc/wBP7J03H/310059671-662967542061776-3880630518763336330-n.jpg",
  },
  {
    original:
      "https://i.postimg.cc/1XbHjpWZ/310422029-1331104191005824-7984201698803940687-n.jpg",
    thumbnail:
      "https://i.postimg.cc/1XbHjpWZ/310422029-1331104191005824-7984201698803940687-n.jpg",
  },
];

export default function Gallery() {
  return <ImageGallery items={images} />;
}
