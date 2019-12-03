const arrayOfChar = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|  \n']

let i = 0;
while (i < arrayOfChar.length) {
  for (let char of arrayOfChar) {
    setTimeout(() => {
      process.stdout.write(char);
    }, 100 * i);
    i++;
  }
}

