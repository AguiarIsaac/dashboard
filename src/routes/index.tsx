import useAuth from "@/hooks/useAuth";
import { MainScreen } from "@/layout/mainScreen/MainScreen";
import { ErrorPage404 } from "@/pages/404";
import { Create } from "@/pages/create";
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
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage404 />} />
        <Route path="/" element={<Private Item={MainScreen}/>}>
          <Route path="home" element={<Private Item={Dashboard} />} />
          <Route path="create" element={<Private Item={Create} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}