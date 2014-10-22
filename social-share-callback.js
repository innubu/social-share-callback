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

  function load(medias) {
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

  function twitter(callback) {
    twttr.ready(function (twttr) {
      twttr.events.bind('tweet', callback);
    });
  };

  function facebook(callback) {
    // TODO
  };

  function linkedin(callback, errorCallback) {
    // TODO
  };

  return {
    load: load,
    twiter: twitter,
    facebook: facebook,
    linkedin: linkedin
  };

})(window, document);