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
  signin: (credentials: UserProps) => void;
  signup: (credentials: UserProps) => void;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  signed: false,
  signin: () => {},
  signup: () => {},
  signout: () => {},
});

export function AuthProvider({children}: ChildrenProps) {
  // Estados
  const [user, setUser] = useState<UserProps | null>()

  // verifico se tenho usuário e token válido
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

  // LOGIN
  function signin({email, password}: UserProps) {

    // REFAZER O FLUXO TBM
    // const usersStorage = JSON.parse(localStorage.getItem("users_db") ?? "[]")

    console.log({email,password})
    setUser({email,password})

    // const hasUser = usersStorage.filter((user:UserProps) => user.email === email)

    // if(hasUser) {
    //   if (hasUser[0].email === email && hasUser[0].password === password) {
    //     const token = Math.random().toString(36).substring(2);
    //     localStorage.setItem("user_token", JSON.stringify({email, token}))

    //     setUser({email, password})

    //     return;
    //   } else {
    //     return 'Email ou senha errado'
    //   }
    // } else {
    //   return "Usuário não cadastrado"
    // }
  }

  // CRIAÇÃO DE USUÁRIO
  function signup({email, password}: UserProps) {
    // REFAZER FLUXO, NÃO TÁ FUNCIONANDO!
    
    console.log({email,password})
    // const usersStorage = JSON.parse(localStorage.getItem("users_db") ?? "[]")

    // const hasUser = usersStorage.filter((user:UserProps) => user.email === email)    
    // if(hasUser) {
    //   return 'Já tem uma conta com esse E-mail';
    // }

    // let newUser;

    // if(usersStorage) {
    //   newUser = [...usersStorage, {email, password}]
    // } else {
    //   const user = {
    //     email,
    //     password
    //   }

    //   console.log('User entrando no array: ' + user)
    //   newUser = [user]
    // }

    // localStorage.setItem("users_bd", JSON.stringify(newUser));

    // return;
  }

  // LOGOF
  function signout() {
    setUser(null)

    localStorage.removeItem("user_token");
  }


  return (
    <AuthContext.Provider value={{ user, signed: !!user, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  )
}