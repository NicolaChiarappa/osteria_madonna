const Heading = ({ as = "h1", size = "", children }) => {
  switch (as) {
    case "h1":
      return (
        <h1 className={"font-semibold font-miofont text-primary  text-" + size}>
          {children}
        </h1>
      );
    case "h2":
      return <h2></h2>;
    case "h3":
      return <h3></h3>;
    case "h4":
      return <h4></h4>;
  }
};

export default Heading;
