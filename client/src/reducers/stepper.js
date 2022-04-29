import { GET_STEPPER } from "../constants/types";

const initialState = {
  steps: []
}

const stepper = (state = initialState, actions) => {
  // console.log('state', actions.payload)
  switch (actions.type) {
    case GET_STEPPER:
      return {
        ...state,
        steps: actions.payload
      };

    default:
      return state
  }
}

export default stepper;