import { SET_ACTIVE_SEGMENT } from './types';
import {
  PayloadAction
} from '../interfaces/dispatchActions';

export const setActiveSegmentIndex = (index: number): PayloadAction => ({
  type: SET_ACTIVE_SEGMENT,
  payload: index
});