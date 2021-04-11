// Import file system module
const fs = require('fs');

// define current directory
const dir = './';

// 1. Create new file named: note.txt
fs.writeFileSync('note.txt','This file was created by Node.js. ', (err) => {
  if (err) throw err;
});

// 2. Copy note.txt -> destination.txt
fs.copyFile('note.txt', 'destination.txt', (err) => {
  if (err) throw err;
});


// 3. Rename one of the files
fs.rename('./note.txt', './source.txt', function(err) {
    if ( err ) console.log('ERROR: ' + err);
});

// 4. Get a list of all the file names of the current directory
fs.readdir(dir, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

// 5. Another fs method: AppendFileSync
fs.appendFileSync('./note.txt','This is some extra content.')