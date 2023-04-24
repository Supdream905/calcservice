const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const query = url.parse(req.url).query;
  const params = new URLSearchParams(query);
  const number1 = parseFloat(params.get('number1'));
  const number2 = parseFloat(params.get('number2'));
  const operator = decodeURIComponent(params.get('operator'));

  let result = 0;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number1 / number2;
      break;
    default:
      break;
  }

  res.writeHead(200, {'Content-Type': 'text/html', 
                      'Access-Control-Allow-Origin': '*'});
  res.write(result.toString());
  res.end();
}).listen(8080);
