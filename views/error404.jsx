const React = require("react");
const Default = require("./layouts/Default");

function error404() {
  return (
    <Default>
      <h2>404</h2>
      <a href="/breads"></a><img src="https://http.cat/404" alt="404 cat" />
    </Default>
  );
}

module.exports = error404;