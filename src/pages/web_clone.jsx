import "./pageStyle.css";
import CloneCom from "../components/cloneCom";
import { Domino, Bizcar, Gongju, Kt, Socar } from "../assets/img/images";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function WebClone() {
  const clones = [
    {
        title: "쏘카",
        skill: "React",
        date: "2024.04.27",
        backimg: Socar,
        id: 1,
        git: "https://github.com/JURAMII/socar",
        site: "https://juramii.github.io/socar/",
        color: "#fff",
      },
      {
        title: "국립공주박물관",
        skill: "HTML·CSS",
        date: "2024.02.19 - 02.20",
        backimg: Gongju,
        id: 2,
        git: "https://github.com/JURAMII/socar",
        site: "https://juramii.github.io/socar/",
        color: "#fff",
      },
      {
        title: "KT&G 장학재단",
        skill: "HTML·CSS",
        date: "2024.02.15 - 02.16",
        backimg: Kt,
        id: 3,
        git: "https://github.com/JURAMII/KT-G",
        site: "https://juramii.github.io/KT-G/",
        color: "#fff",
      },
      {
        title: "비즈카",
        skill: "HTML·CSS·JS",
        date: "2024.02.07 - 02.08",
        backimg: Bizcar,
        id: 4,
        git: "https://github.com/JURAMII/bizcar",
        site: "https://juramii.github.io/bizcar/",
        color: "#fff",
      },
    
    {
      title: "도미노",
      skill: "HTML·CSS·JS",
      date: "2024.02.06",
      backimg: Domino,
      id: 5,
      git: "https://github.com/JURAMII/Dominos",
      site: "https://juramii.github.io/Dominos/",
      color: "#fff",
    },
  ];

  return (
    <section className="clone_wrap">
      <div className="basic_section">
        <h2 className="tit_font">Web-clone</h2>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
             
            768:{
          slidesPerView:3           
          },
          
          }}
          className="mySwiper"
        >
          {clones.map((clone, index) => (
            <SwiperSlide key={index}>
              <CloneCom {...clone} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
