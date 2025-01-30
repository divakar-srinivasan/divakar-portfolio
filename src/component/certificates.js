import "../CssComponent/certificates.css";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "aos/dist/aos.css";

// Import all images
import i1 from "../Images/certificates/i1.png";
import i2 from "../Images/certificates/i2.png";
import i3 from "../Images/certificates/i3.png";
import i4 from "../Images/certificates/i4.png";
import i5 from "../Images/certificates/i5.png";
import i6 from "../Images/certificates/i6.jpg";
import i7 from "../Images/certificates/i7.jpg";
import i8 from "../Images/certificates/i8.png";
import i9 from "../Images/certificates/i9.png";
import i10 from "../Images/certificates/i10.png";
import i11 from "../Images/certificates/i11.png";
import i12 from "../Images/certificates/i12.png";
import i13 from "../Images/certificates/i13.png";
import i14 from "../Images/certificates/i14.png";
import i15 from "../Images/certificates/i15.png";
import i16 from "../Images/certificates/i16.png";
import i17 from "../Images/certificates/i17.png";
import i18 from "../Images/certificates/i18.png";

const certificates = [
  { imgUrl: i1 },
  { imgUrl: i2 },
  { imgUrl: i3 },
  { imgUrl: i4 },
  { imgUrl: i5 },
  { imgUrl: i6 },
  { imgUrl: i7 },
  { imgUrl: i8 },
  { imgUrl: i9 },
  { imgUrl: i10 },
  { imgUrl: i11 },
  { imgUrl: i12 },
  { imgUrl: i13 },
  { imgUrl: i14 },
  { imgUrl: i15 },
  { imgUrl: i16 },
  { imgUrl: i17 },
  { imgUrl: i18 },
];

const Certificates = React.forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slidesToShow = 3; // Number of slides to show at a time
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - slidesToShow : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="project-container" ref={ref}>
      <h1>Certificates</h1>
      <div className="carousel-container" data-aos="zoom-in">
        <button className="arrow left-arrow" onClick={prevSlide}>
          <FaArrowLeft />
        </button>
        <div className="carousel">
          {certificates
            .slice(currentIndex, currentIndex + slidesToShow)
            .map((certificate, index) => (
              <div key={index} className="certify-card">
                <div
                  className="certify-card-image"
                  style={{ backgroundImage: `url(${certificate.imgUrl})` }}
                ></div>
              </div>
            ))}
        </div>
        <button className="arrow right-arrow" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
});

export default Certificates;
