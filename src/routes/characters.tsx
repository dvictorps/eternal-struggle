import { useQuery, useMutation, useConvexAuth } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { ArrowLeftIcon, LogOutIcon, PlusIcon } from 'lucide-react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
// Removed Clerk

export const Route = createFileRoute('/characters')({
    component: Characters,
})

function Characters() {
    const { isAuthenticated, isLoading } = useConvexAuth()
    const { data: session } = authClient.useSession()
    if (isLoading) return null
    if (!isAuthenticated || !session) return <div>Not authenticated</div>
    return <CharactersContent />
}

function CharactersContent() {
    const createCharacter = useMutation(api.characters.create)
    const data = useQuery(api.characters.getAll)
    const isLoading = data === undefined

    if (isLoading) {
        return (
            <div className='min-h-screen bg-black text-white flex flex-col items-center justify-center'>
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
    const navigate = useNavigate()
    async function handleSignOut() {
        await authClient.signOut()
        navigate({ to: '/' })
    }
    return (
        <div className='flex flex-row gap-5 mt-4 justify-between'>
            <Button variant="ghost" className='border border-white rounded-md flex flex-row gap-2 w-[200px] text-xl items-center'>
                <PlusIcon className='w-4 h-4' /> Create Character
            </Button>
            <Button variant="ghost" className='border border-white rounded-md flex flex-row gap-2 w-[100px] text-xl items-center' onClick={() => handleSignOut()}>
                <LogOutIcon className='w-4 h-4' />
            </Button>
        </div>
    )
}