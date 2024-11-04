import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  size: string | null;
}

interface CartState {
  items: CartItem[];
}

const loadCartFromLocalStorage = (): CartItem[] => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

const initialState: CartState = {
  items: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name && item.size === action.payload.size
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ name: string; size: string | null }>) => {
      state.items = state.items.filter(
        (item) => !(item.name === action.payload.name && item.size === action.payload.size)
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateCartItemQuantity: (state, action: PayloadAction<{ name: string; size: string | null; quantity: number }>) => {
      const { name, size, quantity } = action.payload;
      const item = state.items.find(
        (item) => item.name === name && item.size === size
      );
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const selectTotalItems = (state: RootState) => {
  const uniqueItems = new Set<string>();

  state.cart.items.forEach((item) => {
    uniqueItems.add(`${item.id}-${item.size}`);
  });

  return uniqueItems.size;
};

export const { addToCart, removeFromCart, clearCart, updateCartItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
