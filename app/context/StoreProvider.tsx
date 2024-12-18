"use client";
import React, { useRef } from "react";
import { CommonStoreApi, StoreContext } from "./Context";
import { createCommonStore, initCommonStore } from "../store/common";

interface IStoreProvider {
  children?: React.ReactNode;
}

export const StoreProvider: React.FC<IStoreProvider> = (props) => {
  const { children } = props;
  const commonStoreRef = useRef<CommonStoreApi>(null);
  if (!commonStoreRef.current) {
    commonStoreRef.current = createCommonStore(initCommonStore());
  }
  return (
    <StoreContext.Provider value={{ commonStore: commonStoreRef.current }}>
      {children}
    </StoreContext.Provider>
  );
};
