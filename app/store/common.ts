import { create } from "zustand";

import { immer } from "zustand/middleware/immer";

type Action = {
  setName: (name: string) => void;
};

interface State {
  name: string;
}

export type CommonStore = Action & State;

export const initCommonStore = (): State => {
  return { name: "Demo" };
};

export const defaultInitState: State = {
  name: "demo",
};

export const createCommonStore = (initState: State = defaultInitState) => {
  return create<State & Action>()(
    immer((set) => ({
      ...initState,
      setName: (name) =>
        set((state) => {
          state.name = name;
        }),
    }))
  );
};
