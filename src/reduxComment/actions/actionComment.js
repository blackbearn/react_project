/**
 * Created by Administrator on 2017/6/5.
 */
import * as actionTypes from './actionTypes';

export const initComments = (comments = []) => {
  return { type: actionTypes.INIT_COMMENT, comments };
};

export const addComment = (comment = {}) => {
  return { type: actionTypes.ADD_COMMENT, comment };
};

export const deleteComment = (commentIndex = '') => {
  return { type: actionTypes.DELETE_COMMENT, commentIndex };
};
