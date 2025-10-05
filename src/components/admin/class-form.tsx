import { Button } from '@/components/ui/button'
import { Form, FormControl, FormLabel, FormItem, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

const classSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  strength: z.number().min(1, 'Strength is required'),
  dexterity: z.number().min(1, 'Dexterity is required'),
  intelligence: z.number().min(1, 'Intelligence is required'),
  hp: z.number().min(1, 'HP is required'),
  mp: z.number().min(1, 'MP is required'),
})

export type ClassFormValues = z.infer<typeof classSchema>

interface ClassFormProps {
  onSubmit: (values: ClassFormValues) => Promise<void>
  isEdit?: boolean
  defaultValues?: ClassFormValues
}

export function ClassForm({ onSubmit, isEdit = false, defaultValues }: ClassFormProps) {
  const form = useForm<ClassFormValues>({
    resolver: zodResolver(classSchema),
    defaultValues: defaultValues || {
      name: '',
      strength: undefined,
      dexterity: undefined,
      intelligence: undefined,
      hp: undefined,
      mp: undefined,
    },
  })

  const handleSubmit = async (values: ClassFormValues) => {
    await onSubmit(values)
    form.reset()
  }

  return (
    <>
      {!isEdit && (
        <>
          <h1 className='text-3xl font-bold'>Create Class</h1>
          <p className='mt-4 text-gray-400'>Create a new class</p>
        </>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='flex flex-col gap-3 w-full'>
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
                  <Input
                    type='number'
                    placeholder='Strength'
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
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
                  <Input
                    type='number'
                    placeholder='Dexterity'
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
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
                  <Input
                    type='number'
                    placeholder='Intelligence'
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
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
                  <Input
                    type='number'
                    placeholder='HP'
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
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
                  <Input
                    type='number'
                    placeholder='MP'
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type='submit' variant='outline'>{isEdit ? 'Update' : 'Create'}</Button>
        </form>
      </Form>
    </>
  )
}
