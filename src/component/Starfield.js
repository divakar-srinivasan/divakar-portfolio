import React, { useEffect, useRef } from "react";

const Starfield = ({ stars = 300, vel = 1, radius = 1 }) => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animationFrameIdRef = useRef(null);
  const center = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const Star = function () {
    this.x = center.current.x;
    this.y = center.current.y;
    this.init = function () {
      this.radius = Math.random() * radius;
      this.x = center.current.x;
      this.y = center.current.y;
      this.lineWidth = 0;
      this.vel = {
        x: Math.random() * 10 - 5,
        y: Math.random() * 10 - 5,
      };
    };
    this.update = function () {
      this.vel.x *= 1.05;
      this.vel.y *= 1.05;
      this.lineWidth += 0.035;
      this.x0 = this.x;
      this.y0 = this.y;
      this.x += this.vel.x;
      this.y += this.vel.y;
      this.draw();
      if (this.isDead()) this.init();
    };
    this.draw = function () {
      const context = canvasRef.current.getContext("2d");
      context.beginPath();
      context.moveTo(this.x0, this.y0);
      context.lineTo(this.x, this.y);
      context.lineWidth = this.lineWidth;
      context.strokeStyle = "white";
      context.stroke();
    };
    this.isDead = function () {
      return (
        this.x < 0 ||
        this.x > canvasRef.current.width ||
        this.y < 0 ||
        this.y > canvasRef.current.height
      );
    };
    this.init();
    return this;
  };

  const resize = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    center.current.x = canvas.width / 2;
    center.current.y = canvas.height / 2;
  };

  const render = () => {
    const context = canvasRef.current.getContext("2d");
    context.fillStyle = "rgba(1, 4, 35, 0.8)";
    context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    context.strokeStyle = "white";
    for (let i = 0; i < starsRef.current.length; i++) {
      starsRef.current[i].update();
    }
  };

  const animate = () => {
    render();
    animationFrameIdRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    resize();
    window.addEventListener("resize", resize);

    starsRef.current = [];
    for (let i = 0; i < stars; i++) {
      setTimeout(() => {
        starsRef.current.push(new Star());
      }, i * 30);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [stars, vel, radius]);

  return <canvas ref={canvasRef} />;
};

export default Starfield;
