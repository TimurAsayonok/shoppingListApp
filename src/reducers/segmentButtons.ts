
import { SET_ACTIVE_SEGMENT } from '../actions/types'; 

const initialState = {
  activeSegment: 0
};

export default function (
  state = initialState,
  action
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
