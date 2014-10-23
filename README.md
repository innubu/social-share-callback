social-share-callback
===================

Capture the share callbacks on Facebook, Twitter (tweet) and/or LinkedIn

## API
### Load
(Optional) Async loading of JS APIs. Useful if you don't want to load each one manually in your HTML or want to load on the fly.
```javascript
socialShareCallback.load(['facebook','twitter'])
```

### Facebook
Set the Share on Facebook callback
```javascript
socialShareCallback.facebook(function() {
	// Succesful Share on Facebook Callback
})
```

### Twitter
Set the Share on Twitter callback
```javascript
socialShareCallback.twitter(function(tweetEvent) {
	// Succesful Tweet Callback
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