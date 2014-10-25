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
	// Successful Tweet Callback
})
```

### Facebook
Please check you are setting your appId
```javascript
FB.init({
  appId      : 'your-appId',
  status     : true,
  xfbml      : true,
  version    : 'v2.1'
});
```
Share the current URL and set the successful callback
```javascript
socialShareCallback.facebook(function(response) {
	// Successful Share on Facebook Callback
	// Example output of response
	// response = { post_id: '1090930483948394839' }
})
```

### Linkedin
Set the Share on LinkedIn callbacks
```javascript
socialShareCallback.linkedin(function() {
	// Successful Share on LinkedIn Callback
})
```

## License
See LICENSE file