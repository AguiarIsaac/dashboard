import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuth from "@/hooks/useAuth";

export function DropDownMenu() {

  const { signout } = useAuth()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/AguiarIsaac.png" />
          <AvatarFallback>IA</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Perfil</DropdownMenuItem>
        <DropdownMenuItem>
        {/* Dessa forma vou corrigir a questão de cliclar em qualquer lugar e executar a funcção. colocando width de 100% */}
          <button style={{width:'100%'}} type="button" onClick={() => {signout()}}>Sair</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
