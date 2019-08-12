import { SET_ACTIVE_SEGMENT } from './types';

export const setActiveSegmentIndex = (index) => ({
  type: SET_ACTIVE_SEGMENT,
  payload: index
});