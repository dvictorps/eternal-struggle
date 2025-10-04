import { createFileRoute } from '@tanstack/react-router'
import { authClient } from '../lib/auth-client'
import { useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/sign-in/$')({
  component: Page,
})

function Page() {
  const navigate = useNavigate()
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = String(formData.get('email') ?? '')
    const password = String(formData.get('password') ?? '')
    const res = await authClient.signIn.email({ email, password })
    if (res.data) navigate({ to: '/' })
  }
  return (
    <div className='flex justify-center items-center h-screen bg-black text-foreground'>
      <form className='flex flex-col gap-3 w-80' onSubmit={onSubmit}>
        <input name='email' placeholder='Email' className='px-3 py-2 rounded bg-white/10' />
        <input name='password' type='password' placeholder='Senha' className='px-3 py-2 rounded bg-white/10' />
        <button type='submit' className='px-3 py-2 rounded bg-white text-black'>Entrar</button>
      </form>
    </div>
  )

}