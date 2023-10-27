export function split() {
  console.log('------------------------------------------------------');
}

export function newLine() {
  console.log();
}

export function logger({ method, url, body }, res, next) {
  const pipe = ' | ';
  const timestamp = new Date().toLocaleString('en-GB');

  console.log(timestamp, pipe, method, pipe, url);

  if (body && Object.keys(body).length > 0) {
    console.log(body);
  }

  split();
  next();
}
