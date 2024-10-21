"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@salt-ds/core";

// Custom arrow components for the carousel
const CustomArrow = ({ direction, onClick, style }) => (
  <Button
    onClick={onClick}
    variant="cta"
    style={{
      ...style,
      cursor: "pointer",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      background: "rgba(0, 0, 0, 0.5)",
      borderRadius: "50%",
      color: "#fff",
      padding: "10px",
      fontSize: "20px",
      [direction === "left" ? "left" : "right"]: "10px",
    }}
  >
    {direction === "left" ? "\u276E" : "\u276F"}
  </Button>
);

const CarouselComponent = ({ slides = [], autoplay = true, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideCount = slides.length;
  const slideRef = useRef(null);

  // Function to move to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Function to handle the next slide
  const nextSlide = () => {
    if (!isTransitioning) {
      setCurrentSlide((prev) => prev + 1);
      setIsTransitioning(true);
    }
  };

  // Function to handle the previous slide
  const prevSlide = () => {
    if (!isTransitioning) {
      setCurrentSlide((prev) => prev - 1);
      setIsTransitioning(true);
    }
  };

  // Handle transition end to reset the current slide when reaching cloned slides
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentSlide === 0) {
      setCurrentSlide(slideCount);
    } else if (currentSlide === slideCount + 1) {
      setCurrentSlide(1);
    }
  };

  useEffect(() => {
    let slideInterval;
    if (autoplay && slideCount > 1) {
      slideInterval = setInterval(() => {
        nextSlide();
      }, interval);
    }
    return () => clearInterval(slideInterval);
  }, [autoplay, interval, slideCount, currentSlide, nextSlide]);

  return (
    <div
      style={{
        position: "relative",
        width: "80%",
        margin: "auto",
        marginTop: "40px",
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
        background: "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0.1))",
      }}
    >
      <div
        ref={slideRef}
        style={{
          display: "flex",
          width: `${(slideCount + 2) * 100}%`,
          height: "500px",
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          transform: `translateX(-${currentSlide * (100 / (slideCount + 2))}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Clone last slide */}
        <div
          style={{
            minWidth: `${100 / (slideCount + 2)}%`,
            height: "100%",
            backgroundImage: `url(${slides[slideCount - 1].background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "16px",
          }}
        >
          <div
            style={{
              background: "rgba(0, 0, 0, 0.6)",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              color: "#fff",
              fontFamily: "Arial, sans-serif",
              marginTop: "300px",
            }}
          >
            <h3>{slides[slideCount - 1].title}</h3>
            <p>{slides[slideCount - 1].content}</p>
          </div>
        </div>
        {/* Original slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              minWidth: `${100 / (slideCount + 2)}%`,
              height: "100%",
              backgroundImage: `url(${slide.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "16px",
            }}
          >
            <div
              style={{
                background: "rgba(0, 0, 0, 0.6)",
                padding: "20px",
                borderRadius: "12px",
                textAlign: "center",
                color: "#fff",
                fontFamily: "Arial, sans-serif",
                marginTop: "300px",
              }}
            >
              <h3>{slide.title}</h3>
              <p>{slide.content}</p>
            </div>
          </div>
        ))}
        {/* Clone first slide */}
        <div
          style={{
            minWidth: `${100 / (slideCount + 2)}%`,
            height: "100%",
            backgroundImage: `url(${slides[0].background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "16px",
          }}
        >
          <div
            style={{
              background: "rgba(0, 0, 0, 0.6)",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              color: "#fff",
              fontFamily: "Arial, sans-serif",
              marginTop: "300px",
            }}
          >
            <h3>{slides[0].title}</h3>
            <p>{slides[0].content}</p>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <CustomArrow direction="left" onClick={prevSlide} />
      <CustomArrow direction="right" onClick={nextSlide} />

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index + 1)}
            style={{
              margin: "0 5px",
              background: currentSlide === index + 1 ? "#fff" : "rgba(255, 255, 255, 0.5)",
              border: "none",
              borderRadius: "50%",
              width: "10px",
              height: "10px",
              padding: "0",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Sample slide data
const slideData = [
  {
    title: "Innovative Designs",
    content: "Experience the future of web design with sleek and modern aesthetics.",
    background: "https://img.freepik.com/free-photo/top-view-decorative-paper-cupboard_23-2148518434.jpg?size=626&ext=jpg",
  },
  {
    title: "Cutting-Edge Technology",
    content: "Stay ahead with the latest advancements in web development.",
    background: "https://img.freepik.com/free-vector/bright-gradient-background-geometric-colorful_361591-4613.jpg?size=626&ext=jpg",
  },
  {
    title: "Seamless User Experience",
    content: "Enjoy smooth interactions and intuitive navigation.",
    background: "https://img.freepik.com/free-photo/top-view-decorative-paper-cupboard_23-2148518434.jpg?size=626&ext=jpg",
  },
  {
    title: "Future-Ready Solutions",
    content: "Prepare for tomorrow with adaptable and scalable designs.",
    background: "https://img.freepik.com/free-vector/bright-gradient-background-geometric-colorful_361591-4613.jpg?size=626&ext=jpg",
  },
  {
    title: "Unmatched Performance",
    content: "Achieve exceptional speed and efficiency in all aspects.",
    background: "https://img.freepik.com/free-photo/top-view-decorative-paper-cupboard_23-2148518434.jpg?size=626&ext=jpg",
  },
];

const Carousel = () => {
  return <CarouselComponent slides={slideData} autoplay interval={3000} />;
};

export default Carousel;
