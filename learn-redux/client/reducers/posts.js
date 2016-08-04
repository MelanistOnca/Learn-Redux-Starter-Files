// reducers take in two things:

// 1- the action (info about what happened)
// 2- copy of current state

function posts(state=[], action) {
  // console.log('The post will change');
  // console.log(state, action);
  switch(action.type){
    case 'INCREMENT_LIKES' :
    //return updated state
      console.log("Incrementing Likes!");
      const i = action.index;
      return [
        ...state.slice(0,i), //before the one we are updating
        {...state[i], likes: state[i].likes +1}, //the one we are updating
        ...state.slice(i+1), //after the one we are updating
      ]

    //return original state
    default:
      return state;
  }
}
export default posts;
