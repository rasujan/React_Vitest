import React from "react";

type propT = {
  skills: string[];
};
const Skills = ({ skills }: propT) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 500);
  });

  return (
    <>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      {isLoggedIn ? <button>Start learning</button> : <button> Login</button>}
    </>
  );
};

export default Skills;
