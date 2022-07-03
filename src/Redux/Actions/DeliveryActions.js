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
} from "../Constants/DeliveryConstants";
import axios from "axios";
import { logout } from "./userActions";


//GET ALL DELIVERY
export const listDelivery = () => async (dispatch, getState) => {
  try {
    dispatch({ type: DELIVERY_LIST_REQUEST });



    const { data } = await axios.get(`/api/delivery/all`);

    dispatch({ type: DELIVERY_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: DELIVERY_LIST_FAIL,
      payload: message,
    });
  }
};

// //DELIVERY DETAILS
//  export const getDeliveryDetails = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: DELIVERY_DETAILS_REQUEST });


//     const { data } = await axios.get(`/api/delivery/${id}`);
//     dispatch({ type: DELIVERY_DETAILS_SUCCESS, payload: data });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     if (message === "Not authorized, token failed") {
//       dispatch(logout());
//     }
//     dispatch({
//       type: DELIVERY_DETAILS_FAIL,
//       payload: message,
//     });
//   }
// };

// DELETE DELIVERY
export const deleteDelivery = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELIVERY_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/delivery/${id}`, config);

    dispatch({ type: DELIVERY_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: DELIVERY_DELETE_FAIL,
      payload: message,
    });
  }
};

// CREATE DELIVERY
export const createDelivery =
  (country , amount ) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: DELIVERY_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/delivery/`,
        { country , amount },
        config
      );

      dispatch({ type: DELIVERY_CREATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: DELIVERY_CREATE_FAIL,
        payload: message,
      });
    }
  };

// EDIT DELIVERY
export const editDelivery = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELIVERY_EDIT_REQUEST });
    const { data } = await axios.get(`/api/delivery/${id}`);
    dispatch({ type: DELIVERY_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: DELIVERY_EDIT_FAIL,
      payload: message,
    });
  }
};

// UPDATE DELIVERY
export const updateDelivery = (delivery) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELIVERY_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/delivery/${delivery._id}`,
      delivery,
      config
    );

    dispatch({ type: DELIVERY_UPDATE_SUCCESS, payload: data });
    dispatch({ type: DELIVERY_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: DELIVERY_UPDATE_FAIL,
      payload: message,
    });
  }
};
