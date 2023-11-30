const React = require("react");
const Default = require("./layouts/Default");

function Index({ breads, bakers, title }) {
  return (
    <Default title={title}>
      <h2 className="title">
        <a href="/">Home</a>
      </h2>
      <div className="index-page"></div>
      <h2>Index Page</h2>
      {/* This is a JSX comment */}
      {/* <p>I have {breads[0].name} bread!</p> */}
      <ul className="index-list">
        {breads.map((bread) => {
          return (
            <ul>
              <li key={bread._id}>
                <a href={`/breads/${bread._id}`}>
                  <button className="btn btn-lg btn-primary ">
                    {bread.name}
                  </button>
                </a>
              </li>
            </ul>
          );
        })}
      </ul>
      <h3>Bakers</h3>
      <ul>
        {bakers.map((baker) => {
          return (
            <li key={baker._id}>
              <a href={`/bakers/${baker._id}`}>{baker.name}</a>
            </li>
          );
        })}
      </ul>
      <div className="row">
        <div className="newButton col">
          <a href="/breads/new">
            <button>Add a new bread</button>
          </a>
        </div>
      </div>
    </Default>
  );
}

module.exports = Index;


