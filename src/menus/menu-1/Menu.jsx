import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { useState } from "react";

const navs = [
  <div>
    <h2>About</h2>
    <nav>
      <a style={{ animationDelay: "0.8s" }}>Profile</a>
      <a style={{ animationDelay: "0.9s" }}>Skills</a>
      <a style={{ animationDelay: "1s" }}>Education</a>
    </nav>
  </div>,
  <div>
    <h2>Portfolio</h2>
    <nav>
      <a style={{ animationDelay: "0.8s" }}>Work</a>
      <a style={{ animationDelay: "0.9s" }}>Projects</a>
      <a style={{ animationDelay: "1s" }}>GitHub</a>
    </nav>
  </div>,
  <div>
    <h2>Contact</h2>
    <nav>
      <a style={{ animationDelay: "0.8s" }}>Email</a>
      <a style={{ animationDelay: "0.9s" }}>Instagram</a>
      <a style={{ animationDelay: "1s" }}>LinkedIn</a>
    </nav>
  </div>,
];

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const openClass = isOpen ? "open" : "";

  return (
    <>
      <div className={`background ${openClass}`}></div>
      <button className={`burger ${openClass}`} onClick={toggleMenu}></button>
      <div className={`menu ${openClass}`}>
        <Swiper speed={750} modules={[Navigation]} navigation>
          {navs.map((nav) => (
            <SwiperSlide>{nav}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
