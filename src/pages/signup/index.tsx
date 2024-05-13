import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from './styles.module.css'
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupSchema = z.object({
  email: z.string().email('Email inválido.'),
  password: z.string().min(6, {message: 'Senha deve conter no mínimo 6 caracteres.'}),
  confirmPassword: z.string().min(6, {message: 'Senha deve conter no mínimo 6 caracteres.'}),
  // confirmPassword: z.string().refine((data: any) => data.password === data.confirmPassword, {
  //   message: 'As senhas não coincidem.',
  // }),
});

type SignupProps = z.infer<typeof SignupSchema>

export function Signup() {

  const [errorPersonalized, setErrorPersonalized] = useState('')

  const { signup } = useAuth()
  const navigate = useNavigate()

  const {
    register, 
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<SignupProps>({
    resolver: zodResolver(SignupSchema)
  })

  function handleLogin(data: SignupProps) {

    if(data.password === data.confirmPassword) {
      signup({email: data.email, password:data.password})
      reset()
      navigate('/login')
    } else {
      setErrorPersonalized("As senhas não coincidem")
    }
  }
  
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
        <h1>Criar usuário</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <label>
            Email:
            <Input
              placeholder="email@email.com" 
              type="email" 
              {...register('email', {required: true})}
            />
            {errors.email && <span style={{color:'#dc2626', fontSize:'14px'}}>{errors.email.message}</span>}
          </label>

          <label>
            Senha:
            <Input 
              type="password" 
              {...register('password', {required: true})}
            />
            {errors.password && <span style={{color:'#dc2626', fontSize:'14px'}}>{errors.password.message}</span>}
          </label>

          <label>
            Confirmar senha:
            <Input 
              type="password" 
              {...register('confirmPassword', {required: true})}
            />
            {errors.confirmPassword && <span style={{color:'#dc2626', fontSize:'14px'}}>{errors.confirmPassword.message}<br/></span>}
            {errorPersonalized.length > 0 &&<span style={{color:'#dc2626', fontSize:'14px'}}>{errorPersonalized}.</span>}
          </label>

          <Button type="submit" title="Entrar">Entrar</Button>        
        </form>

        <footer>
          <span><a href="/login" title="login">Login</a> | <a href="#" title="link">Sistema</a> | <a href="#" title="link">Ajuda</a> | <a href="#" title="link">Versão 1.0</a></span>
        </footer>
      </section>
    </main>
  )
}