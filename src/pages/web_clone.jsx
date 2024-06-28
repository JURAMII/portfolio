import "./pageStyle.css";
import CloneCom from "../components/cloneCom";
import { useEffect } from "react";
import { Domino, Bizcar, Gongju, Kt, Socar } from "../assets/img/images";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';

import AOS from 'aos';
import "aos/dist/aos.css";

export default function WebClone() {

  useEffect(() => {
    AOS.init({once: false});
    AOS.refresh();
  },[])

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
        Cclass:"cloneBtn"
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
        Cclass:"cloneBtn"
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
        Cclass:"cloneBtn"
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
        Cclass:"cloneBtn"
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
      Cclass:"cloneBtn"
    },
  ];

  return (
    <section className="clone_wrap" data-aos="fade-down" data-aos-easing="ease-in-out">
      <div>
        <h2 className="tit_font">Web-clone</h2>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            type: 'progressbar',
          }}
          modules={[Autoplay, Pagination]}

          breakpoints={{   
            768:{
          slidesPerView:3,
          autoplay:false,     
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
