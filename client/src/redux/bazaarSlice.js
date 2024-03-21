import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  favoritesList: [],

  userInfo: null,
};

export const bazaarSlice = createSlice({
  name: "bazaar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    incrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    addToFavorite: (state, action) => {
      let cpyFavoritesList = [...state.favoritesList];
      const index = cpyFavoritesList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        cpyFavoritesList.push(action.payload);
      } else {
        cpyFavoritesList.splice(index, 1);
      }
    },
    // removeFromFavorite: (state, action)=> {

    // },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
  addToFavorite,
  addUser,
  removeUser,
} = bazaarSlice.actions;
export default bazaarSlice.reducer;
