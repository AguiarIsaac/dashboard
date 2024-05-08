import { ReactNode, createContext,useEffect,useState } from "react";

// TIPAGENS
interface ChildrenProps {
  children: ReactNode
}

interface UserProps {
  email: string,
  password: string
}

export const AuthContext = createContext({});

export function AuthProvider({children}: ChildrenProps) {
  const [user, setUser] = useState<UserProps>()

  useEffect(() => {
    const userToken = localStorage.getItem("user_token")
    const usersStorage = localStorage.getItem("users_bd")

    if(userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter((user: UserProps) => {
        user.email === JSON.parse(userToken).email
      })

      if(hasUser) setUser(hasUser[0])
    }
  },[])

  function sign({email, password}: UserProps) {
    const usersStorage = JSON.parse(localStorage.getItem("users_db") ?? "[]")

    const hasUser = usersStorage.filter((user:UserProps) => user.email === email)

    if(hasUser) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({email, token}))

        setUser({email, password})

        return;
      } else {
        return 'Email ou senha errado'
      }
    } else {
      return "Usuário não cadastrado"
    }
  }
}