import './style.css';
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Test from './test';

const Sec1 = () => {
    
    const nameRef = useRef();
    const danbiRef = useRef();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      },[])

      setTimeout(() => {
        nameRef.current.style.opacity='0';
      }, "2500");

      // setTimeout(() => {
      //   danbiRef.current.style.display='block';
      // }, "2500");


    return(
        <div className="basic_section sec1">
        <div ref={nameRef}>
        <h2 data-aos="fade-up" data-aos-easing="ease-in-out"><span>D</span>elight</h2>
        <h2 data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-in-out"><span>A</span>wesome</h2>
        <h2 data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease-in-out"><span>N</span>avigate</h2>
        <h2 data-aos="fade-up" data-aos-delay="900" data-aos-easing="ease-in-out"><span>B</span>enevolence</h2>
        <h2 data-aos="fade-up" data-aos-delay="1200" data-aos-easing="ease-in-out"><span>I</span>deaful</h2>
        </div>
        <Test/>
        <div className='name_wrap flex'>
        <h3 className='last_name n1' data-aos="zoom-in" data-aos-delay="2500"data-aos-easing="ease-in-out">D</h3>
        <h3 className='last_name n2' data-aos="zoom-in" data-aos-delay="2600"data-aos-easing="ease-in-out">A</h3>
        <h3 className='last_name n3' data-aos="zoom-in" data-aos-delay="2700"data-aos-easing="ease-in-out">N</h3>
        <h3 className='last_name n4' data-aos="zoom-in" data-aos-delay="2800"data-aos-easing="ease-in-out">B</h3>
        <h3 className='last_name n5' data-aos="zoom-in" data-aos-delay="2900"data-aos-easing="ease-in-out">I</h3>
        </div>
        {/* <div className='name_wrap flex' ref={appRef}>
        <h3 className='last_name n1'>D</h3>
        <h3 className='last_name n2'>A</h3>
        <h3 className='last_name n3'>N</h3>
        <h3 className='last_name n4'>B</h3>
        <h3 className='last_name n5'>I</h3>
        </div> */}
        </div>
        
    )
}

export default Sec1