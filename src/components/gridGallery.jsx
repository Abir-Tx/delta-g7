import React from "react";
import Masonry from "react-responsive-masonry";

export default function GridGallery(props) {
  return (
    <div>
      <Masonry columnsCount={3} gutter="20px">
        {props.images.map((image, i) => (
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
