import { Button } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from 'lucide-react'


export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {

  return (
    <div className="min-h-screen bg-black justify-center items-center flex text-white flex-col gap-4">
      <h1 className="text-9xl text-shadow-lg text-shadow-purple-500">Eternal Struggle</h1>

      <div className='flex gap-4'>
        <Button variant="ghost"><Link className='text-xl h-fit flex flex-row items-center gap-2' to="/sign-in/$">Login <ArrowRightIcon className='w-4 h-4' /></Link></Button>
        <Button variant="ghost"><a className='text-xl h-fit flex flex-row items-center gap-2 underline' href="/register">Registrar <ArrowRightIcon className='w-4 h-4' /></a></Button>
      </div>


    </div>
  )
}
