social-share-callback
===================

Capture the share callbacks on Facebook, Twitter (tweet) and/or LinkedIn

## API

### Twitter
Set the Share on Twitter callback
```javascript
socialShareCallback.twitter(function(tweetEvent) {
	// Succesful Tweet Callback
})
```

### Facebook
Set the Share on Facebook callback
```javascript
// You have to load FB JS with your appId
// If you are already loading FB with your appId, just skip this step
socialShareCallback.loadFacebook("307260879379043", function() {
  console.log("fb loaded");
});

// Share the URL and set the successful callback
socialShareCallback.facebook('https://innubu.com', function() {
	// Succesful Share on Facebook Callback
})
```

### Linkedin
Set the Share on LinkedIn callbacks
```javascript
socialShareCallback.linkedin(function() {
	// Succesfull Share on LinkedIn Callback
}, function() {
	// Error Callback
})
```

## License
See LICENSE file