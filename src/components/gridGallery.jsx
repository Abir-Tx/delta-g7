import React from "react";
import Masonry from "react-responsive-masonry";

const images = [
  "https://i.postimg.cc/2jL5pQyL/310546989-452392656731339-7728599566196858820-n.jpg",
  //...
  "https://i.postimg.cc/wBP7J03H/310059671-662967542061776-3880630518763336330-n.jpg",
];

export default function GridGallery() {
  return (
    <div>
      <Masonry columnsCount={3} gutter="10px">
        {images.map((image, i) => (
          <img
            key={i}
            alt="none"
            src={image}
            style={{ width: "100%", display: "block" }}
          />
        ))}
      </Masonry>
    </div>
  );
}
