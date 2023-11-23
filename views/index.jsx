const React = require("react");
const Default = require("./layouts/Default");

function Index({ breads, title, bakedBy }) {
  return (
    <Default title={title}>
      <div className="index-page"></div>
      <h2>Index Page</h2>
      {/* This is a JSX comment */}
      {/* <p>I have {breads[0].name} bread!</p> */}
      <ul className="index-list">
        {breads.map((bread, index) => {
          return (
            <ul>
              <li key={index}>
                <a href={`/breads/${bread.id}`}>
                  <button className="btn btn-lg btn-primary ">
                    {bread.name}
                  </button>
                </a>
              </li>
              <li className="baker-list-item">{bread.getBakedBy()}</li>
            </ul>
          );
        })}
      </ul>
      <div className="row">
        <div className="newButton col">
          <a href="/breads/new">
            <button>Add a new bread</button>
          </a>
        </div>
        <div className="col">
          <form action="/breads/baker" method="GET">
            <label htmlFor="baker">Baker</label>
            <select name="baker" id="baker" defaultValue="Rachel">
              <option value="">Select a baker</option>
              <option value="Rachel">Rachel</option>
              <option value="Monica">Monica</option>
              <option value="Joey">Joey</option>
              <option value="Chandler">Chandler</option>
              <option value="Ross">Ross</option>
              <option value="Phoebe">Phoebe</option>
            </select>
            <div className="newButton col">
              <button type="submit">Search by Baker</button>
            </div>
          </form>
        </div>
      </div>
    </Default>
  );
}

module.exports = Index;
