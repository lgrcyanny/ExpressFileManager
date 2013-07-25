var FilesProvider = require('../models/filesprovider');
var filesprovider = new FilesProvider();
/**
 * Download File
 */
exports.download = function (req, res) {
	var fileName = req.params.fileName;
  filesprovider.download(fileName, function(error, filePath) {
    if (error) throw error;
    res.download(filePath);
  });
};

exports.upload = function (req, res) {
  var filePath = req.files.userFile.path;
  var fileName = req.files.userFile.name;
  filesprovider.upload(filePath, fileName, function (error, result) {
    if (error) {
      throw error;
    }
    res.send(result);
  });
};