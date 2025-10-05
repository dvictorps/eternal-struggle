import { Spinner } from "@/components/ui/spinner"
import { Unauthorized } from "@/components/unauthorized"
import { api } from "convex/_generated/api"
import { useConvexAuth } from "convex/react"
import { useQuery } from "convex/react"
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { AdminSidebar } from "./components/sidebar"

export const Route = createFileRoute('/admin/_layout')({
  component: AdminLayout,
})

function AdminLayout() {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const isAdmin = useQuery(api.admin.meIsAdmin)

  if (!isAdmin || !isAuthenticated) return <div className='w-screen h-screen'><Unauthorized /></div>
  if (isLoading) return <div className='w-screen h-screen'><Spinner className='text-white size-5' /></div>

  return (
    <div className='min-h-screen bg-black text-white'>
      <AdminSidebar />
      <div className='ml-16 p-8'>
        <Outlet />
      </div>
    </div>
  )
}


