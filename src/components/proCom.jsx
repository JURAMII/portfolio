import './compoStyle.css'
import Skills from "./skills"
import Btn from './btn'

const ProCom = ({title, skill, date, img, people, git, site, color, txt, Cclass}) =>{

    return(
        <div className="proCom_wrap">
        <h2 className="tit_font">Project</h2>
        <div className="proCom flex">
            <div className='proImg'><img src={img} alt="project" /></div>
            <div className="cont_wrap">
                <h3 className="sub_font">{title}</h3>
                <p className="cont_font">{people}</p>
                <p className="cont_font">{date}</p>
                <Skills skills={skill}/>
                <p>{txt}</p>
                <Btn git={git} site={site} color={color} Cclass={Cclass}/>
            </div>
        </div>
        </div>
    )
}

export default ProCom