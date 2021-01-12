const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hello what is your name ', (answer) => {
  console.log(`Hello, ${answer}`);
  rl.question('What kind of activities you like doing?', (answer) =>{
    console.log(`${answer}? Really, that sound interesting`);
  });
  rl.question('And when did you start doing that', (answer) =>{
    console.log(`${answer}? wow that long?`);
  })
  rl.question('What made you decide to do that?', (answer) =>{
    console.log(`${answer}, that's impressive`);
  })

  rl.close();
});