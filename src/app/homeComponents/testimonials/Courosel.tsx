"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useEffect, useRef, useState } from "react";
import "./courosel.style.css";

interface ITestimonialsData {
  img: string;
  name: string;
  function: string;
}

export default function Courosel() {
  const [testimonials, setTestimonials] = useState<ITestimonialsData[]>([
    {
      img: "whindersson-nunes-3.png",
      name: "Whindersson Nunes",
      function: "Comediante e Ator",
    },
    {
      img: "jhon-vlogs.png",
      name: "Jon Vlogs",
      function: "Youtuber e Empresário",
    },
    {
      img: "rapi.webp",
      name: "Rapi",
      function: "Empresa",
    },
    {
      img: "neox.png",
      name: "Gabriel Neox",
      function: "Youtuber e Empresário",
    },
    {
      img: "AliExpress.webp",
      name: "AliExpress",
      function: "Empresa",
    },
    {
      img: "daniel-dourado.webp",
      name: "Daniel Dourado",
      function: "Real State e Empresário",
    },
    {
      img: "Balian.webp",
      name: "Balian",
      function: "Youtuber e Empresario",
    },
    {
      img: "MikeShake.webp",
      name: "Mike Shake",
      function: "Youtuber e Empresario",
    },
    {
      img: "DanielPenin.webp",
      name: "Daniel Penin",
      function: "Empresario e Apresentador",
    },
    {
      img: "Bocade09.webp",
      name: "Boca de 09",
      function: "Influencer",
    },
    {
      img: "GKAY.webp",
      name: "GKAY",
      function: "Atriz e Comediante",
    },
    {
      img: "NGCASH.webp",
      name: "NG.CASH",
      function: "Empresa",
    },
  ]);

  return (
    <div className="courosel" id="courosel">
      {testimonials.map((item) => (
        <div className="courosel-card" key={item.img}>
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
  );
}
