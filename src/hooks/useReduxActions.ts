import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const actions = {
  //   ...actions,
};

export const useReduxActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
