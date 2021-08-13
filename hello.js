const fs = require('fs')
const path = require("path");
const config = require("config");

const fileName = 'localhost.pdf';
const oldPath = config.get('storage.download') + '/' + fileName;
const newPath = path.join(__dirname, 'storage/download/' + fileName);

fs.rename(oldPath, newPath, function() {
    console.log('documento movido');
})