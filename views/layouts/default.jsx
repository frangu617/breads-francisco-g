const React = require("react");

function Default(html) {
    const styler = {
        fontFamily: "Arial",
        color: "#fff",
        backgroundColor: '#00f'
    };
    
   
  return (
    <html>
      <head>
        <title>{html.title || "Default"}</title>
      </head>
      <body style = {styler}>
        <h1>Bread Town!</h1>
        <div className="container">{html.children}</div>
      </body>
    </html>
  );
}

module.exports = Default;
