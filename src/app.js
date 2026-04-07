function message() {
  return "Hello world!";
}

if (require.main === module) {
  console.log(message());
}

module.exports = {
  message,
};
