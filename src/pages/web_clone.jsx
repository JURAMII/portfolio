import './pageStyle.css'
import CloneCom from '../components/cloneCom';
import {Domino, Bizcar, Gongju, Kt, Socar} from '../assets/img/images'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function WebClone() {

    const clones = [
        {
            title: '도미노',
            skill: 'HTML·CSS·JS',
            date: '2024.02.06',
            backimg: Domino,
            id: 1,
        },
        {
            title: '쏘카',
            skill: 'React',
            date: '2024.04.27',
            backimg: Socar,
            id: 2,
        },
        {
            title: 'KT&G 장학재단',
            skill: 'HTML·CSS·JS',
            date: '2024.02.15 - 02.16',
            backimg: Kt,
            id: 3,
        },
        {
            title: '비즈카',
            skill: 'HTML·CSS·JS',
            date: '2024.02.07 - 02.08',
            backimg: Bizcar,
            id: 4,
        },
        {
            title: '국립공주박물관',
            skill: 'HTML·CSS·JS',
            date: '2024.02.19 - 02.20',
            backimg: Gongju,
            id: 5,
        },
       ]

    return (
        <section className='clone_wrap'>
            <div className='basic_section'>
                <h2 className='tit_font'>Web-clone</h2>
                <Swiper watchSlidesProgress={true} slidesPerView={3} loop={true} className="mySwiper">
                    {clones.map((clone, index) => { <SwiperSlide key={index} {...clone}><CloneCom {...clone}/></SwiperSlide> })}
                </Swiper>
            </div>
        </section>
    );
}
