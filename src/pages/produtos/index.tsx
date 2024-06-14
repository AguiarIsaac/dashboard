import TitlePage from "@/components/TitlePage";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import styles from "./styles.module.css";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const produtoSchema = z.object({
  nome: z.string().min(6, {message: 'O Nome deve conter no mínimo 6 caracteres.'}),
  descricao: z.string().min(6,{message: 'A descrição deve conter no mínimo 6 caracteres.'}),
  preco: z.any(),
  categoria: z.string(),
  imagem: z.any()
})

type ProdutoProps = z.infer<typeof produtoSchema>

export function Produtos() {

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<ProdutoProps>({
    resolver: zodResolver(produtoSchema)
  })

  function handleProduto(data: ProdutoProps) {
    console.log(data)
  }

  return (
    <main>
      <header className={styles.headerProduto}>
        <TitlePage title="Produtos" />
        <Dialog>
          <DialogTrigger>
            <Button>Adicionar Produto</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar Produto</DialogTitle>
              <form onSubmit={handleSubmit(handleProduto)}>
                <div className={styles.lineForm}>
                  <label className={styles.labelForm}>
                    Nome:
                    <Input type="text" {...register('nome', { required: true })}/>
                  </label>

                  <label className={styles.labelForm}>
                    Descrição:
                    <Input type="text" {...register('descricao', {required: true})}/>
                  </label>
                </div>

                <div className={styles.lineForm}>
                  <label className={styles.labelForm}>
                    Categoria:
                    <Input type="text" {...register('categoria', {required: false})}/>
                  </label>

                  <label className={styles.labelForm}>
                    Preço unitário:
                    <Input type="text" {...register('preco', {required: true})}/>
                  </label>
                </div>

                <div className={styles.lineForm}>
                <label className={styles.labelForm}>
                    Imagem:
                    <Input type="file" {...register('imagem', {required: false})}/>
                  </label>
                </div>

                <div className={styles.lineButtons}>
                  <Button type="submit">Adicionar</Button>
                  <Button variant="destructive">Cancelar</Button>
                </div>
              </form>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </header>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nome do produto
              </th>
              <th scope="col" className="px-6 py-3">
                Descrição
              </th>
              <th scope="col" className="px-6 py-3">
                Categoria
              </th>
              <th scope="col" className="px-6 py-3">
                Preço unitário
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Editar
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
