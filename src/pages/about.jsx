import './pageStyle.css';
import { useEffect } from 'react';
import { CSS, GithubB, HTML, Jquery, JS, Mysql, Node, Notion, React, Three, Ps, Ai, Figma } from '../assets/img/images';
import AOS from 'aos';
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      },[])

    return (
        <section className="sec2" data-aos="fade-down" data-aos-easing="ease-in-out">
            <div className="basic_section about">
                <h2>About</h2>
                <div className="about_wrap flex">
                    <div className="me"></div>
                    <div>
                        <ul className="intro">
                            <li><span>Name</span>정단비</li>
                            <li><span>Birth</span>1995 .02 .10</li>
                            <li><span>Tel</span>010-8533-1068</li>
                            <li><span>Email</span>4679jeong@naver.com</li>
                        </ul>
                        <div className='skill_wrap'>
                            <h4 className='ih4'>Skills & Tools</h4>
                            <div className='skill flex'>
                                <div className='fe'>
                                <p className='sp'>FrontEnd</p>
                                <ul className='fe flex'>
                                    <li><img src={HTML} alt="html" title='html5'/></li>
                                    <li><img src={CSS} alt="css" title='css3'/></li>
                                    <li><img src={JS} alt="js" title='java script'/></li>
                                    <li><img src={Jquery} alt="jquery" title='jQuery'/></li>
                                    <li><img src={React} alt="react" title='react'/></li>
                                    <li><img src={Three} alt="three" title='Three.js'/></li>
                                    <li><img src={Node} alt="node" title='node.js'/></li>
                                    <li><img src={Mysql} alt="mysql" title='mysql'/></li>
                                </ul>
                                </div>
                                <div>
                                    <p className='sp'>Design</p>
                                    <ul className='fe flex'>
                                        <li><img src={Ps} alt="ps" title='Photoshop'/></li>
                                        <li><img src={Ai} alt="ai" title='Illustrator'/></li>
                                        <li><img src={Figma} alt="figma" title='figma'/></li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='sp'>Cooperation</p>
                                    <ul className='fe flex'>
                                        <li><img src={GithubB} alt="github" title='github'/></li>
                                        <li><img src={Notion} alt="notion" title='notion'/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='edu_wrap'>
                            <h4 className='ih4'>Education</h4>
                            <div className="flex edu">
                                <ul>
                                    <li>WebGL(3D API)을 활용한 Motion UI 프론트엔드 웹앱개발자 양성과정</li>
                                    <li>2024. 01 ~ 08</li>
                                </ul>
                                <ul>
                                    <li>한림대학교 일본학과</li>
                                    <li>2013. 03 ~ 2018. 02</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About