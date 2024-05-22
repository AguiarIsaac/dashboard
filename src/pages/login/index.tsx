import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from './styles.module.css'
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const loginSchema = z.object({
  email: z.string().email('Email inválido.'),
  password: z.string().min(6, {message: 'Senha deve conter no mínimo 6 caracteres.'})
})

type LoginProps = z.infer<typeof loginSchema>

export function Login() {

  const [errorLogin, setErrorLogin] = useState('')

  const {signin} = useAuth()
  const navigate = useNavigate()

  const {
    register, 
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<LoginProps>({
    resolver: zodResolver(loginSchema)
  })

  function handleLogin(data: LoginProps) {
    const returnLogin = signin(data)

    console.log(returnLogin)
    if(returnLogin != null) {
      setErrorLogin(returnLogin)
    } else {
      reset()
      navigate("/home");
    }

  }

  // TESTES PARA A RAD

  // useEffect(() => {
  //   const date = new Date()

  //   const year = date.getFullYear()
  //   const month: any = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  //   const day = (date.getDate() + 1) < 10 ? `0${date.getDate() + 1}` : date.getDate() + 1

  //   const dateFormated = `${year}-${month}-${day}`


  //   function getDays(currentMonth: any, currentYear: any) {
  //     currentMonth--


  //     let date = new Date(currentYear, currentMonth, 1)

  //     var weekDays = []

  //     while(date.getMonth() === currentMonth) {
        
  //       const dayString = date.toLocaleDateString('pt-BR', {weekday: "short"})
  //       const dayNumber = date.getDate() 
  //       const formatedDay = {
  //         dayNumber,
  //         dayString
  //       }

  //       weekDays.push(formatedDay) 
  //       date.setDate(date.getDate() + 1)
  //     }

  //     return weekDays
  //   }

  //   getDays(5,2024)


  // },[])
  
  return (
    <main className={styles.mainLoginElement}>

      <section className={styles.sectionLoginBackground}>
        <div className="logo">
          <img src="/logo.webp" alt="Logomarca da empresa" />
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sint accusantium, vitae odit dolorum delectus molestias tenetur non praesentium quaerat ea accusamus, odio veritatis velit quam, ducimus commodi expedita! Commodi.
          </p>
        </div>
      </section>

      <section className={styles.sectionLoginForm}>
        <h1>Entre com seu Usuário</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <label>
            Email:
            <Input
              placeholder="email@email.com" 
              type="email" 
              {...register('email', {required: true})}
            />
            {errors.email && <span style={{color:'#dc2626', fontSize:'14px'}}>{errors.email.message}</span>}
            {errorLogin.length > 0 && <span style={{color:'#dc2626', fontSize:'14px'}}>{errorLogin}</span>}
          </label>

          <label>
            Senha:
            <Input 
              type="password" 
              {...register('password', {required: true})}
            />
            {errors.password && <span style={{color:'#dc2626', fontSize:'14px'}}>{errors.password.message}</span>}
          </label>

          <Button type="submit" title="Entrar">Entrar</Button>        
        </form>

        <footer>
          <span><a href="/signup" title="Criar usuário"> Criar usuário</a> | <a href="#" title="link">Sistema</a> | <a href="#" title="link">Ajuda</a> | <a href="#" title="link">Versão 1.0</a></span>
        </footer>
      </section>
    </main>
  )
}