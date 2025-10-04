import { SignIn } from '@clerk/clerk-react'
import { createFileRoute } from '@tanstack/react-router'
import { dark } from '@clerk/themes'

export const Route = createFileRoute('/sign-in/$')({
  component: Page,
})

function Page() {

  return <div className='flex justify-center items-center h-screen bg-black text-foreground'>

    <SignIn appearance={{
      baseTheme: dark,

    }} />
  </div>

}