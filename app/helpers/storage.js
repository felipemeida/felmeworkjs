const path = require("path");
module.exports.uploadPath = function (file) {
    let pathFile = path.join(__dirname, '../../storage/upload/' + file);
    return pathFile;
}