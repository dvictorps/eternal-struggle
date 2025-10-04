import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { authClient } from '@/lib/auth-client'

export const Route = createFileRoute('/register')({
    component: Page,
})

function Page() {
    const navigate = useNavigate()
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = String(form.get('email') ?? '')
        const name = String(form.get('name') ?? '')
        const password = String(form.get('password') ?? '')
        const res = await authClient.signUp.email({ email, password, name: String(form.get('name') ?? '') })
        if (res.data) navigate({ to: '/' })
    }
    return (
        <div className='flex justify-center items-center h-screen bg-black text-foreground'>
            <form className='flex flex-col gap-3 w-80' onSubmit={onSubmit}>
                <input name='name' placeholder='Nome' className='px-3 py-2 rounded bg-white/10' />
                <input name='email' placeholder='Email' className='px-3 py-2 rounded bg-white/10' />
                <input name='password' type='password' placeholder='Senha' className='px-3 py-2 rounded bg-white/10' />
                <button type='submit' className='px-3 py-2 rounded bg-white text-black'>Registrar</button>
            </form>
        </div>
    )
}


