import './compoStyle.css';
import AOS from 'aos';
import { useEffect, useRef} from 'react';

const Navi = ({navs, ref}) => {
    return(
        <nav>
            <ul className='flex' ref={ref}>
                {navs.map((nav, index)=><li key={index}>{nav}</li>)}
            </ul>
        </nav>
    )
}


const Header = () => {

    let navs = ['About','Projects','Web-clone','Toy','Contact']

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      },[])
    

    return(
        <header>
            <div className='basic_section flex header_wrap'>
            <h1>DANBI</h1>
            <Navi navs={navs}/>
            </div>
        </header>
    )
}

export default Header