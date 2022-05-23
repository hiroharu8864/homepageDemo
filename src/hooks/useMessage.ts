import { useCallback } from "react";

/**
 * use toast of material UI
 */
export const useMassage = () => {
  const showMessage = useCallback(() => {}, []);
  return { showMessage };
};
