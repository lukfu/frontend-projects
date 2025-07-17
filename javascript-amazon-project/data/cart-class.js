class Cart {
  cartItems;
  #localStorageKey; //pricate property, only accessible in class

  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));

    if (!this.cartItem) { //this gives the outer object, in this case cart
      this.cartItems = [{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1'
        }, {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1,
          deliveryOptionId: '2'
        }];
      }
    }

    saveToStorage() {
      localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId) {
      let matchingItem;

      this.cartItems.forEach((cartItem) => {
        if (productId == cartItem.productId) {
          matchingItem = cartItem;
        }
      });

      //let productQuantitySelector = Number(document.getElementById(productId)
      //  .value);
        
      const productQuantitySelector = 1;

      if (matchingItem) {
          matchingItem.quantity += productQuantitySelector;
      } else {
        this.cartItems.push({
          productId,
          quantity: 1, //productQuantitySelector,
          deliveryOptionId: '1'
        })
      }

      this.saveToStorage();
    }

    removeFromCart(productId) {
      const newCart = [];
      cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });
      this.cartItems = newCart;

      this.saveToStorage();
    }

    updateDeliveryOption = function(productId, deliveryOptionId) {
      let matchingItem;

      this.cartItems.forEach((cartItem) => {
        if (productId == cartItem.productId) {
          matchingItem = cartItem;
        }
      });

      matchingItem.deliveryOptionId = deliveryOptionId;
      this.saveToStorage();
    }
}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');
console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);