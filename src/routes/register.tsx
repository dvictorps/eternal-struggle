import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { authClient } from '@/lib/auth-client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeftIcon } from 'lucide-react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

export const Route = createFileRoute('/register')({
    component: Page,
})

const schema = z
    .object({
        name: z.string().min(1, 'Informe seu nome'),
        email: z.email('Email inválido'),
        password: z.string().min(8, 'Mínimo de 8 caracteres'),
        confirmPassword: z.string().min(8, 'Mínimo de 8 caracteres'),
    })
    .refine((v) => v.password === v.confirmPassword, {
        path: ['confirmPassword'],
        message: 'As senhas não coincidem',
    })

type FormValues = z.infer<typeof schema>

function Page() {
    const navigate = useNavigate()
    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
    })

    const submit = async (values: FormValues) => {
        const res = await authClient.signUp.email({
            email: values.email,
            password: values.password,
            name: values.name,
        })
        if (res.data) {
            navigate({ to: '/' })
            return
        }

        const msg = res.error.message
        if (msg?.toLowerCase().includes('email')) {
            form.setError('email', { message: msg })
            return
        }
        if (msg?.toLowerCase().includes('password')) {
            form.setError('password', { message: msg })
            return
        }
        form.setError('root', { message: msg || 'Falha ao registrar' })
    }

    return (
        <div className='flex justify-center items-center h-screen bg-black text-foreground flex-col'>
            <h1 className='text-4xl text-white mb-4'>Registrar</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(submit)} className='flex flex-col gap-3 w-80'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input placeholder='Seu nome' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder='email@exemplo.com' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Senha</FormLabel>
                                <FormControl>
                                    <Input type='password' placeholder='Senha' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='confirmPassword'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirmar Senha</FormLabel>
                                <FormControl>
                                    <Input type='password' placeholder='Confirmar Senha' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {form.formState.errors.root?.message ? (
                        <p className='text-sm text-red-500'>{form.formState.errors.root.message}</p>
                    ) : null}

                    <div className='flex flex-row gap-2 justify-between mt-2'>
                        <Button variant='ghost' type='submit' className='border border-white rounded-md text-white w-[255px] justify-center'>Registrar</Button>
                        <Button
                            variant='ghost'
                            onClick={() => navigate({ to: '/' })}
                            type='button'
                            className='border border-white rounded-md text-white w-fit'
                        >
                            <ArrowLeftIcon className='w-4 h-4' />
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}


