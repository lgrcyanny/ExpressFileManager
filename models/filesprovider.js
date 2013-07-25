var fs = require('fs');
var config = require('../config/config');
var FilesProvider = function () {
  this.fileDir = config.uploadDir;
}

FilesProvider.prototype.findAll = function (callback) {
  fs.readdir(this.fileDir, function(error, files) {
    if (error) {
      throw error;
    }
    callback(null, files);
  });
};

FilesProvider.prototype.upload = function (filePath, fileName, callback) {
  var fileServerPath = this.fileDir + '/' + fileName;
  var self = this;
  fs.rename(filePath, fileServerPath, function (error) {
    if (error) {
      callback(null, {success: false, error: error});
    }
    callback(null, {success: true});
  })
};

FilesProvider.prototype.download = function(fileName, callback) {
  var filePath = this.fileDir + '/' + fileName;
  callback(null, filePath);
}


module.exports = FilesProvider;