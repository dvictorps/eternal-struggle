import { useQuery, useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { ArrowLeftIcon, PlusIcon } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
// Removed Clerk

export const Route = createFileRoute('/characters')({
    component: Characters,
})

function Characters() {

    // const user = undefined

    const createCharacter = useMutation(api.characters.create)

    const data = useQuery(api.characters.getAll)

    const isLoading = data === undefined


    // function handleCreateCharacter() {
    //     if (!user) return
    //     createCharacter({
    //         name: 'New Character',
    //         level: 1,
    //         xp: 0,
    //         hp: 100,
    //         mp: 100,
    //         strength: 10,
    //         dexterity: 10,
    //         intelligence: 10,
    //         profileId: user.id,
    //         currentLocation: 'Start',
    //     })
    // }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading characters...</div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-black text-white flex flex-col items-center justify-center'>

            <div className='border border-white rounded-md p-2 w-[25vw] h-[80vh] justify-start flex flex-col items-center'>
                <h1 className='text-4xl'>My Characters</h1>
                <div className='border border-white rounded-md w-[90%] h-[85%]'>

                </div>
                <ButtonRow />
            </div>

        </div>
    )
}

function ButtonRow() {
    return (
        <div className='flex flex-row gap-2 mt-4'>
            <Button variant="ghost" className='border border-white rounded-md flex flex-row gap-2 w-[200px] text-xl items-center'>
                <PlusIcon className='w-4 h-4' /> Create Character
            </Button>
            <Button variant="ghost" className='border border-white rounded-md flex flex-row gap-2 w-[200px] text-xl items-center'>
                <ArrowLeftIcon className='w-4 h-4' /> Back to menu
            </Button>
        </div>
    )
}