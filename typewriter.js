const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   console.log(char);
// }


let num = 0;
for(let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 50 * i)
  num += i;
}

