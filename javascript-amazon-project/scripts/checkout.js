import {renderOrderSummary} from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

// promises allow JS to run multiple lines of action simultaneously
// also separates callbacks to not cause too much nesting
// Promise.all runs all the promises, lets them finish and then goes to the next step
// async makes a function return a promise
// await only usable in async function

async function loadPage() {
  // async code written like normal code
  try {
    //throw 'error1';

    await loadProductsFetch()

  const value = await new Promise((resolve, reject) => {
    // throw 'error1';
    loadCart(() => {
      //reject('error3'); //reject instead of throw in promise for future error throw
      resolve('value3');
    });
  });
  console.log(value);

  } catch (error) {
    console.log('unexpected error: ' + error);
  }
  
  renderOrderSummary();
  renderPaymentSummary(); 
}
loadPage()

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve('test');
    });
  })

]).then((values) => {
  console.log(values)
  renderOrderSummary();
  renderPaymentSummary(); 
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary(); 
  });
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary(); 
  });
});
*/
