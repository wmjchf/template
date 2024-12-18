import { createContext } from "react";
import { createCommonStore } from "../store/common";

export type CommonStoreApi = ReturnType<typeof createCommonStore>;

export interface IContext {
  commonStore: CommonStoreApi;
}

export const StoreContext = createContext<IContext | undefined>(undefined);
