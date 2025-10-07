import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_layout/')({
  component: AdminPage,
})

function AdminPage() {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Admin Dashboard</h1>
      <p className='mt-4 text-gray-400'>Welcome to the admin panel</p>
    </div>
  )
}
