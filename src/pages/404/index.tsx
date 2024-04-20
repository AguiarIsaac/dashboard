import { Button } from "@/components/ui/button";

export function ErrorPage404() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      <h1 className="text-[170px] font-semibold">404</h1>
      <p>Ops! Página não encontrada.</p>
      <Button className="bg-sky-400 hover:bg-sky-500">Voltar para a página inicial !</Button>
    </main>
  )
}