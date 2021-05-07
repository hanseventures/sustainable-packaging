export default (previousState, action) => {
  console.log(`previousState: action:`, previousState, action)
  switch (action.type) {
    case "RESET":
      return {};

    case "UPDATE_KEY_VALUES":
      return {
        ...previousState,
        ...action.value
      };

    default:
      return previousState;
  }
};
