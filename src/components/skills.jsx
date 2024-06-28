const Skills = ({skills}) => {
    
    return(
        <ul className="skillBtn_wrap flex">
        {skills.map((skill, index)=><li key={index}>{skill}</li>)}
        </ul>
    )
}

export default Skills