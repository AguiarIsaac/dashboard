import useAuth from "@/hooks/useAuth";
import Dashboard from "@/pages/dashboard";
import { Login } from "@/pages/login";
import { Signup } from "@/pages/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// tipar corretamente depois
function Private({Item}: any) {
  const { signed } = useAuth();

  return signed ? <Item/> : <Login />
}

export function RoutesApp() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/home" element={<Private Item={Dashboard} />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}