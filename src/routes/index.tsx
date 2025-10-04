import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {


  return (
    <div className="min-h-screen bg-black justify-center items-center flex text-white">
      <h1 className="text-9xl font-bold">Eternal Struggle</h1>

    </div>
  )
}
