export const authGuard = (role) => Boolean(role && role !== "visitor");
