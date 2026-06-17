import { createContext, useMemo, useState } from "react";

export const TenantContext = createContext();

const defaultTenant = {
  id: "demo-school",
  name: "Demo School",
  logo: "/logo.png",
  theme: "light",
  settings: {
    timezone: "UTC",
  },
};

export const TenantProvider = ({ children }) => {
  const [tenant, setTenant] = useState(defaultTenant);

  const value = useMemo(() => ({ tenant, setTenant }), [tenant]);

  return <TenantContext.Provider value={value}>{children}</TenantContext.Provider>;
};
