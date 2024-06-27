import './pageStyle.css'
import { GithubW } from "../assets/img/images"
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";


const Contact = () => {
    
    useEffect(() => {
        AOS.init({once: false});
        AOS.refresh();
      },[])

    return(
        <section className="sec10">
            <div className="basic_section contact_wrap">
                <div className='lets'>
                <h3 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="200">LET'S WORK</h3>
                <h3 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="400">TOGETHER</h3>
                </div>
                <div className='cantact flex'>
                    <div>
                    <p>CONTACT ME!</p>
                    <ul>
                        <li>정단비</li>
                        <li>010-8533-1068</li>
                        <li>4679jeong@naver.com</li>
                        <li><a href="https://github.com/JURAMII" target="_blank"><img src={GithubW} alt="github" /></a></li>
                    </ul>
                    </div>
                </div>
                <h6>Copyright 2024. DANBI. all right reserved</h6>
            </div>
        </section>
    )
}

export default Contact