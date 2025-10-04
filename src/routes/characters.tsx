import { useQuery, useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { Trash2, Zap } from 'lucide-react'
import type { Id } from '../../convex/_generated/dataModel'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/characters')({
    component: Characters,
})

function Characters() {


    const data = useQuery(api.characters.getAll)

    const isLoading = data === undefined



    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading characters...</div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-black text-white flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold'>My Characters</h1>

        </div>
    )
}