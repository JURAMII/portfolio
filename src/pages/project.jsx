import "./pageStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";

export default function Project() {
    const projects = [
        {
            title: "준비중",
            skill:["#React", "#vite","#Three.js","#node.js"],
            date: "2024.07.08 - 08.09",
            img: ,
            id: 1,
            people:"팀프로젝트",
            txt: "준비중 입니다.",
            git: "https://github.com/JURAMII/",
            site: "https://juramii.github.io/",
            color: "#1a1a1a",
          },
          {
            title: "고궁의 밤",
            skill:["#React", "#vite","#Three.js","#node.js"],
            date: "2024.05.17 - 06.18",
            img: ,
            people:"팀프로젝트",
            txt: "서울의 고궁 야간개장 축제인 ‘경복궁 별빛야행’과 ‘창덕궁 달빛기행’을 소개하는 사이트입니다. 리액트 기반으로 만들었으며, Three.js를 사용하여 3D를 렌더링하였습니다. 저는 축제소개와 고객지원의 자주하는 질문 페이지를 담당하였습니다.",
            id: 2,
            git: "https://github.com/JURAMII/Team_Period",
            site: "https://juramii.github.io/Team_Period/",
            color: "#1a1a1a",
          },
        {
            title: "포트폴리오",
            skill:["#React", "#vite"],
            date: "2024.06.19 - 07.05",
            img: ,
            people:"개인프로젝트",
            txt: "현재 보고 계시는 사이트로 리액트를 사용하여 만들었습니다.",
            id: 3,
            git: "https://github.com/JURAMII/portfolio",
            site: "https://juramii.github.io/portfolio/",
            color: "#1a1a1a",
          },
          {
            title: "프론트엔드 사전",
            skill:["#React", "#vite", "#Node.js"],
            date: "2024.05.07 - 05.09",
            img: ,
            people:"개인프로젝트",
            txt: "리액트를 기반으로 CRUD와 sorting 및 검색 기능을 구현하였습니다.",
            id: 4,
            git: "https://github.com/JURAMII/dictionary",
            site: "https://juramii.github.io/dictionary/",
            color: "#1a1a1a",
          },
          {
            title: "지코바치킨 리뉴얼",
            skill:["#Node.js", "#MYSQL"],
            date: "2024.03.26 - 04.18",
            img: ,
            id: 5,
            people:"개인프로젝트",
            txt: "새로운 지코바 치킨의 웹사이트를 직접 기획하여 구현하였습니다. express로 메인페이지와 서브페이지를 연결하고 mysql, multer를 사용하여 게시판을 만들었습니다.",
            git: "https://github.com/JURAMII/GCOVA",
            site: "https://juramii.github.io/GCOVA/",
            color: "#1a1a1a",
          },
      ];

  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
