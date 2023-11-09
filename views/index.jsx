const React = require("react");
const Default = require("./layouts/default");


function Index({ breads, title }) {
  const borderStyle = {
    border: "2px solid #000", // Define border properties here
    width: "400px",
    textAlign: "center",
    backgroundColor: "green",
    marginBottom: "20px",
    paddingBottom: "10px",
  };
  const anchorStyle = {
    color: "white",
    textDecoration: "none",
  };
  const listStyle = {
    listStyleType: "none",
  };

  

  return (
    <Default title={title}>
      <h2>Index Page</h2>
      {/* This is a JSX comment */}
      {/* <p>I have {breads[0].name} bread!</p> */}
      <ul style={listStyle}>
        {breads.map((bread, index) => {
          return (
            
            <li key={index} style={borderStyle}>
              
              <a href={`/breads/${index}`} style = {anchorStyle}>
                <h1>{bread.name}</h1>
                <img src={bread.image} height={200}></img>
              </a>
            </li>
          );
        })}
      </ul>
    </Default>
  );
}

module.exports = Index;
