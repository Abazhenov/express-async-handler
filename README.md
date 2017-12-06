Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.

### Installation:

```javascript
npm install --save express-async-handler
```
or
```javascript
yarn add express-async-handler
```

### Usage:

```javascript
const asyncHandler = require('express-async-handler')

express.get('/', asyncHandler(async (req, res, next) => {
	const bar = await foo.findAll();
	res.send(bar)
}))
```
