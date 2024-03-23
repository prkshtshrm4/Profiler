import { create } from "zustand"

// Initialize a default state
const INITIAL_STATE = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
}

// Create the store with Zustand, combining the status interface and actions
export const useCartStore = create((set, get) => ({
  cart: INITIAL_STATE.cart,
  totalItems: INITIAL_STATE.totalItems,
  totalPrice: INITIAL_STATE.totalPrice,
  addToCart: (product) => {
    const cart = get().cart
    const cartItem = cart.find(item => item.id === product.id)
    const price = product?.price
    const discount = product?.offerPercentage || null;
    const effective_discount = Math.floor(Number(price * Number(discount/100)))
    const effective_price = !discount ? price : Math.floor(Number(price)- effective_discount)
    // If the item already exists in the Cart, increase its quantity
    if (cartItem) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, currentQuantity: Number(item.currentQuantity ? item.currentQuantity : 0) + 1 } : item
      )
      set(state =>(
        {
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + effective_price,
      }))
    } else {
      const updatedCart = [...cart, { ...product, currentQuantity: 1 }]

      set(state => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + effective_price,
      }))
    }
  },
  removeFromCart: (product) => {
    const cart = get().cart
    const cartItem = cart.find(item => item.id === product.id)
    const quantity = cartItem?.currentQuantity;
    const price = product?.price
    const discount = product?.offerPercentage || null;
    const effective_discount = Math.floor(Number(price * Number(discount/100)))
    const effective_price = !discount ? price : Math.floor(Number(price)- effective_discount)
    if (quantity > 1) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, currentQuantity: item.currentQuantity - 1 } : item
      )
      set(state => ({
        cart: updatedCart,
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - effective_price,
      }))
    } else {
      set(state => ({
        cart: state.cart.filter(item => item.id !== product.id),
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - effective_price,
      }))
    }
  },
  clearCart: () => {
    set(state => ({
      cart: [],
      totalItems: 0,
      totalPrice: 0,
    }))
  },
}))
