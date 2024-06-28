import './compoStyle.css'


const Btn = ({git, site,color, Cclass}) => {

    return(
        <div className={`btn_wrap flex ${Cclass}`}>
        <div style={{border:`2px solid ${color}`}}><a href={git} target='_blank' style={{color:color}}>Github</a></div>
        <div style={{border:`2px solid ${color}`}}><a href={site} target='_blank' style={{color:color}}>Site</a></div>
        </div>
    )
}

export default Btn