import { useEffect } from "react";

/**
 * Custom hook to handle a timeout effect
 * @param {Object} params
 * @param {() => void} params.callback - Function to be called after the timeout
 * @param {number} [params.duration=100] - Duration for the timeout in milliseconds
 * @param {import('react').DependencyList} [params.deps=[]] - Dependency array to trigger the effect
 */
export function useTimeOut({ callback, duration = 200, deps = [] }) {
  useEffect(() => {
    const timeout = setTimeout(callback, duration);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
