# Debugging

Debugging in Ramda can be difficult, especially when working with composed functions.

`tap` is a useful function to enable logging without using side-effects, but to use this and also have breakpoints you'll need a helper function:

```javascript
import { tap, pipe } from 'ramda'

const foo = pipe(
  fn1,
  fn2, // we want to see what happens after transformFn2 executes
  tap(logit('after fn2')), // so we tap here and send it to our logging fn
  fn3
)

const logit = curry((fn, text) => {
  console.log(fn, text) // You can breakpoint this line and it will work as you expect it to
})

foo(someData)
```