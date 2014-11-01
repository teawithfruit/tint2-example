module.exports = function(win){

  require('Application');
  require('Common');

  var public = {

    shell:false,
    name:"button",

    setButton: function(callback, title, position) {
      var button = new Button();

      button.title = title;
      button.addEventListener('mouseup', function() {
        callback();
      });
      
      if(position.top) button.top = position.top;
      if(position.right) button.right = position.right;
      if(position.bottom) button.bottom = position.bottom;
      if(position.left) button.left = position.left;

      win.appendChild(button);
    },

    shutdown: function() {
      
    }
  };
  
  return public;
};