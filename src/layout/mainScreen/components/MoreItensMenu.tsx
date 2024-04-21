import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDown } from 'lucide-react';
import { ReactNode } from 'react';

type childrenProps = {
  children: ReactNode,
  title: string
}

export default ({children,title}: childrenProps) => (
  <Collapsible.Root className="group">
    <Collapsible.Trigger className='flex w-full items-center gap-3'>
      {title}
      <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
    </Collapsible.Trigger>

    <Collapsible.Content className='flex flex-col gap-4 mt-1'>
      {children}
    </Collapsible.Content>
  </Collapsible.Root>
);