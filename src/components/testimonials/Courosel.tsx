"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useEffect, useRef, useState } from "react";
import "./courosel.style.css";

interface ITestimonialsData {
  index: number;
  img: string;
  name: string;
  function: string;
}

export default function Courosel() {
  const [testimonials, setTestimonials] = useState<ITestimonialsData[]>([
    {
      index: 1,
      img: "whindersson-nunes-3.png",
      name: "Whindersson Nunes",
      function: "Comediante e Ator",
    },
    {
      index: 2,
      img: "jhon-vlogs.png",
      name: "Jon Vlogs",
      function: "Youtuber e Empresário",
    },
    {
      index: 3,
      img: "joao-caetano.png",
      name: "João Caetano",
      function: "Youtuber e Empresário",
    },
    {
      index: 4,
      img: "neox.png",
      name: "Gabriel Neox",
      function: "Youtuber e Empresário",
    },
    {
      index: 5,
      img: "viros.webp",
      name: "Viros",
      function: "Youtuber e Empresário",
    },
    {
      index: 6,
      img: "daniel-dourado.webp",
      name: "Daniel Dourado",
      function: "Real State e Empresário",
    },
    {
      index: 7,
      img: "gui.webp",
      name: "Gui Oliveira",
      function: "Youtuber e Empresário",
    },
  ]);

  return (
    <div>
      <div className="courosel" id="courosel">
        {testimonials.map((item) => (
          <div className="courosel-card" key={item.index}>
            <div
              className="coursel-image"
              style={{
                backgroundImage: `url("/images/testimonials/${item.img}") `,
              }}
            ></div>

            <div>
              <h6> {item.name} </h6>
              <p> {item.function} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
