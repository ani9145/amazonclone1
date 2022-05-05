import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://m.media-amazon.com/images/I/61YuJJ7PMwL._SX3000_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61yxVt8LPRL._SX3000_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61EgJvtUT7L._SX3000_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61JVg7F8jjL._SX3000_.jpg" },
  { url: "https://m.media-amazon.com/images/I/610Tq8M7P+L._SX3000_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61tr3JIiUWL._SX3000_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61jthhQjiZL._SX3000_.jpg" },
];

const Banner = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1520}
        height={254}
        images={images}
        showNavs={true}
      />
    </div>
  );
}

export default Banner;
