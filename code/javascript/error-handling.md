# Error Handling

- Errors only accept strings as an argument
- If we want to get fancy we can either make an object and then stringify the message, or use ES6 Custom Errors

## Example
```javascript
x = new Error('404 not found')
console.log(x) // Error: 404 not found

y = new Error({type: '404', message: 'not found'})
console.log(y) // Error: [object Object]
```