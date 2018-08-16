  
// Facebook SDK for JavaScript
// Source : https://developers.facebook.com/docs/javascript/quickstart
// Localization : fr_FR
// App-ID : 1678638095724206

  window.fbAsyncInit = function() {
    FB.init({
      appId            : '1678638095724206',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.0'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/fr_FR/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));