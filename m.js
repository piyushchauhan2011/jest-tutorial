export default function something() {
  console.log("something");
}

if (require.main === module) {
  something();
}
