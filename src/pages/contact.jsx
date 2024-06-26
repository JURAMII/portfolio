import './pageStyle.css'
import { GithubW } from "../assets/img/images"
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";


const Contact = () => {
    
    useEffect(() => {
        AOS.init();
        // AOS.refresh();
      },[])

    return(
        <section data-aos="fade-down" data-aos-easing="ease-in-out" className="sec10">
            {/* <div className="basic_section contacts">
            <p>CONTACT</p>
            <ul className="flex">
                <li><a href="">정단비</a></li>
                <li><a href="">+82 10 8533 1068</a></li>
                <li><a href="">4679jeong@naver.com</a></li>
                <li><a href="https://github.com/JURAMII" target="_blank"><span><img src={GithubW} alt="github" /></span>https://github.com/JURAMII</a></li>
            </ul>
            <h6 className="flex">Copyright 2024. Danbi. all right reserved</h6>
            </div> */}
            <div className="basic_section contacts">
                <h3>LET'S WORK</h3>
                <h3>TOGETHER</h3>
            </div>
        </section>
    )
}

export default Contact