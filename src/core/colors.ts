function pass(msg: string) {
  return `\x1b[42m ${msg} \x1b[0m`;
}

function fail(msg: string) {
  return `\x1b[41m ${msg} \x1b[0m`;
}

export {
  pass,
  fail
}