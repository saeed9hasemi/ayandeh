interface IContainer {
  children: React.ReactNode;
}

function Container({ children }: IContainer) {
  return <div className="w-11/12 sm:px-5 mx-auto">{children}</div>;
}

export default Container;
