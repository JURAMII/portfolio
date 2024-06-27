import './compoStyle.css'

const CloneCom = ({title, skill, date, backimg}) => {

    return(
        <div className='cloneCom_wrap'>
            <p>{title}</p>
            <p>{skill}</p>
            <p>{date}</p>
        </div>
    )
}

export default CloneCom