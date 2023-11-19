"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import "./courosel.style.css";

interface ITestimonialsData {
  index: number;
  img: string;
  name: string;
  function: string;
}

export default function Courosel() {
  const [active, setActive] = useState<ITestimonialsData>();

  const [testimonials, setTestimonials] = useState<ITestimonialsData[]>([
    {
      index: 1,
      img: "nada",
      name: "Whindersson Nunes",
      function: "Comediante e Ator",
    },
    {
      index: 2,
      img: "nada",
      name: "Whindersson Nunes",
      function: "Comediante e Ator",
    },
    {
      index: 3,
      img: "nada",
      name: "Whindersson Nunes",
      function: "Comediante e Ator",
    },
    {
      index: 4,
      img: "nada",
      name: "Whindersson Nunes",
      function: "Comediante e Ator",
    },
  ]);

  const [move, setMove] = useState(45);

  function getIndex(testimonial: ITestimonialsData) {
    setActive(testimonial);
    const currentIndex = testimonial.index;

    const activeTestimonial: any = {
      1: 45,
      2: 20,
      3: -0o5,
      4: -30,
      5: -55,
      6: -80,
    };

    setMove(activeTestimonial[currentIndex]);
  }

  return (
    <div>
      <div className="courosel" style={{ left: `${move}%` }}>
        {testimonials.map((item) => (
          <div
            className={`card ${active?.index === item.index ? "active" : ""}`}
            key={item.img}
          >
            <div>{item.img}</div>

            <div>
              <h6> {item.name} </h6>
              <p> {item.function} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="button-nav-container">
        {testimonials.map((item) => (
          <div key={item.index}>
            <input
              type="radio"
              id={String(item.index)}
              name="buttons"
              value={item.index}
            />
            <label
              htmlFor={String(item.index)}
              className="button-nav"
              onClick={() => getIndex(item)}
            ></label>
          </div>
        ))}
      </div>
    </div>
  );
}
