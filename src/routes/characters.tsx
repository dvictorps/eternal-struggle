import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import type { DataModel, Id } from "convex/_generated/dataModel";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { LogOutIcon, PlusIcon } from "lucide-react";
import { type Dispatch, type SetStateAction, useState } from "react";
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
import { useModal } from "@/hooks/use-modal";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { api } from "../../convex/_generated/api";

export const Route = createFileRoute("/characters")({
	component: Characters,
});

function Characters() {
	const { isAuthenticated, isLoading } = useConvexAuth();
	const navigate = useNavigate();

	if (isLoading) return null;
	if (!isAuthenticated) return navigate({ to: "/" });

	return <CharactersContent />;
}

function CharactersContent() {
	const { data: session } = authClient.useSession();
	const data = useQuery(api.characters.getAllByProfileId, {
		profileId: session?.user.id ?? "",
	});
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
						<CharacterRow key={character._id} character={character} />
					))}
				</div>
				<ButtonRow />
			</div>
		</div>
	);
}

function ButtonRow() {
	const navigate = useNavigate();
	const { openModal, closeModal } = useModal();
	const [isLoading, setIsLoading] = useState(false);

	async function handleSignOut() {
		setIsLoading(true);
		await authClient.signOut();
		navigate({ to: "/" });
	}

	async function handleCreateCharacter() {
		openModal({
			title: "Create Character",
			description: "Create a new character",
			content: <CreateCharacterModal closeModal={closeModal} />,
		});
	}

	return (
		<div className="flex flex-row gap-5 mt-4 justify-between">
			<Button
				variant="ghost"
				className="border border-white rounded-md flex flex-row gap-2 w-[200px] text-xl items-center"
				onClick={handleCreateCharacter}
			>
				<PlusIcon className="w-4 h-4" /> Create Character
			</Button>
			<Button
				variant="ghost"
				className="border border-white rounded-md flex flex-row gap-2 w-[100px] text-xl items-center"
				onClick={() => handleSignOut()}
			>
				{isLoading ? (
					<Spinner className="w-5 h-5" />
				) : (
					<LogOutIcon className="w-5 h-5" />
				)}
			</Button>
		</div>
	);
}

function CreateCharacterModal({ closeModal }: { closeModal: () => void }) {
	const [isLoading, setIsLoading] = useState(false);
	const createCharacter = useMutation(api.characters.create);
	const allClasses = useQuery(api.characterClasses.getAll);
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

	const loadingClasses = allClasses === undefined;

	if (!session) return null;

	const handleSubmit = async (values: z.infer<typeof schema>) => {
		const selectedClass = allClasses?.find((cls) => cls._id === values.class);
		if (!selectedClass) return null;
		setIsLoading(true);
		await createCharacter({
			name: values.name,
			characterClass: values.class as Id<"characterClasses">,
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

	const selectOptions = allClasses?.map((cls) => ({
		label: cls.name,
		value: cls._id,
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
										{loadingClasses ? (
											<Spinner className="w-5 h-5" />
										) : (
											selectOptions?.map((option) => (
												<SelectItem key={option.value} value={option.value}>
													{option.label}
												</SelectItem>
											))
										)}
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
}: {
	character: DataModel["characters"]["document"];
}) {
	const [selectedCharacter, setSelectedCharacter] = useState<
		DataModel["characters"]["document"] | null
	>(null);
	const classData = useQuery(api.characterClasses.getById, {
		id: character.characterClass,
	});

	const isSelected = selectedCharacter?._id === character._id;

	if (!classData) return null;

	function handleSelectCharacter() {
		setSelectedCharacter((prev) =>
			prev?._id === character._id ? null : character,
		);
	}

	return (
		<button
			type="button"
			className={cn(
				"flex flex-row border rounded-md justify-between w-full p-2 transition-colors",
				isSelected
					? "border-white bg-white text-black"
					: "border-white bg-transparent text-white hover:bg-white/10",
			)}
			onClick={handleSelectCharacter}
		>
			<div className="flex flex-col items-start">
				<h1 className="text-2xl font-bold">{character.name}</h1>
				<h1 className="text-sm opacity-80">{classData.name}</h1>
			</div>
			<div className="flex items-center">
				<h1 className="text-xl">lvl. {character.level}</h1>
			</div>
		</button>
	);
}
