import ToyCom from "../components/toyCom";
import "../css/pageStyle.css";
import { Todo, Weather } from "../assets/img/images";

export default function Toy() {
  const toys = [
    {
      title: "오늘의 날씨",
      skill: ["#React", "#TS", "#SCSS", "#API"],
      date: "2024.08.26 - 09.02",
      img: Weather,
      txt: "오늘의 서울 날씨를 확인할 수 있는 페이지 입니다.\nOpenWeatherMap API을 사용하였습니다.",
      id: 0,
      git: "https://github.com/JURAMII/weather",
      site: "https://juramii.github.io/weather/",
      Cclass: "toyBtn",
      Sclass: "TSkill",
    },

    {
      title: "TODO LIST",
      skill: ["#React"],
      date: "2024.04.26",
      img: Todo,
      txt: "리액트로 만든 todo list입니다.\nCRUD 기능을 구현하였습니다.",
      id: 1,
      git: "https://github.com/JURAMII/todo_list",
      site: "https://juramii.github.io/todo_list/",
      Cclass: "toyBtn",
      Sclass: "TSkill",
    },
  ];

  return (
    <section
      className="toy_wrap basic_section"
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      id="toy"
    >
      <div className="toy_tit">
        <h2>Toy Project</h2>
      </div>
      <div className="toy flex">
        {toys.map((toy, index) => (
          <ToyCom key={index} {...toy} />
        ))}
      </div>
    </section>
  );
}
