import './compoStyle.css';
import AOS from 'aos';
import { useEffect, useState, useRef } from 'react';

const Navi = ({ navs, color }) => {

    return (
        <nav>
            <ul className='flex'>
                {navs.map((nav, index) => <li key={index} ><a href={`#${nav.navId}`} style={{ color: color }}>{nav.navTit}</a></li>)}
            </ul>
        </nav>
    )
}


const Ham = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    };

    return (
        <>
            {menuOpen && (
                <div className='ham_menu'>
                    <ul onClick={handleMenuToggle}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#project">Project</a></li>
                        <li><a href="#toy">Toy Project</a></li>
                        <li><a href="#clone">Web-clone</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>)}
            <div className={`ham ${menuOpen ? 'set' : ''}`} onClick={handleMenuToggle}>
                <span></span>
                <span></span>
            </div>
        </>
    )
}

const Header = () => {

    let navs = [
        {
            navTit: 'About',
            navId: 'about'
        },
        {
            navTit: 'Project',
            navId: 'project'
        }, {
            navTit: 'Toy-Project',
            navId: 'toy'
        }, {
            navTit: 'Web-clone',
            navId: 'clone'
        }, {
            navTit: 'Contact',
            navId: 'contact'
        },
    ];

    const [scroll, setScroll] = useState(false);
    const [Hscroll, setHScroll] = useState(false);
    const color = '#fff';

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    const handleScroll = () => {
        // 스크롤이 Top에서 4100px 이상 내려오면 true값을 useState에 넣어줌
        if (window.scrollY >= 4100) {
            setScroll(true);
        } else {
            // 스크롤이 4100px 미만일경우 false를 넣어줌
            setScroll(false);
        }

    };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <header>
            <div className='basic_section flex header_wrap'>
                <h1><a href="#" style={scroll ? { color: '#fff' } : {}}>DANBI</a></h1>
                {isMobile ? <Ham color={Hscroll?color:undefined}/> : <Navi navs={navs} color={scroll ? color : undefined} />}
            </div>
        </header>
    )
}
//ham 409가 끝

export default Header