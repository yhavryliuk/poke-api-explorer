import { createJSONStorage } from "zustand/middleware";
import { z } from "zod";

export const createSafeStorage = <T>(schema: z.ZodType<T>) =>
  createJSONStorage(() => ({
    getItem: (name) => {
      try {
        const raw = localStorage.getItem(name);

        if (!raw) {
          return null;
        }

        const parsed = JSON.parse(raw);

        const validated = schema.safeParse(parsed.state);

        if (!validated.success) {
          return null;
        }

        return JSON.stringify({
          ...parsed,
          state: validated.data,
        });
      } catch {
        return null;
      }
    },

    setItem: (name, value) => localStorage.setItem(name, value),

    removeItem: (name) => localStorage.removeItem(name),
  }));
