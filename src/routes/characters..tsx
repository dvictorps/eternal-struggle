import { useQuery, useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { Trash2, Zap } from 'lucide-react'
import type { Id } from '../../convex/_generated/dataModel'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/characters/')({
    component: Characters,
})

function Characters() {
    const characters = useQuery(api.characters.getAll, {}) ?? []
    const createCharacter = useMutation(api.characters.create)
    const updateCharacter = useMutation(api.characters.update)
    const deleteCharacter = useMutation(api.characters.remove)

    const isLoading = characters === undefined

    const handleCreateCharacter = async () => {
        const names = ['Aragorn', 'Legolas', 'Gandalf', 'Frodo', 'Gimli', 'Boromir', 'Samwise']
        const randomName = names[Math.floor(Math.random() * names.length)]

        await createCharacter({
            name: randomName,
            level: 1,
            xp: 0,
            hp: 100,
            mp: 50,
            strength: Math.floor(Math.random() * 10) + 10,
            dexterity: Math.floor(Math.random() * 10) + 10,
            intelligence: Math.floor(Math.random() * 10) + 10,
        })
    }

    const handleLevelUp = async (character: any) => {
        const newLevel = character.level + 1
        const xpGain = 100 * newLevel
        const hpGain = Math.floor(Math.random() * 10) + 10
        const mpGain = Math.floor(Math.random() * 5) + 5

        await updateCharacter({
            id: character._id,
            level: newLevel,
            xp: character.xp + xpGain,
            hp: character.hp + hpGain,
            mp: character.mp + mpGain,
        })
    }

    const handleDelete = async (id: Id<'characters'>) => {
        await deleteCharacter({ id })
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading characters...</div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">Character Management</h1>
                        <p className="text-gray-400">Manage your RPG characters</p>
                    </div>
                    <button
                        onClick={handleCreateCharacter}
                        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50"
                    >
                        + New Character
                    </button>
                </div>

                {characters.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-2xl mb-4">No characters yet</p>
                        <p className="text-gray-500 mb-8">Create your first character to get started!</p>
                        <button
                            onClick={handleCreateCharacter}
                            className="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-purple-500/50"
                        >
                            Create First Character
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {characters.map((character) => (
                            <div
                                key={character._id}
                                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-4">{character.name}</h3>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                            <StatDisplay label="Level" value={character.level} color="text-cyan-400" />
                                            <StatDisplay label="XP" value={character.xp} color="text-yellow-400" />
                                            <StatDisplay label="HP" value={character.hp} color="text-red-400" />
                                            <StatDisplay label="MP" value={character.mp} color="text-blue-400" />
                                        </div>

                                        <div className="grid grid-cols-3 gap-4">
                                            <StatDisplay label="STR" value={character.strength} color="text-orange-400" />
                                            <StatDisplay label="DEX" value={character.dexterity} color="text-green-400" />
                                            <StatDisplay label="INT" value={character.intelligence} color="text-purple-400" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 ml-4">
                                        <button
                                            onClick={() => handleLevelUp(character)}
                                            className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors shadow-lg"
                                            title="Level Up"
                                        >
                                            <Zap className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(character._id)}
                                            className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors shadow-lg"
                                            title="Delete"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

function StatDisplay({ label, value, color }: { label: string; value: number; color: string }) {
    return (
        <div className="bg-slate-700/30 rounded-lg p-3">
            <p className="text-gray-400 text-xs mb-1">{label}</p>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
        </div>
    )
}

