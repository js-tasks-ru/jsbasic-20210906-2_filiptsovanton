function sum(m, n) {
  let error = false;

  const sumNumbers = [...arguments];
  if (sumNumbers.length === 0) {
    error = true;
  }
  sumNumbers.forEach((value) => {
    if (typeof value !== "number") {
      error = true;
    }
  });
  if (error) {
    return "Entry is invalid. Only Numbers are allowed.";
  }
  return [...arguments].reduce((a, b) => a + b);
}

sum();
