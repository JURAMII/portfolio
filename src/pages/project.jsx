import "../css/pageStyle.css";
import { Night, Port, Gicova, Dict, Catch } from "../assets/img/images";
import ProCom from "../components/proCom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";

export default function Project() {
  
  const projects = [
    {
      title: "캐치! 수학 몬스터즈",
      skill: ["#React", "#vite", "#Three.js", "#Node.js"],
      date: "2024.07.08 - 08.06",
      img: Catch,
      people: "팀프로젝트",
      txt: "초등 수학 학습 플랫폼 사이트 입니다. 리액트 기반으로 만들었으며, Three.js를 사용하여 3D를 렌더링하였습니다.\n저는 푸터와 학습영상, 질문하기, 힌트보기, 공지사항&이벤트 게시판, 학습현황 페이지를 담당하였습니다.\n반응형 구현까지 완료되었습니다.",
      id: 0,
      git: "https://github.com/JURAMII/TeamMMs",
      site: "https://pichiss.github.io/TeamMMs/",
      Cclass: "ProBtn",
      Sclass: "PSkill",
    },
    {
      title: "고궁의 밤",
      skill: ["#React", "#vite", "#Three.js", "#Node.js"],
      date: "2024.05.17 - 06.18",
      img: Night,
      people: "팀프로젝트",
      txt: "서울의 고궁 야간개장 축제인 ‘경복궁 별빛야행’과 ‘창덕궁 달빛기행’을 소개하는 사이트입니다. 리액트 기반으로 만들었으며, Three.js를 사용하여 3D를 렌더링하였습니다.\n저는 팀장을 맡고 축제소개와 고객지원의 자주하는 질문 페이지를 담당하였습니다.\n반응형 구현까지 완료되었습니다.",
      id: 1,
      git: "https://github.com/JURAMII/Team_Period",
      site: "https://juramii.github.io/Team_Period/",
      Cclass: "ProBtn",
      Sclass: "PSkill",
    },
    {
      title: "포트폴리오",
      skill: ["#React", "#vite"],
      date: "2024.06.19 - 07.05",
      img: Port,
      people: "개인프로젝트",
      txt: "현재 보고 계시는 포트폴리오 사이트입니다.\n리액트를 사용하여 만들었습니다.\n반응형 구현까지 완료되었습니다.",
      id: 2,
      git: "https://github.com/JURAMII/portfolio",
      site: "https://juramii.github.io/portfolio/",
      Cclass: "ProBtn",
      Sclass: "PSkill",
    },
    {
      title: "프론트엔드 사전",
      skill: ["#React", "#vite", "#Node.js"],
      date: "2024.05.07 - 05.09",
      img: Dict,
      people: "개인프로젝트",
      txt: "리액트를 기반으로 만들었으며, CRUD와 sorting 및 검색 기능을 구현하였습니다.",
      id: 3,
      git: "https://github.com/JURAMII/dictionary",
      site: "https://juramii.github.io/dictionary/",
      Cclass: "ProBtn",
      Sclass: "PSkill",
    },
    {
      title: "지코바치킨 리뉴얼",
      skill: ["#Node.js", "#MYSQL", "#CSS", "#JS"],
      date: "2024.03.26 - 04.18",
      img: Gicova,
      id: 4,
      people: "개인프로젝트",
      txt: "새로운 지코바 치킨의 웹사이트를 직접 기획하여 구현하였습니다. express로 메인페이지와 서브페이지를 연결하고 mysql, multer를 사용하여 게시판을 만들었습니다. \n반응형 구현까지 완료되었습니다.\n(현재는 메인페이지만 접속이 가능합니다.)",
      git: "https://github.com/JURAMII/GCOVA",
      site: "https://juramii.github.io/GCOVA/",
      Cclass: "ProBtn",
      Sclass: "PSkill",
    },
  ];

  return (
    <section
      className="basic_section project_wrap"
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      id="project"
    >
      <h2 className="tit_font">Project</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        breakpoints={{
          768: {
            direction: "vertical",
          },
        }}
        modules={[Autoplay, Pagination, Mousewheel]}
        className="mySwiper1"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProCom {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
