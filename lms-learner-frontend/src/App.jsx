import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TenantProvider } from "./app/TenantProvider";
import AppRoutes from "./app/routes";

function App() {
  return (
    <AuthProvider>
      <TenantProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TenantProvider>
    </AuthProvider>
  );
}

export default App;