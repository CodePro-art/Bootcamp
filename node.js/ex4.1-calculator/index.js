const yargs = require('yargs');

yargs.command({
  // use command: node index add --a=10 --b=14
  command: 'add',
  describe: 'Add a to b',
  builder: {
    a: {
      type: "integer",
      demandOptions: true
    },
    b: {
      type: "integer",
      demandOptions: true
    }
  },
  handler: function (argv) {
    console.log(argv.a + argv.b);
  }
})


yargs.parse()
