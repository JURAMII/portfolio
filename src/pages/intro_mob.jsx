import "../css/pageStyle.css";
import { useEffect, useRef } from 'react';

export default function IntroMob() {

    const mobIntroH2 = useRef();

    useEffect(()=>{let mobAni = setTimeout(() => mobIntroH2.current.style.opacity = 1, 3000);
        return()=> clearTimeout(mobAni);
    },[])

    return (
        <section className="intro_wrap basic_section">
            <div className='intro flex'>
            <svg width="1096" height="280" viewBox="0 0 1096 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="DANBI" d="M218 253.2L171.6 280H3.57628e-07V-1.90735e-05H171.6L218 26.8V253.2ZM56 48V232H162V48H56ZM395.538 -1.90735e-05L495.538 280H440.338L419.138 219.6H314.338L293.138 280H237.938L337.938 -1.90735e-05H395.538ZM366.338 70.4L331.138 171.6H401.938L367.138 70.4H366.338ZM571.469 98.8V280H515.469V-1.90735e-05H567.869L688.669 181.2H689.469V-1.90735e-05H745.469V280H693.069L572.269 98.8H571.469ZM991.516 114.8L956.716 134.8V135.6L991.516 155.6V253.2L945.116 280H793.516V-1.90735e-05H945.116L991.516 26.8V114.8ZM849.516 159.2V232H935.516V159.2H849.516ZM849.516 48V111.2H935.516V48H849.516ZM1039.53 280V-1.90735e-05H1095.53V280H1039.53Z" fill="#1A1A1A" />
            </svg>
            </div>
            <h2 ref={mobIntroH2}>Front-end Developer & Web-Publisher Portfolio</h2>
        </section>

    )
}