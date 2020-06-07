export function sum(a: number, b: number) {
  return a + b;
}

if (require.main === module) {
  console.log(sum(1, 2));
}
