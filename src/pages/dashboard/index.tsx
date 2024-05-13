import useAuth from "@/hooks/useAuth"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {
  const { signout } = useAuth()
  const navigate = useNavigate()

  return (
    <h1>
      Hello, rota privada!
      <button type="button" onClick={() => {signout(), navigate('/')}}>sair</button>
    </h1>
  )
}