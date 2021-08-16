const path = require("path");
const fs = require("fs");

const pathWithUploads = '../../storage/upload/'

const uploadPath = function (file) {
    return path.join(__dirname, pathWithUploads + file);
}

const filesInUploadFolder = function () {
    const directoryPath = path.join(__dirname, pathWithUploads);
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            const filesName = files.filter(file => file !== '.DS_Store');
            resolve(filesName);
        });
    });
}

const eraseUploadFolder = async function () {
    const files = await filesInUploadFolder();
    files.map((file) => {
        fs.unlinkSync(path.join(__dirname, pathWithUploads + file))
    })
}

module.exports = {
    uploadPath,
    filesInUploadFolder,
    eraseUploadFolder,
}

