export function generateRandomString() {
  return Math.random()
    .toString(20)
    .substr(2, 6);
}
