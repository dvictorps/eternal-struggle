import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import type { DataModel, Id } from "convex/_generated/dataModel";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { LogOutIcon, PlayIcon, PlusIcon, TrashIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { useAlertModal } from "@/hooks/use-alert-modal";
import { useModal } from "@/hooks/use-modal";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { api } from "../../convex/_generated/api";
import { CHARACTER_CLASSES, type ClassId } from "../../gameData/classes";

export const Route = createFileRoute("/characters")({
	component: Characters,
});

type CharacterData = DataModel["characters"]["document"];

function Characters() {
	const { isAuthenticated, isLoading } = useConvexAuth();
	const navigate = useNavigate();

	if (isLoading) return null;
	if (!isAuthenticated) return navigate({ to: "/" });

	return <CharactersContent />;
}

function CharactersContent() {
	const [selectedCharacter, setSelectedCharacter] =
		useState<CharacterData | null>(null);

	const { data: session } = authClient.useSession();
	const data = useQuery(api.characters.getAllByProfileId, {
		profileId: session?.user.id ?? "",
	});
	const [isLoadingLogout, setIsLoadingLogout] = useState(false);
	const navigate = useNavigate();

	async function handleSignOut() {
		setIsLoadingLogout(true);
		await authClient.signOut();
		navigate({ to: "/" });
	}

	if (!session) return null;

	const isLoading = data === undefined;

	if (isLoading) {
		return (
			<div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
				<div className="text-white text-xl">Loading characters...</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
			<div className="border border-white rounded-md p-2 w-[25vw] h-[80vh] justify-start flex flex-col items-center">
				<h1 className="text-4xl">My Characters</h1>
				<div className="border border-white rounded-md w-[90%] h-[85%] p-2 flex flex-col gap-2 overflow-y-auto">
					{data?.map((character) => (
						<CharacterRow
							key={character._id}
							character={character}
							selectedCharacter={selectedCharacter}
							setSelectedCharacter={setSelectedCharacter}
						/>
					))}
				</div>
				<ButtonRow
					selectedCharacter={selectedCharacter}
					delCallback={() => setSelectedCharacter(null)}
				/>
			</div>
			<div className="bottom-0 right-0 absolute m-4">
				<button
					type="button"
					className="border border-white rounded-md flex flex-row gap-2 w-[100px] text-xl items-center p-1 hover:bg-white/10 justify-center"
					onClick={() => handleSignOut()}
				>
					{isLoadingLogout ? (
						<Spinner className="w-5 h-5" />
					) : (
						<>
							<LogOutIcon className="w-5 h-5" />
							Logout
						</>
					)}
				</button>
			</div>
		</div>
	);
}

function ButtonRow({
	selectedCharacter,
	delCallback,
}: {
	selectedCharacter: CharacterData | null;
	delCallback: () => void;
}) {
	const { openModal, closeModal } = useModal();
	const { openAlertModal } = useAlertModal();
	const deleteCharacter = useMutation(api.characters.remove);

	async function handleCreateCharacter() {
		openModal({
			title: "Create Character",
			description: "Create a new character",
			content: <CreateCharacterModal closeModal={closeModal} />,
		});
	}

	async function handleDeleteCharacter() {
		if (!selectedCharacter) return;
		openAlertModal({
			title: "Delete Character",
			description:
				"Are you sure you want to delete this character? This action is irreversible.",
			onConfirm: () => {
				deleteCharacter({ id: selectedCharacter._id }).then(() => {
					toast.success("Character deleted successfully");
					delCallback();
				});
			},
		});
	}

	return (
		<div className="flex flex-col gap-2">
			<div className="flex flex-row gap-2 mt-4 justify-between">
				<Button
					variant="game"
					onClick={handleCreateCharacter}
					className="w-[200px]"
				>
					<PlusIcon className="w-4 h-4" /> Create Character
				</Button>
				{selectedCharacter && (
					<Button variant="game" onClick={handleDeleteCharacter}>
						<TrashIcon className="w-5 h-5" /> Delete character
					</Button>
				)}
			</div>
			{selectedCharacter && (
				<Button variant="game">
					<PlayIcon className="w-5 h-5" /> Play
				</Button>
			)}
		</div>
	);
}

function CreateCharacterModal({ closeModal }: { closeModal: () => void }) {
	const [isLoading, setIsLoading] = useState(false);
	const createCharacter = useMutation(api.characters.create);

	const { data: session } = authClient.useSession();

	const schema = z.object({
		name: z.string().min(1, "Name is required"),
		class: z.string().min(1, "Class is required"),
	});

	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: "",
			class: "",
		},
	});

	if (!session) return null;

	const handleSubmit = async (values: z.infer<typeof schema>) => {
		const selectedClass = CHARACTER_CLASSES[values.class as ClassId];

		if (!selectedClass) return null;
		setIsLoading(true);
		await createCharacter({
			name: values.name,
			characterClass: selectedClass.id,
			level: 1,
			xp: 0,
			hp: selectedClass.hp,
			mp: 50,
			strength: selectedClass.strength,
			dexterity: selectedClass.dexterity,
			intelligence: selectedClass.intelligence,
			profileId: session.user.id,
			currentLocation: "Starting Area",
		}).then(() => {
			toast.success("Character created successfully");
		});
		form.reset();
		closeModal();
	};

	const selectOptions = Object.values(CHARACTER_CLASSES).map((cls) => ({
		label: cls.name,
		value: cls.id,
	}));

	return (
		<div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleSubmit)}
					className="flex flex-col gap-3"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Character Name</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Enter character name" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="class"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Character Class</FormLabel>
								<Select value={field.value} onValueChange={field.onChange}>
									<FormControl>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Select a class" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{selectOptions?.map((option) => (
											<SelectItem key={option.value} value={option.value}>
												{option.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex w-full justify-center">
						<Button type="submit" variant="outline">
							{isLoading ? <Spinner className="w-5 h-5" /> : "Create Character"}
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}

function CharacterRow({
	character,
	selectedCharacter,
	setSelectedCharacter,
}: {
	character: CharacterData;
	selectedCharacter: CharacterData | null;
	setSelectedCharacter: (character: CharacterData | null) => void;
}) {
	const classData = CHARACTER_CLASSES[character.characterClass as ClassId];

	const isSelected = selectedCharacter?._id === character._id;

	if (!classData) return null;

	function handleSelectCharacter() {
		setSelectedCharacter(character);
	}

	return (
		<button
			type="button"
			className={cn(
				"flex flex-row border rounded-md justify-between w-full p-2 transition-colors",
				isSelected
					? "border-yellow-500"
					: "border-white bg-transparent text-white hover:bg-white/10",
			)}
			onClick={handleSelectCharacter}
		>
			<div className="flex flex-col items-start">
				<h1 className="text-2xl font-bold">{character.name}</h1>
				<h1 className="text-base opacity-80">{classData.name}</h1>
			</div>
			<div className="flex items-center">
				<h1 className="text-xl">lvl. {character.level}</h1>
			</div>
		</button>
	);
}
