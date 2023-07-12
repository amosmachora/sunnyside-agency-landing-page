import "./App.css";
import { useState } from "react";
import HamburgerMenu from "./images/icon-hamburger.svg";
import Orange from "./images/desktop/image-header.jpg";
import Plums from "./images/desktop/image-graphic-design.jpg";
import FullOrange from "./images/desktop/image-photography.jpg";
import ArrowDown from "./images/icon-arrow-down.svg";
import Egg from "./images/desktop/image-transform.jpg";
import Glass from "./images/desktop/image-stand-out.jpg";
import Emily from "./images/image-emily.jpg";
import Jennie from "./images/image-jennie.jpg";
import Thomas from "./images/image-thomas.jpg";
import Cone from "./images/desktop/image-gallery-cone.jpg";
import MilkBottles from "./images/desktop/image-gallery-milkbottles.jpg";
import OrangeGallery from "./images/desktop/image-gallery-orange.jpg";
import SugarCube from "./images/desktop/image-gallery-sugarcubes.jpg";
import Facebook from "./images/icon-facebook.svg";
import Pinterest from "./images/icon-pinterest.svg";
import Instagram from "./images/icon-instagram.svg";
import Twitter from "./images/icon-twitter.svg";

function App() {
  const [smallScreen, setSmallScreen] = useState(false);
  return (
    <div className="App">
      <nav className="navbar flex">
        <p className="logo">sunnyside</p>
        <ul className="nav__links flex">
          <li className="nav__link">About</li>
          <li className="nav__link">Services</li>
          <li className="nav__link">Projects</li>
          <li className="nav__link">Contact</li>
        </ul>
        <img
          src={HamburgerMenu}
          alt="Menu"
          className="hamburger-icon"
          onClick={() => {
            setSmallScreen((prev) => !prev);
          }}
        />
      </nav>
      {smallScreen && (
        <div className="small-screen-nav">
          {/* <div className="shape" /> */}
          <li className="nav__link">About</li>
          <li className="nav__link">Services</li>
          <li className="nav__link">Projects</li>
          <li className="nav__link">Contact</li>
        </div>
      )}
      <header className="topBar flex">
        <div className="flex center-image">
          <h1>WE ARE CREATIVES</h1>
          <img src={ArrowDown} alt="Arrow Down" />
        </div>
        <img src={Orange} alt="Orange" className="orange" />
      </header>
      <section className="flex across">
        <div className="transform-your-brand box">
          <p className="box-title">Transform your brand</p>
          <p className="box-text">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="#" className="yellow-link link">
            LEARN MORE
          </a>
        </div>
        <div className="box-image box">
          <img src={Egg} alt="Egg" />
        </div>
      </section>
      <section className="flex across-two">
        <div className="box-image box">
          <img src={Glass} alt="Egg" />
        </div>
        <div className="stand-out box">
          <p className="box-title">Stand out to the right audience</p>
          <p className="box-text">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a href="#" className="red-link link">
            LEARN MORE
          </a>
        </div>
      </section>
      <section className="flex across-three">
        <div className="box">
          <img src={Plums} alt="Plum" />
          <div className="text">
            <p>Graphic Design</p>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className="box">
          <img src={FullOrange} alt="Orange" />
          <div className="text">
            <p>Photography</p>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </section>
      <section className="across-four ">
        <h4 className="testimonial-header">CLIENT TESTIMONIALS</h4>
        <div className="flex">
          <div>
            <img src={Emily} alt="" className="testimonial-image" />
            <p className="testimonial-text">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <p className="testimonial-name">Emily R.</p>
            <p className="testimonial-position">Marketing Directors</p>
          </div>
          <div>
            <img src={Thomas} alt="" className="testimonial-image" />
            <p className="testimonial-text">
              {" "}
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <p className="testimonial-name">Thomas S.</p>
            <p className="testimonial-position">Chief Operating Officer</p>
          </div>
          <div>
            <img src={Jennie} alt="" className="testimonial-image" />
            <p className="testimonial-text">
              {" "}
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <p className="testimonial-name">Jennie F.</p>
            <p className="testimonial-position">Business Owner</p>
          </div>
        </div>
      </section>
      <section className="across-five flex">
        <img src={MilkBottles} alt="Milk Bottles" />
        <img src={OrangeGallery} alt="Orange" />
        <img src={Cone} alt="Cone" />
        <img src={SugarCube} alt="Sugar Cubes" />
      </section>
      <footer className="across-six flex">
        <h4>sunnyside</h4>
        <div className="flex">
          <p>About</p>
          <p>Services</p>
          <p>Projects</p>
        </div>
        <div className="flex">
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={Twitter} alt="Twitter" />
          <img src={Pinterest} alt="Pinterest" />
        </div>
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/AmohPrince">
            Amoh Prince
          </a>{" "}
          .
        </div>
      </footer>
    </div>
  );
}

export default App;
