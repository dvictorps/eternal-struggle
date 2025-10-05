import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Form, FormControl, FormLabel, FormItem, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAlertModal } from '@/hooks/use-alert-modal'
import { zodResolver } from '@hookform/resolvers/zod'
import { createFileRoute } from '@tanstack/react-router'
import { api } from 'convex/_generated/api'
import { Id } from 'convex/_generated/dataModel'
import { useMutation, useQuery } from 'convex/react'
import { TrashIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const Route = createFileRoute('/admin/_layout/class')({
  component: CreateClass,
})

function CreateClass() {
  const { openAlertModal, closeAlertModal } = useAlertModal()

  const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    strength: z.number().min(1, 'Strength is required'),
    dexterity: z.number().min(1, 'Dexterity is required'),
    intelligence: z.number().min(1, 'Intelligence is required'),
    hp: z.number().min(1, 'HP is required'),
    mp: z.number().min(1, 'MP is required'),
  })

  const allClasses = useQuery(api.characterClasses.getAll)
  const createCharacterClass = useMutation(api.characterClasses.create)
  const isLoading = allClasses === undefined

  if (isLoading) {
    return <div>Loading...</div>
  }

  type FormValues = z.infer<typeof schema>

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', strength: undefined, dexterity: undefined, intelligence: undefined, hp: undefined, mp: undefined },
  })

  const submit = async (values: FormValues) => {
    const res = await createCharacterClass({
      name: values.name,
      strength: values.strength,
      dexterity: values.dexterity,
      intelligence: values.intelligence,
      hp: values.hp,
      mp: values.mp,
    })

    if (res) {
      toast.success('Class created successfully')
      form.reset()
    } else {
      toast.error('Failed to create class')
    }
  }

  function handleDeleteCharacterClass(id: Id<"characterClasses">) {
    openAlertModal({
      title: 'Delete Class',
      description: 'Are you sure you want to delete this class?',
      onConfirm: () => deleteCharacterClass({ id }).then(() => {
        closeAlertModal()
        toast.success('Class deleted successfully')
      }).catch(() => {
        toast.error('Failed to delete class')
      }),
    })
  }


  const deleteCharacterClass = useMutation(api.characterClasses.remove)

  return (
    <div className='flex flex-row justify-center items-center max-h-screen gap-5 p-5'>
      <Card className='flex-1 max-w-md'>
        <CardContent className='h-full'>
          <h1 className='text-3xl font-bold'>Create Class</h1>
          <p className='mt-4 text-gray-400'>Create a new class</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)} className='flex flex-col gap-3 w-full'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Name' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='strength'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Strength at start</FormLabel>
                    <FormControl>
                      <Input type='number' placeholder='Strength' {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='dexterity'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dexterity at start</FormLabel>
                    <FormControl>
                      <Input type='number' placeholder='Dexterity' {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='intelligence'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Intelligence at start</FormLabel>
                    <FormControl>
                      <Input type='number' placeholder='Intelligence' {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='hp'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>HP at start</FormLabel>
                    <FormControl>
                      <Input type='number' placeholder='HP' {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='mp'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>MP at start</FormLabel>
                    <FormControl>
                      <Input type='number' placeholder='MP' {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type='submit' variant='outline'>Create</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card className='flex-1 max-w-md'>
        <CardContent className='h-full'>
          <h1 className='text-3xl font-bold'>Classes</h1>
          <p className=' text-gray-400 mb-1'>List of classes</p>
          <div className='flex flex-col gap-3'>
            {allClasses && allClasses.length > 0 ? (
              allClasses?.map((characterClass) => (
                <div key={characterClass._id} className='flex flex-row gap-3 border border-[#2E2E2E] rounded-md px-4 py-2 justify-between'>
                  <h1 className='text-xl'>{characterClass.name}</h1>
                  <button onClick={() => handleDeleteCharacterClass(characterClass._id)}> <TrashIcon className='w-5 h-5 text-white' /></button>
                </div>
              ))
            ) : (
              <div className='flex flex-row w-full justify-center items-center'>
                <h1 className='text-xl'>No classes found</h1>
              </div>
            )}

          </div>
        </CardContent>
      </Card>
    </div>
  )
}
