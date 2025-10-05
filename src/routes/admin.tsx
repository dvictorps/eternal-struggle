import { createFileRoute } from '@tanstack/react-router'
import { api } from 'convex/_generated/api'
import { useConvexAuth, useQuery } from 'convex/react'

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
})

function RouteComponent() {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const isAdmin = useQuery(api.admin.meIsAdmin)


  if (isLoading) return <div>Loading...</div>
  if (!isAuthenticated) return <div>Not authenticated</div>


  return <div>
    {isAdmin ? <div>Admin</div> : <div>Not admin</div>}

  </div>
}
