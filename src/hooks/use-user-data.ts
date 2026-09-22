import { useCallback, useSyncExternalStore } from "react";
import { getUserData, subscribe, type UserData } from "@/services/user-data";

const serverSnapshot: UserData = { version: 1, attempts: [], stats: {}, days: {} };

/**
 * Subscribes to the stored learner data. During SSR/hydration an empty
 * snapshot is used, then React re-renders with the persisted values.
 */
export function useUserData() {
  return useSyncExternalStore(subscribe, getUserData, () => serverSnapshot);
}

/**
 * Recomputes a derived value whenever stored data changes.
 * `select` must be stable (wrap in useCallback at the call site if needed).
 */
export function useUserDataValue<T>(select: () => T, fallback: T) {
  const getSnapshot = useCallback(() => select(), [select]);
  return useSyncExternalStore(subscribe, getSnapshot, () => fallback);
}
