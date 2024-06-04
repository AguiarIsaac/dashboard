import useAuth from "@/hooks/useAuth";
import { MainScreen } from "@/layout/mainScreen/MainScreen";
import { ErrorPage404 } from "@/pages/404";
import { Estoque } from "@/pages/estoque";
import Dashboard from "@/pages/dashboard";
import { Login } from "@/pages/login";
import { Signup } from "@/pages/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Produtos } from "@/pages/produtos";

// tipar corretamente depois
function Private({Item}: any) {
  const { signed } = useAuth();

  return signed ? <Item/> : <Login />
}

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage404 />} />
        <Route path="/" element={<Private Item={MainScreen}/>}>
          <Route path="dashboard" element={<Private Item={Dashboard} />} />
          <Route path="estoque" element={<Private Item={Estoque} />} />
          <Route path="produtos" element={<Private Item={Produtos} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}