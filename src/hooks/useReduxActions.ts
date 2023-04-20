import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { authSlice } from '@store/auth/authSlice';

const actions = {
  //   ...actions,
  ...authSlice.actions,
};

export const useReduxActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
