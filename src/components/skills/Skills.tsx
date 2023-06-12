type propT = {
  skills: string[];
};
const Skills = ({ skills }: propT) => {
  return (
    <>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
};

export default Skills;
