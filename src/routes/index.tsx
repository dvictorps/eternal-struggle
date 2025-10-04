import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from 'lucide-react'


export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {


  const { user, isSignedIn } = useUser()

  return (
    <div className="min-h-screen bg-black justify-center items-center flex text-white flex-col gap-4">
      <h1 className="text-9xl text-shadow-lg text-shadow-purple-500">Eternal Struggle</h1>

      {isSignedIn ?
        <div className='flex flex-col gap-10 items-center'>
          <span>Welcome, {user?.firstName} </span>
          <Button variant="ghost" > <Link className='text-2xl h-fit flex-row gap-2 flex items-center' to="/characters">My characters <ArrowRightIcon className='w-5 h-5' /> </Link></Button>
        </div>
        : <Button variant="ghost" > <Link className='text-xl h-fit flex flex-row items-center gap-2' to="/sign-in/$">Login <ArrowRightIcon className='w-4 h-4' /> </Link></Button>}


    </div>
  )
}
