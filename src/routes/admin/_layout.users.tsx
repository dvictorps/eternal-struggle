import { Card, CardContent } from '@/components/ui/card'
import { createFileRoute } from '@tanstack/react-router'
import { api } from 'convex/_generated/api'
import { useQuery } from 'convex/react'


export const Route = createFileRoute('/admin/_layout/users')({
    component: RouteComponent,
})

function RouteComponent() {





    return (
        <div className='flex flex-col gap-5 p-5 h-screen'>
            <Card className='flex-1 flex flex-col'>
                <CardContent className='flex-1 flex flex-col'>
                    <div className='mb-4'>
                        <h1 className='text-3xl font-bold'>Users Management</h1>
                        <p className='text-gray-400'>Manage user roles and permissions</p>
                    </div>
                    <div className='flex-1'>

                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
