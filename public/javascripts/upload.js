$(document).ready(function () {
  $('#upload-form').submit(function () {
    $(this).ajaxSubmit({
      error: function (xhr) {
        status('Error: ' + xhr.status + '.');
      },
      uploadProgress: function (event, position, total, percentComplete) {
        $('#upload-progress').show();
        $('#upload-progress > div').css('width', percentComplete * 100);
      },
      success: function (response) {
        if (!response.success) {
          status('Opps, some error happens: ' + response.error);
          $('#upload-progress').addClass('bar-danger');
          $('#upload-progress').fadeOut();
        } else {
          $('#upload-progress').addClass('bar-success');
          $('#upload-progress').fadeOut();
          status('Upload success!');
        }
      }
    });
    return false;
  });

  var status = function (message) {
    $('#upload-status').text(message);
  }
});