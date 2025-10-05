import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { authClient } from '@/lib/auth-client'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeftIcon } from 'lucide-react'

export const Route = createFileRoute('/register')({
    component: Page,
})

function Page() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error('As senhas não coincidem')
            return
        }
        const res = await authClient.signUp.email({ email, password, name })
        if (res.data) navigate({ to: '/' })
    }
    return (
        <div className='flex justify-center items-center h-screen bg-black text-foreground flex-col'>
            <h1 className='text-4xl text-white'>Registrar</h1>
            <form className='flex flex-col gap-3 w-80' onSubmit={onSubmit}>
                <Input name='name' placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} />
                <Input name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input name='password' type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input name='confirmPassword' type='password' placeholder='Confirmar Senha' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <div className='flex flex-row gap-2 justify-between'>
                    <Button variant='ghost' type='submit' className='border border-white rounded-md text-white w-[255px] justify-center'>Registrar</Button>
                    <Button variant='ghost'
                        onClick={() => navigate({ to: '/' })} className='border border-white rounded-md text-white w-fit'>
                        <ArrowLeftIcon className='w-4 h-4' />
                    </Button>
                </div>
            </form>

        </div>
    )
}


