import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
   userListReducer, 
   userLoginReducer,
   userUpdateProfileReducer,
   userRegisterReducer
} from "./Reducers/userReducers";
import {
  deliveryCreateReducer,
  deliveryDeleteReducer,
  deliveryEditReducer,
  deliveryListReducer,
  deliveryUpdateReducer,
  deleveryDetailsReducer
} from "./Reducers/DeliveryReducers";
import {
  orderDeliveredReducer,
  orderDetailsReducer,
  orderListReducer,
  orderPaidedReducer
} from "./Reducers/OrderReducres";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userList: userListReducer,
  updateProfile: userUpdateProfileReducer,
  userRegister: userRegisterReducer,

  deliveryList: deliveryListReducer,
  deliveryDelete: deliveryDeleteReducer,
  deliveryCreate: deliveryCreateReducer,
  deliveryEdit: deliveryEditReducer,
  deliveryUpdate: deliveryUpdateReducer,
  deliveryDetails: deleveryDetailsReducer,

  orderList: orderListReducer,
  orderDetails: orderDetailsReducer,
  orderDeliver: orderDeliveredReducer,
  orderPaid: orderPaidedReducer,
});

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
