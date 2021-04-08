/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 *******************************************************************************
 */


/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');


/*
*******************************************************************************
* ANSWERS:
* 1. The outputs will be printed in the following order: "Step 1", "Step 3", and "Step 2".
*   This is because the final `console.log()` statement is executed while the `console.log()` statement
*   for "Step 2" is put on hold for 2,000 milliseconds.
* 2. The outputs were printed in the following order: "Step 1", "Step 3", and "Step 2".
* 3. The outputs should be printed in the following order: "Step 1", "Step 2", and "Step 3". 
*   This is because the snooze function is no longer active, so there is no delay in printing "Step 2". 
*   After running the code to verify, it turns out that I am actually wrong. The output order is actually
*   the same with a snooze time of 0 ms as it was with a snooze time of 2,000 msI think it's because the code 
*   still takes a longer time to call and execute the snooze function even when the snooze time is 0 than 
*   it does to simply keep running the rest of the code outside of the function call (namely, the print 
*   statement for "Step 3"). 
  
*******************************************************************************
*/


// New version with promise
// function ensureSteps(step) {
//   return new Promise(function(resolve, reject) {
//     console.log("Print step number here")
  
//     if (step == "step0") {
//       resolve("step1")
//     }
//     else if (step == "step1") {
//       resolve("step2")
//     }
//     else if (step == "step2") {
//       resolve("step3")
//     }
//     else {
//       reject("not a step")
//     }
//   })
// }

// ensureSteps("step0")
// .then(step => ensureSteps(step))
// .then(step => ensureSteps(step))
// .catch(err => console.log(err))


