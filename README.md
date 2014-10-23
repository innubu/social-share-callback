social-share-callback
===================

Capture the share callbacks on Facebook, Twitter (tweet) and/or LinkedIn

## Example
Check a full (and simple) example in examples folder

## API
### Twitter
Set the Share on Twitter callback
```javascript
socialShareCallback.twitter(function(tweetEvent) {
	// Succesful Tweet Callback
})
```

### Facebook
You have to load FB JS with your appId
If you are already loading FB with your appId, just skip this step
```javascript
socialShareCallback.loadFacebook("307260879379043", function() {
  console.log("FB Loaded");
});
```
Share a URL and set the successful callback
```javascript
socialShareCallback.facebook('https://innubu.com', function(response) {
	// Succesful Share on Facebook Callback
	// Example output of response
	// response = { post_id: '1090930483948394839' }
})
```

### Linkedin
Set the Share on LinkedIn callbacks
```javascript
socialShareCallback.linkedin(function() {
	// Succesfull Share on LinkedIn Callback
})
```

## License
See LICENSE file