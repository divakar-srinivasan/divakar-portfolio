import "../CssComponent/certificates.css";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
import i19 from "../Images/certificates/i19.jpg";
import i20 from "../Images/certificates/i20.jpg";
import i21 from "../Images/certificates/i21.jpg";
import i22 from "../Images/certificates/i22.jpg";
import i23 from "../Images/certificates/i23.jpg";

const certificates = [
  i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19, i20, i21, i22, i23,
];

const Certificates = React.forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3;

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleCertificates = () => {
    const visibleCertificates = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % certificates.length;
      visibleCertificates.push(certificates[index]);
    }
    return visibleCertificates;
  };

  return (
    <div className="project-container" ref={ref}>
      <h1 className="neon">Certificates</h1>
      <div className="carousel-container" data-aos="zoom-in">
        <button className="arrow left-arrow" onClick={prevSlide}>
          <FaArrowLeft />
        </button>
        <div className="carousel">
          {getVisibleCertificates().map((imgUrl, index) => (
            <div key={index} className="certify-card">
              <div
                className="certify-card-image"
                style={{ backgroundImage: `url(${imgUrl})` }}
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
