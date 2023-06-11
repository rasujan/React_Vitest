type propT = {
  name: string;
};

export const Greet = ({ name }: propT) => {
  return <div>hello {name}</div>;
};
