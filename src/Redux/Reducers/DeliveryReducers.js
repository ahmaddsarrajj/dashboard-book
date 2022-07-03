import {
  DELIVERY_CREATE_FAIL,
  DELIVERY_CREATE_REQUEST,
  DELIVERY_CREATE_RESET,
  DELIVERY_CREATE_SUCCESS,
  DELIVERY_DELETE_FAIL,
  DELIVERY_DELETE_REQUEST,
  DELIVERY_DELETE_SUCCESS,
  DELIVERY_LIST_FAIL,
  DELIVERY_LIST_REQUEST,
  DELIVERY_LIST_SUCCESS,
  DELIVERY_DETAILS_REQUEST,
  DELIVERY_DETAILS_SUCCESS,
  DELIVERY_DETAILS_FAIL,
  DELIVERY_UPDATE_FAIL,
  DELIVERY_UPDATE_REQUEST,
  DELIVERY_UPDATE_RESET,
  DELIVERY_EDIT_REQUEST, 
  DELIVERY_EDIT_SUCCESS ,
  DELIVERY_EDIT_FAIL ,
  DELIVERY_UPDATE_SUCCESS,
  ORDER_DETAILS_SUCCESS,
} from "../Constants/DeliveryConstants";

//ADD DELIVERY

export const deliveryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case DELIVERY_CREATE_REQUEST:
      return { loading: true };
    case DELIVERY_CREATE_SUCCESS:
      return { loading: false, success: true, delivery: action.payload };
    case DELIVERY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case DELIVERY_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

//DELIVERY DETAILS
export const deleveryDetailsReducer = (
  state = { loading: true },
  action
) => {
  switch (action.type) {
    case DELIVERY_DETAILS_REQUEST:
      return { ...state, loading: true };
    case DELIVERY_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };
    case DELIVERY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


// ALL delivery
export const deliveryListReducer = (state = { delivery: [] }, action) => {
  switch (action.type) {
    case DELIVERY_LIST_REQUEST:
      return { loading: true, delivery: [] };
    case DELIVERY_LIST_SUCCESS:
      return { loading: false, delivery: action.payload };
    case DELIVERY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// DELETE DELIVERY
export const deliveryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELIVERY_DELETE_REQUEST:
      return { loading: true };
    case DELIVERY_DELETE_SUCCESS:
      return { loading: false, success: true };
    case DELIVERY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// EDIT DELIVERY  
export const deliveryEditReducer = (
  state = { delivery: {} },
  action
) => {
  switch (action.type) {
    case DELIVERY_EDIT_REQUEST:
      return { ...state, loading: true };
    case DELIVERY_EDIT_SUCCESS:
      return { loading: false, delivery: action.payload };
    case DELIVERY_EDIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


// UPDATE Delivery
export const deliveryUpdateReducer = (state = { delivery: {}}, action) => {
  switch (action.type) {
    case DELIVERY_UPDATE_REQUEST:
      return { loading: true };
    case DELIVERY_UPDATE_SUCCESS:
      return { loading: false, success: true, delivery: action.payload };
    case DELIVERY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case DELIVERY_UPDATE_RESET:
      return { delivery: {} };
    default:
      return state;
  }
};
