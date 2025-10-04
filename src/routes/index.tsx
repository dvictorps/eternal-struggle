import { createFileRoute } from '@tanstack/react-router'
import { useQuery, useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { Swords, Users, Plus, TrendingUp } from 'lucide-react'

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
