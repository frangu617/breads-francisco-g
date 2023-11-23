const React = require("react");
const Default = require("./layouts/Default");

function Show({ bread }) {
  //Confirm we are getting our bread data in the terminal.
  //console.log(bread.name)

  return (
    <Default>
      <div className="bread-page">
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <p>
          and it
          {bread.hasGluten ? <span> does </span> : <span> does NOT </span>}
          have gluten
        </p>
        <img src={bread.image} alt={bread.name} />
        <p>{bread.getBakedBy()}</p>
        <div className="col-sm-4 text-centers">
          <a href="/breads">
          <input type="submit" value="GO HOME" />
          </a>

          <a href={`/breads/${bread.id}/edit`}>
            <input type="submit" value="EDIT" />
          </a>
          <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE" />
          </form>
        </div>
      </div>
    </Default>
  );
}

module.exports = Show;
