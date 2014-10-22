'use strict';

window.socialShareCallback = (function(window, document){

  function loadFacebook() {
    // TODO
  }

  function loadTwitter() {
    window.twttr = (function (d,s,id) {
      var t, js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
      js.src="//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
      return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
      }(document, "script", "twitter-wjs"));
  }

  function loadLinkedIn() {
    // TODO
  }

  this.load = function(medias) {
    for(var i=0, total=medias.length; i<total; i++) {
      switch(medias[i]) {
        case 'facebook':
          this.loadFacebook();
          break;
        case 'twitter':
          this.loadTwitter();
          break;
        case 'linkedin':
          this.loadLinkedIn();
          break;
      }
    }
  };

  this.twitter = function(callback) {
    twttr.ready(function (twttr) {
        twttr.events.bind('tweet', callback);
    });
  };

  this.facebook = function(callback) {
    // TODO
  };

  this.linkedin = function(callback, errorCallback) {
    // TODO
  };

  return this;

})(window, document);