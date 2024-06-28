import './compoStyle.css';
import AOS from 'aos';
import { useEffect, useRef, useState } from 'react';

const Navi = ({ navs, ref }) => {
    return (
        <nav>
            <ul className='flex' ref={ref}>
                {navs.map((nav, index) => <li key={index}>{nav}</li>)}
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
                    <ul>
                        <li>ABOUT</li>
                        <li>Projects</li>
                        <li>Toy</li>
                        <li>Web-clone</li>
                        <li>Contact</li>
                    </ul>
                </div>)}
            {menuOpen ?
                <div className='ham set' onClick={handleMenuToggle}>
                    <span></span>
                    <span></span>
                </div> :
                <div className='ham' onClick={handleMenuToggle}>
                    <span></span>
                    <span></span>
                </div>}
        </>
    )
}

const Header = () => {

    let navs = ['About', 'Projects', 'Toy', 'Web-clone', 'Contact']

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
                <h1>DANBI</h1>
                {isMobile ? <Ham /> : <Navi navs={navs} />}
            </div>
        </header>
    )
}

export default Header