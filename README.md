social-share-callback
===================

Capture the share callbacks on Facebook, Twitter (tweet) and/or LinkedIn

## API
### simple-social-share.load
Async loading of JS APIs. Useful if you don't want to load each one manually in your HTML or want to load on the fly.
```javascript
social-share-callback.load(['facebook','twitter'])
```

### simple-social-share.facebook
Share on Facebook
```javascript
social-share-callback.facebook(function() {
	// Succesful Share on Facebook Callback
})
```

### simple-social-share.twitter
Share on Twitter
```javascript
social-share-callback.twitter(function(tweetEvent) {
	// Succesful Tweet Callback
})
```

### simple-social-share.linkedin
Share on LinkedIn
```javascript
social-share-callback.linkedin(function() {
	// Succesfull Share on LinkedIn Callback
}, function() {
	// Error Callback
})
```

## License
See LICENSE file