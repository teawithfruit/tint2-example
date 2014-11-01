module.exports = function(){

  require('Application');
  require('Common');

  var win = new Window();

  var file = require('./file')(win);
  var button = require('./button')(win);
  var progress = require('./progress')(win);

  var inputSelection, outputSelection = [];

  var setInputSelection = function (data) {
    for(f in data) {
      inputSelection.push(data[f]);
    }
    console.log(inputSelection);
  };

  var setOutputSelection = function(data) {
    for(f in data) {
      outputSelection.push(data[f]);
    }
  };

  var openInputSelection = function() {
    file.setSource(setInputSelection);
  };

  var openOutputSelection = function() {
    file.setDestination(setOutputSelection);
  };

  var openOutputSelection = function() {
    file.setDestination(setOutputSelection);
  };

  var updateProgress = function(progress) {
    setTimeout(function() {
      interval = setInterval(function() { 
        progress.value = progress.value + 1/60;
        if(progress.value >= 1) {
          clearInterval(interval);
        }
      }, 1000/60);

    },1000);
  }

  var public = {

    shell:false,
    name:"window",

    run: function() {
      inputSelection = [];
      outputSelection = [];

      win.visible = true;
      win.maximizeButton = false;
      win.minimizeButton = true;
      win.closeButton = true;
      win.resizable = false;
      win.titleVisible = false;
      win.width = 600;
      win.height = 200;

      progress.setProgressbar(updateProgress, {left: 20, top: 50, right: 20 });
      button.setButton(openInputSelection, 'Open', {left: 20, top: 100});
      button.setButton(openOutputSelection, 'Save', {left: 75, top: 100});
    },

    shutdown: function() {
      
    }
  };
  
  return public;
};