Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.

### Instalation:


```javascript
npm install --save express-async-handler
yarn add express-async-handler
```

### Usage:

```javascript
const asyncHandler = require('express-async-handler')

express.get('/', asyncHandler(async (req, res, next) => {
	bar = await foo.findAll();
	res.send(bar)
}))
```