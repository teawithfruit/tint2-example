module.exports = function(win){

  require('Application');
  require('Common');

  var public = {

    shell:false,
    name:"progressbar",

    setProgressbar: function(callback, position) {
      var progress = new ProgressBar();
      var interval;

      if(position.top)    progress.top = position.top;
      if(position.right)  progress.right = position.right;
      if(position.bottom) progress.bottom = position.bottom;
      if(position.left)   progress.left = position.left;

      progress.height = 50;

      win.appendChild(progress);

      callback(progress);
    },

    shutdown: function() {
      
    }
  };
  
  return public;
};