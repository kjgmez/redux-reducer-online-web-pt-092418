export function managePresents(state, action){
  debugger;
  switch (action.type) {
    case "INCREASE":
      return {numberOfPresents: state.numberOfPresents +1 };
    default:
      return state;
  }
}
