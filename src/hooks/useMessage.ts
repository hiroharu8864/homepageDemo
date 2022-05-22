import { useCallback } from "react";

export const useMassage = () => {
  const showMessage = useCallback(() => {}, []);
  return { showMessage };
};
