import { ReactNode, createContext,useEffect,useState } from "react";

// TIPAGENS
interface ChildrenProps {
  children: ReactNode
}

interface UserProps {
  email: string,
  password: string
}

interface AuthContextProps {
  user: UserProps | null | undefined;
  signed: boolean;
  signin: (credentials: UserProps) => string | null | undefined;
  signup: (credentials: UserProps) => string | null| undefined;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  signed: false,
  signin: () => undefined,
  signup: () => undefined,
  signout: () => {},
});

export function AuthProvider({children}: ChildrenProps) {
  // Estados
  const [user, setUser] = useState<UserProps | null>()

  // PEGAR USUÁRIO DO LOCALSTORAGE E SETAR NO ESTADO
  useEffect(() => {
    const storage = localStorage.getItem('users')

    if(storage) {
      const userStorage = JSON.parse(storage)

      console.log(userStorage[0])
      setUser(userStorage[0])
    }
  },[])

  // LOGIN
  function signin({email, password}: UserProps) {
  // FLUXO SERÁ REFEITO QUANDO FOR DECIDIDO COMO SERÁ O CONTROLE DOS USUÁRIOS. TOKEN será enviado do back e salvo no estado e localstorage
    const storage = localStorage.getItem('users')

    if(storage) {
      const userStorage = JSON.parse(storage)

      const hasUser = userStorage.filter((user: UserProps) => user.email === email)

      if(hasUser.length > 0) {
        const verifyPassword = userStorage.filter((user: UserProps) => user.password === password)
        console.log(verifyPassword)

        if(!verifyPassword) {
          return 'Usuário ou senha inválidos'
        } else {
          setUser({email,password})
        }

      } else {
        return 'usuário não encontrado na base'
      }

    } else {
      return 'nenhum usuário cadastrado na base'
    }

    return null
  }

  // CRIAÇÃO DE USUÁRIO
  function signup({email, password}: UserProps) {
    // FLUXO SERÁ REFEITO QUANDO FOR DECIDIDO COMO SERÁ O CONTROLE DOS USUÁRIOS
    const storage = localStorage.getItem('users')

    if(storage) {
      const userStorage = JSON.parse(storage) 

      const hasUser = userStorage.filter((user: UserProps) => user.email === email)
      if (hasUser.length > 0) {
        return 'Usuário já cadastrado'
      } else {
        const newUser: UserProps[] = [...userStorage, {email,password}]
        localStorage.setItem('users', JSON.stringify(newUser))
      }
    } else {
      let newUser: UserProps[] = [{email,password}]
      localStorage.setItem('users', JSON.stringify(newUser))
    }

    return null
  }

  // LOGOF
  function signout() {
    setUser(null)
    localStorage.removeItem("users");
  }


  return (
    <AuthContext.Provider value={{ user, signed: !!user, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  )
}