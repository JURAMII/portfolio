import '../css/compoStyle.css';

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


const Ham = ({ color, setScroll }) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
        setScroll(false);
        scrollTo({top:0,})
    };


    return (
        <>
            <div className={`ham ${menuOpen ? 'set' : ''}`} onClick={()=>{handleMenuToggle();}}>
                <span style={{ backgroundColor: color }}></span>
                <span style={{ backgroundColor: color }}></span>
            </div>
            {menuOpen && (
                <div className='ham_menu' onClick={handleMenuToggle}>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#project">Project</a></li>
                        <li><a href="#toy">Toy Project</a></li>
                        <li><a href="#clone">Web-clone</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>)}
        </>
    )
}

const Header = () => {

    let headerRef = useRef();

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
    const color = '#fff';
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
        } else if (window.innerWidth <= 768 && window.scrollY >= 3800) {
            setScroll(true);
        } else {
            setScroll(false);
        }

    };

    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);


    }, []);


    return (
        <header ref={headerRef}>
            <div className='basic_section flex header_wrap'>
                <h1><a href="#" style={scroll ? { color: '#fff' } : {}}>DANBI</a></h1>
                {isMobile ? <Ham color={scroll ? color : undefined} setScroll={setScroll} /> : <Navi navs={navs} color={scroll ? color : undefined} />}
            </div>
        </header>
    )
}

export default Header