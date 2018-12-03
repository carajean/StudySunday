import { createStore } from 'redux';
import React, { Component } from 'react';
import pickingStudent, { ADJUST_STORE, COMPLETE } from './actions';

const initialState = {
  hot: [],
  cold: ['Justin', 'Carolyn', 'Joy', 'Rachel'],
  currentStudent: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case RANDOMIZE: {
    //   return {...state, currentStudent = cold[randomNum]}
    // }
    case ADJUST_STORE: {
      const student = action.student;
      const idx = state.cold.indexOf(student);
      const newCold = [
        ...state.cold.slice(0, idx),
        ...state.cold.slice(idx + 1)
      ];
      return { ...state, cold: newCold, currentStudent: student };
    }
    case COMPLETE: {
      return {
        ...state,
        hot: [...state.hot, state.currentStudent],
        currentStudent: ''
      };
    }
    default: {
      return state;
    }
  }
};
const store = createStore(reducer);
export default store;
