// reducers
import { apiSlice, apiTags } from '@/app/apiSlice';

export const logoutUser = async (dispatch) => {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
  dispatch(apiSlice.util.resetApiState());
  dispatch(apiSlice.util.invalidateTags(apiTags));
};
