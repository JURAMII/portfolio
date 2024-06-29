import Btn from './btn'
import './compoStyle.css'
import Skills from './skills'

const ToyCom = ({title, skill, date, img, txt, git, site, color, Cclass, Sclass}) =>{
    return(
            <figure>
                <img src={img} alt="toy" />
                <div className='ToyCome_cont'>
                <figcaption className='sub_font'>{title}</figcaption>
                <p className='cont_font'>{date}</p>
                <Skills skills={skill} Sclass={Sclass}/>
                <p className='cont_font toy_txt'>{txt}</p>
                <Btn git={git} site={site} color={color} Cclass={Cclass}/>
                </div>
            </figure>
    )
}

export default ToyCom