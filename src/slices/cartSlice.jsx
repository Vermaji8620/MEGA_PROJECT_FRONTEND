import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  totalItems: localStorage.getItem("totalItems")
    ? JSON.parse(localStorage.getItem("totalItems"))
    : 0,
  total: localStorage.getItem("total")
    ? JSON.parse(localStorage.getItem("total"))
    : 0,
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      const course = action.payload;
      const index = state.cart.findIndex((item) => item._id === course._id);

      if (index >= 0) {
        // if the course is already enrollled in the cart, do not modify the quantity
        toast.error("Course already in the cart");
        return;
      }
      // if the course is not in the cart add it inside the cart
      state.cart.push(course);
      // update the total quantity and the price
      state.totalItems++;
      state.total += course.price;
      // update to localstorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("total", JSON.stringify(state.total));
      localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
      // show the toast
      toast.success("course is added to the cart");
    },
    // removefromcart
    removeFromCart: (state, action) => {
      const courseId = action.payload;
      const index = state.cart.findIndex((item) => item._id === courseId);

      if (index >= 0) {
        // if the course is found in the cart, remove it
        state.totalItems--;
        state.total -= state.cart[index].price;
        state.cart.splice(index, 1);
        // update to the localstorage

        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("total", JSON.stringify(state.total));
        localStorage.setItem("totalItems", JSON.stringify(state.totalItems));

        // show toast
        toast.success("course removed from cart");
      }
    },
    // resetcart
    resetCart: (state) => {
      state.cart = [];
      state.total = 0;
      state.totalItems = 0;

      // update to lcs
      localStorage.removeItem("cart");
      localStorage.removeItem("total");
      localStorage.removeItem("totalItems");
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
