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

  function loadFacebook(appId, callback) {
    window.fbAsyncInit = function() {
      FB.init({
        appId: appId,
        status: true,
        cookie: true,
        xfbml: true,
        oauth: true
      });
    };
    loadScript("//connect.facebook.net/en_US/all.js", function(){
      if(callback) {
        callback();
      }
    })
  }

  function facebook(callback) {
    FB.ui({
      method: 'share',
      href: location.href,
    }, function(response){
      if(callback && response && response.post_id) {
        callback(null, response)
      }
    });
  };

  function twitter(callback) {
    twttr.ready(function (twttr) {
      twttr.events.bind('tweet', callback);
    });
  };

  function linkedin(callback) {
    var li = document.querySelector("script[type='IN/Share']");
    var successName = callback.name || 'linkedinSuccess';
    window[successName] = callback;
    li.setAttribute('data-onsuccess', successName);
  };

  return {
    loadFacebook: loadFacebook,
    twitter: twitter,
    facebook: facebook,
    linkedin: linkedin
  };

})(window, document);