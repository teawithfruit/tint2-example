module.exports = function(win){

  require('Application');
  require('Common');

  var public = {

    shell:false,
    name:"file",

    setSource: function(callback) {
      var dialog = new FileDialog("open");

      dialog.title = "Select source";
      dialog.message = "Select a source file.";
      dialog.prompt = "Open";
      dialog.allowMultiple = true;
      dialog.allowDirectories = true;
      dialog.directory = "~/";
      dialog.allowFileTypes = ["png, jpg"];

      dialog.addEventListener('select', function() {
        callback(dialog.selection);
      });

      dialog.addEventListener('cancel', function() {
        dialog.cancel();
      });
      
      dialog.open(win);
    },

    setDestination: function(callback) {
      var dialog = new FileDialog("open");

      dialog.title = "Select directory";
      dialog.message = "Select a directory.";
      dialog.prompt = "Save";
      dialog.allowMultiple = false;
      dialog.allowDirectories = true;
      dialog.directory = "~/";
      dialog.allowFileTypes = [""];

      dialog.addEventListener('select', function() {
        callback(dialog.selection);
      });

      dialog.addEventListener('cancel', function() {
        dialog.cancel();
      });

      dialog.open(win);
    },

    shutdown: function() {
      
    }
  };
  
  return public;
};