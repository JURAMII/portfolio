import './pageStyle.css'
import { GithubW } from "../assets/img/images"
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";


export default function Contact () {
    
    useEffect(() => {
        AOS.init({once: false,});
      },[])

    return(
        <section className="sec10" id='contact'>
            <div className="contact_wrap basic_section">
                <div className='lets'>
                <h3 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="200">LET'S WORK</h3>
                <h3 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="400">TOGETHER</h3>
                </div>
                <div className='cantact'>
                    <p>CONTACT ME!</p>
                    <ul>
                        <li>정단비</li>
                        <li>010-8533-1068</li>
                        <li>4679jeong@naver.com</li>
                        <li><a href="https://github.com/JURAMII" target="_blank"><img src={GithubW} alt="github" /></a></li>
                    </ul>
                </div>
                <h6>Copyright 2024. DANBI. all right reserved</h6>
            </div>
        </section>
    )
}