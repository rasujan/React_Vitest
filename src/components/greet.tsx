type propT = {
  name: string;
};

const Greet = ({ name }: propT) => {
  return <div>hello {name}</div>;
};

export default Greet;
