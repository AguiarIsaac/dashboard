import { AuthProvider } from "./context/Auth";
import { RoutesApp } from "./routes";

export function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  )
}
