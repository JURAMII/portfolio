import ToyCom from '../components/toyCom';
import "../css/pageStyle.css";
import { Todo, MySelf } from '../assets/img/images';
import { useEffect } from "react";

export default function Toy(){

    const toys = [
    
            {
                title: "TODO LIST",
                skill:["#React"],
                date: "2024.04.26",
                img: Todo,
                txt: "리액트로 만든 todo list입니다.\nCRUD 기능을 구현하였습니다.",
                id: 1,
                git: "https://github.com/JURAMII/todo_list",
                site: "https://juramii.github.io/todo_list/",
                color: "#1a1a1a",
                Cclass: "toyBtn",
                Sclass: "TSkill"
              },
              {
                title: "자기소개",
                skill:["#HTML", "#CSS", "#JS"],
                date: "2024.03.08",
                img: MySelf,
                txt: "아코디언 형식으로 간단하게 만든 자기소개 페이지입니다.",
                id: 2,
                git: "https://github.com/JURAMII/my_self",
                site: "https://juramii.github.io/my_self/",
                color: "#1a1a1a",
                Cclass: "toyBtn",
                Sclass: "TSkill"
              },
              
          ]


    return(
        <section className='toy_wrap basic_section' data-aos="fade-down" data-aos-easing="ease-in-out" id='toy'>
            <div className='toy_tit'>
            <h2>Toy</h2>
            <h2>Project</h2>
            </div>
            <div className='toy flex'>
            {toys.map((toy,index)=><ToyCom key={index} {...toy}/>)}
            </div>
        </section>
    )
}