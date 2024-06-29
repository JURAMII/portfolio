const Skills = ({skills,Sclass}) => {
    
    return(
        <ul className={`${Sclass} skillBtn_wrap flex`}>
        {skills.map((skill, index)=><li key={index}>{skill}</li>)}
        </ul>
    )
}

export default Skills