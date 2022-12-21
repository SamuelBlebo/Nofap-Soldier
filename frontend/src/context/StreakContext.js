import { createContext, useReducer } from "react";

export const StreakContext = createContext();

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        streak: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        streak: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        streak: state.workouts.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    streak: null,
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
