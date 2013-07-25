var FilesProvider = require('../models/filesprovider');
/*
 * GET home page.
 */

exports.index = function(req, res){
  var filesprovider = new FilesProvider();
  filesprovider.findAll(function(error, files) {
    if (error) {
      throw error;
    }
    res.render('index', {
      title: 'File Manager',
      uploadedFiles: files
    });
  });
};