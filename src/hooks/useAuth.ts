import { AuthContext } from "@/context/Auth";
import { useContext } from "react";

export default function useAuth() {
  const context = useContext(AuthContext)

  return context;
}