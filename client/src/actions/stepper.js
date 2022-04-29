import axios from "axios";
import { GET_STEPPER } from "../constants/types";

// export const fetchPosts = () => dispatch => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts =>
//       dispatch({
//         type: FETCH_POSTS,
//         payload: posts
//       })
//     );
// };

export const getStepper = () => dispatch => {
  axios.get("/stepper").
    then(res => res.data)
    .then(getLists =>
      dispatch({
        type: GET_STEPPER,
        payload: getLists
      }))
  // console.log('state', req)

}