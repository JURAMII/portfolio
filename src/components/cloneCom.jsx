import '../css/compoStyle.css';
import Btn from './btn'

const CloneCom = ({title, skill, date, backimg, git, site, color, Cclass}) => {

    return(
        <div className='cloneCom_wrap'>
            <div style={{ backgroundImage: `url(${backimg})`}} className='cloneCom'>
            <div className='clone_font_wrap'>
            <p className='sub_font'>{title}</p>
            <p className='cont_font'>{date}</p>
            <p className='cont_font'>{skill}</p>
            <Btn git={git} site={site} color={color} Cclass={Cclass}/>
            </div>
            </div>
        </div>
    )
}

export default CloneCom