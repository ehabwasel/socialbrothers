import axios from "axios";
import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
} from "../constants/constants";

export const createPost = (post) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_CREATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        token: `${process.env.REACT_APP_SB_API_KEY}`,
      },
    };

    const { data } = await axios.post(
      `http://178.62.198.162/api/posts`,
      post,
      config
    );
    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: POST_CREATE_FAIL,
      payload: message,
    });
  }
};

export const listPosts = (pageNumber) => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });
    const { data } = await axios.get(
      `http://178.62.198.162/api/posts?page=${pageNumber}`,
      {
        headers: {
          token: `${process.env.REACT_APP_SB_API_KEY}`,
        },
      }
    );

    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
