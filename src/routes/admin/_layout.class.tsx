import { Card, CardContent } from '@/components/ui/card'
import { useAlertModal } from '@/hooks/use-alert-modal'
import { createFileRoute } from '@tanstack/react-router'
import { api } from 'convex/_generated/api'
import { Id, DataModel } from 'convex/_generated/dataModel'
import { useMutation, useQuery } from 'convex/react'
import { PencilIcon, TrashIcon } from 'lucide-react'
import { toast } from 'sonner'
import { ClassFormValues, ClassForm } from '@/components/admin/class-form'
import { useModal } from '@/hooks/use-modal'


export const Route = createFileRoute('/admin/_layout/class')({
  component: CreateClass,
})

function CreateClass() {
  const { openAlertModal, closeAlertModal } = useAlertModal()
  const allClasses = useQuery(api.characterClasses.getAll)
  const createCharacterClass = useMutation(api.characterClasses.create)
  const deleteCharacterClass = useMutation(api.characterClasses.remove)

  const isLoading = allClasses === undefined

  if (isLoading) {
    return <div>Loading...</div>
  }

  const handleSubmit = async (values: ClassFormValues) => {
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

  return (

    <div className='flex flex-row justify-center items-center max-h-screen gap-5 p-5'>
      <Card className='flex-1 max-w-md'>
        <CardContent className='h-full'>
          <ClassForm onSubmit={handleSubmit} />
        </CardContent>
      </Card>

      <Card className='flex-1 max-w-md'>
        <CardContent className='h-full'>
          <h1 className='text-3xl font-bold'>Classes</h1>
          <p className=' text-gray-400 mb-1'>List of classes</p>
          <div className='flex flex-col gap-3'>
            {allClasses && allClasses.length > 0 ? (
              allClasses?.map((characterClass) => (
                <ClassRow key={characterClass._id} characterClass={characterClass} />
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

function ClassRow({ characterClass }: { characterClass: DataModel["characterClasses"]["document"] }) {
  const { openAlertModal, closeAlertModal } = useAlertModal()
  const { openModal, closeModal } = useModal()
  const deleteCharacterClass = useMutation(api.characterClasses.remove)
  const updateCharacterClass = useMutation(api.characterClasses.update)

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


  function handleEditCharacterClass(id: Id<"characterClasses">) {
    const handleSubmit = async (values: ClassFormValues) => {
      const res = await updateCharacterClass({
        id,
        name: values.name,
        strength: values.strength,
        dexterity: values.dexterity,
        intelligence: values.intelligence,
        hp: values.hp,
        mp: values.mp,
      })

      if (res) {
        toast.success('Class updated successfully')
        closeModal()
      } else {
        toast.error('Failed to update class')
      }
    }
    openModal({
      title: 'Edit Class',
      description: 'Edit the class',
      content: <ClassForm onSubmit={handleSubmit} isEdit={true} defaultValues={characterClass} />,
    })
  }

  return (
    <div className='flex flex-row gap-3 border border-[#2E2E2E] rounded-md px-4 py-2 justify-between'>
      <h1 className='text-xl'>{characterClass.name}</h1>
      <div className='flex flex-row gap-3'>
        <button onClick={() => handleEditCharacterClass(characterClass._id)}>
          <PencilIcon className='w-5 h-5 text-white hover:text-blue-950 transition-colors' />
        </button>
        <button onClick={() => handleDeleteCharacterClass(characterClass._id)}>
          <TrashIcon className='w-5 h-5 text-white hover:text-red-950 transition-colors' />
        </button>
      </div>
    </div>
  )
}
