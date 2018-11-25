
const counter = {
  count: 0,
  step: 1,
  setStep(n) {
    this.step = n;
  },
  inc() {
    return this.count += this.step;
  },
  dec() {
    return this.count -= this.step
  },
  // a getter method
  now() {
    return this.count;
  },
  reset() {
    this.count = 0;
    this.step = 1;
  }
};

/**
 * Syntax for the object is as follows:
 * 
 *    const varName = {
 *      attribute: attributeValue
 *      attribute1: {number},
 *      attribute2: {function},
 *      attribute3: {boolean}
 *    };
 * 
 *    // this is a function
 *    const funcName = function () {
 *      
 *    }
 *    const funcName = () => {
 *      
 *    }
 *    function funcName() {
 *      
 *    }
 *    
 *    // this will declare
 *    const funcName = function (age) {
 *      
 *    }
 *    funcName(36); // this will execute
 * 
 *    
 *    // this will declare
 *    const funcName = function (func) {
 *      
 *    }
 *    funcName( function(){} ); // this will execute
 * 
 * 
 * 
 */





