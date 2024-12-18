import { useContext } from "react";

import { useStore } from "zustand";
import { StoreContext } from "./Context";
import { CommonStore } from "../store/common";

export const useCommonStore = <T>(selector: (store: CommonStore) => T): T => {
  const storeContext = useContext(StoreContext);

  if (!storeContext?.commonStore) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(storeContext?.commonStore, selector);
};
