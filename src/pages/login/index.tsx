import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from './styles.module.css'

const loginSchema = z.object({
  email: z.string().email('Email inválido.'),
  password: z.string().min(6, {message: 'Senha deve conter no mínimo 6 caracteres.'})
})

type LoginProps = z.infer<typeof loginSchema>

export function Login() {

  const {
    register, 
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<LoginProps>({
    resolver: zodResolver(loginSchema)
  })

  function handleLogin(data: LoginProps) {
    console.log(data)
    reset()
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
          <span><a href="#" title="link">Sistema</a> | <a href="#" title="link">Ajuda</a> | <a href="#" title="link">Versão 1.0</a></span>
        </footer>
      </section>
    </main>
  )
}