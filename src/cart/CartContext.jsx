import { createContext, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

function reducer(state, action) {
  switch(action.type) {
    case 'ADD': {
      const { product } = action
      const existing = state.items[product.id]
      const qty = existing ? existing.qty + 1 : 1
      const items = { ...state.items, [product.id]: { product, qty } }
      return { items }
    }
    case 'INCREMENT': {
      const id = action.id
      const entry = state.items[id]
      if(!entry) return state
      const items = { ...state.items, [id]: { ...entry, qty: entry.qty + 1 } }
      return { items }
    }
    case 'DECREMENT': {
      const id = action.id
      const entry = state.items[id]
      if(!entry) return state
      const newQty = entry.qty - 1
      const items = { ...state.items }
      if(newQty <= 0) delete items[id]
      else items[id] = { ...entry, qty: newQty }
      return { items }
    }
    case 'REMOVE': {
      const id = action.id
      const items = { ...state.items }
      delete items[id]
      return { items }
    }
    case 'CLEAR':
      return { items: {} }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: {} })

  const api = useMemo(() => ({
    items: state.items,
    totalItems: Object.values(state.items).reduce((acc, e) => acc + e.qty, 0),
    totalCost: Object.values(state.items).reduce((acc, e) => acc + e.qty * e.product.price, 0),
    addToCart: (product) => dispatch({ type:'ADD', product }),
    increment: (id) => dispatch({ type:'INCREMENT', id }),
    decrement: (id) => dispatch({ type:'DECREMENT', id }),
    remove: (id) => dispatch({ type:'REMOVE', id }),
    clearCart: () => dispatch({ type:'CLEAR' }),
    hasProduct: (id) => !!state.items[id],
  }), [state])

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if(!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
