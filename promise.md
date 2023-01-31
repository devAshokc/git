### Promsie

1. Promise object
   1. .then()
   2. .catch() - only when error happens
   3. .finally() - error or no error (It will run)
2. Promise has 2 callbacks
   1. resolve
   2. reject
3. .then() & .catch() always returns Promise object

   1. map & filter always returns Array
   2. Dot chaining  

4. 1% - Promise create & 99% - Promise use
5. Promise states
   1. Pending
   2. Rejected
   3. Fulfilled
6. Promise - why to create? - Handles async function
7. Avoids callback hell
8. Promise methods
   1. .all() - takes array of Promises
      1. Calling Multiple promise at same time
      2. Waits all promises to complete
      3. P1, P2, P3 - 5secs
      4. Source order = Output order
      5. Any one Promise errors - it will come to .catch()
   2. .race()
      1. Waits the first promise to complete
      2. Multiple files - P1, P2, P3 all same file but it different locations
         1. India, US, and Europe - Keep it all places
         2. Promise.race() - Kalai (IN), Sridhar (US), Santhosh (EU)
         3. Promise.race(IN, US, EU)
         4. Before even any one promise an error occurs then it reaches catch block
