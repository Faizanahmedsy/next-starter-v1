import create from "zustand";

interface State {
  appleEmail: string;
}

type SetState = (fn: (state: State) => State, replace?: boolean) => void;

// initial state
const initialState: State = {
  appleEmail: "",
};

// Define your Zustand store
const globalState = (set: SetState) => ({
  ...initialState,

  setAppleEmail: (newAppleEmail: string) =>
    set((state) => ({ appleEmail: newAppleEmail })),
});

const useGlobalState = create(globalState);

export default useGlobalState;
