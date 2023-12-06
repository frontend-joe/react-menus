import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
import "./styles.css";

const About = () => (
  <Page
    title="About"
    content={`Vivamus ullamcorper, nibh ac hendrerit aliquam, tortor mauris tincidunt
nisi, in sagittis tellus elit non nunc. Duis imperdiet porttitor magna,
nec aliquet lectus efficitur nec. Maecenas massa nibh, suscipit nec
pharetra in, feugiat vel est. Nulla quis laoreet justo. Sed at enim quis
augue vehicula efficitur.`}
  />
);
const Portfolio = () => (
  <Page
    title="Portfolio"
    content={`Integer semper ligula sit amet quam porttitor, ac sollicitudin orci efficitur. Vivamus eu scelerisque diam, ac lobortis elit. In placerat risus at odio molestie dictum. Aenean iaculis purus ac mattis semper. Mauris venenatis bibendum mauris nec tincidunt. Nunc at interdum enim, id interdum dolor.`}
  />
);
const Services = () => (
  <Page
    title="Services"
    content={`Cras ultrices pretium ante a pharetra. Pellentesque tempor viverra elit a cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`}
  />
);
const Contact = () => (
  <Page
    title="Contact"
    content={`Nullam feugiat, quam at fermentum tempor, ante lectus vestibulum tellus, facilisis volutpat libero enim eu lorem. Morbi porta vitae lacus sed euismod. Duis maximus dolor elit, vel porta risus condimentum id. In sagittis, ipsum eget euismod porta, risus massa laoreet nibh, ac volutpat magna neque et diam. `}
  />
);

const Page = ({ title, content }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
    </>
  );
};

const links = ["about", "portfolio", "services", "contact"];

const Layout = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isOpen = isMenuOpen ? "open" : "";

  const onClick = (href) => {
    toggleMenu();
    navigate(href);
  };

  return (
    <>
      <button className={`burger ${isOpen}`} onClick={toggleMenu}></button>
      <div className={`background ${isOpen}`}></div>
      <div className={`menu ${isOpen}`}>
        <nav>
          {links.map((link, index) => (
            <a
              key={link}
              className={isMenuOpen ? "appear" : ""}
              style={{ animationDelay: `0.${index + 1}s` }}
              onClick={() => onClick(link)}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
      <main className={`page ${isOpen}`}>
        <Outlet />
      </main>
    </>
  );
};

export const Menu = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
