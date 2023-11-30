const React = require("react");
const Default = require("./layouts/Default");

function Home() {
    return (
        <Default>
            <h1>Welcome to an Awesome App about <a href = '/breads'>Bread!</a></h1>
            <a href="/breads"><img src="/images/basket.png" alt="bread basket" /></a>
           
        </Default>
    );
}

module.exports = Home;