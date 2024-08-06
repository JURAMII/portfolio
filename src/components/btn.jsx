import '../css/compoStyle.css';


const Btn = ({git, site, Cclass}) => {

    return(
        <div className={`btn_wrap flex ${Cclass}`}>
        <div><a href={site} target='_blank'>Site</a></div>
        <div><a href={git} target='_blank'>Github</a></div>
        </div>
    )
}

export default Btn