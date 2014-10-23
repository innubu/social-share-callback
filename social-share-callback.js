'use strict';

window.socialShareCallback = (function(window, document){

  function loadScript(src, callback)
  {
    var r = false;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.onload = s.onreadystatechange = function() {
      if ( !r && (!this.readyState || this.readyState == 'complete') )
      {
        r = true;
        if(callback) {
          callback();
        }
      }
    };
    var t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
  }

  function loadFacebook() {
    loadScript('http://connect.facebook.net/en_US/all.js');
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
    loadScript('//platform.linkedin.com/in.js');
  }

  function load(medias) {
    for(var i=0, total=medias.length; i<total; i++) {
      switch(medias[i]) {
        case 'facebook':
          loadFacebook();
          break;
        case 'twitter':
          loadTwitter();
          break;
        case 'linkedin':
          loadLinkedIn();
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
    FB.Event.subscribe('message.send', function(targetUrl) {
      callback(targetUrl);
    });
  };

  function linkedin(callback, errorCallback) {
    var li = document.querySelector("script[type='IN/Share']");
    li['data-sucess'] = callback;
    li['data-error'] = errorCallback;
  };

  return {
    load: load,
    twiter: twitter,
    facebook: facebook,
    linkedin: linkedin
  };

})(window, document);