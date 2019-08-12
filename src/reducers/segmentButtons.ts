
import { SET_ACTIVE_SEGMENT } from '../actions/types';
import { SegmentButtonsState } from '../interfaces/reducers';

const initialState: SegmentButtonsState = {
  activeSegment: 0
};

export default function (
  state = initialState,
  action: any
) {
  const { type, payload } = action;

  switch (type) {
    case SET_ACTIVE_SEGMENT: {
      return {
        activeSegment: payload
      };
    }

    default:
      return state;
  }
};
