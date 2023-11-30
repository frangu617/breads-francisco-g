const React = require("react");

function Default(html) {
  return (
    <html>
    <head>
      <title>{html.title || 'Default'}</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.0/css/bootstrap.min.css" integrity="sha384-+0n0xVDoz7t4lDeLzCjHAUqF3zJp0tAdGmFjVl2w1B5mJP4xzRf+fkR1TF9N3L9p" crossOrigin="anonymous"></link>
      <link rel="stylesheet" href="/main.css" />
    </head>
    <body>
      <div className="wrapper">
        <div className="row">
        <header className="header col-12">
          <h1><a href="/breads">BreadCRUD</a></h1>
        
        {/* <nav>
          <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/breads">Breads</a></li>
          <li><a href="/breads/new">New bread</a></li>
          </ul>
        </nav> */}
        </header>
        </div>
        <div className="container">
          {html.children}
        </div>
      </div>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.0/js/bootstrap.bundle.min.js" integrity="sha384-KyZXEAg3QhqLMpG8r+Knujsl5+z0I5TTITum5zSt6VTTTGx+kaC1gZzITglVfSpX" crossOrigin="anonymous"></script>
    </body>
    </html>
  )
}


module.exports = Default;
