import { createFileRoute } from "@tanstack/react-router";
import { api } from "convex/_generated/api";
import type { DataModel, Id } from "convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { PencilIcon, PlusIcon, TrashIcon } from "lucide-react";
import { toast } from "sonner";
import { ClassForm, type ClassFormValues } from "@/components/admin/class-form";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAlertModal } from "@/hooks/use-alert-modal";
import { useModal } from "@/hooks/use-modal";

export const Route = createFileRoute("/admin/_layout/class")({
	component: CreateClass,
});

function CreateClass() {
	const allClasses = useQuery(api.characterClasses.getAll);
	const createCharacterClass = useMutation(api.characterClasses.create);
	const { openModal } = useModal();
	const isLoading = allClasses === undefined;

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const handleSubmit = async (values: ClassFormValues) => {
		const res = await createCharacterClass({
			name: values.name,
			strength: values.strength,
			dexterity: values.dexterity,
			intelligence: values.intelligence,
			hp: values.hp,
			mp: values.mp,
		});

		if (res) {
			toast.success("Class created successfully");
		} else {
			toast.error("Failed to create class");
		}
	};

	function handleCreateClass() {
		openModal({
			title: "",
			description: "",
			content: <ClassForm onSubmit={handleSubmit} />,
		});
	}

	return (
		<div className="flex flex-row justify-center items-center max-h-screen gap-5 p-5">
			<Card className="flex-1 h-full">
				<CardContent className="h-max">
					<div className="flex flex-row justify-between items-center">
						<div className="flex flex-col">
							<h1 className="text-3xl">Classes</h1>
							<p className=" text-gray-400 mb-1">List of classes</p>
						</div>
						<Button
							variant="outline"
							className="text-xl"
							onClick={handleCreateClass}
						>
							<PlusIcon className="w-4 h-4" />
							Create Class
						</Button>
					</div>
					<div className="flex flex-col gap-3">
						<Accordion type="multiple">
							{allClasses && allClasses.length > 0 ? (
								allClasses?.map((characterClass) => (
									<ClassRow
										key={characterClass._id}
										value={characterClass._id}
										characterClass={characterClass}
									/>
								))
							) : (
								<div className="flex flex-row w-full justify-center items-center">
									<h1 className="text-xl">No classes found</h1>
								</div>
							)}
						</Accordion>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

function ClassRow({
	value,
	characterClass,
}: {
	value: string;
	characterClass: DataModel["characterClasses"]["document"];
}) {
	const { openAlertModal, closeAlertModal } = useAlertModal();
	const { openModal, closeModal } = useModal();
	const deleteCharacterClass = useMutation(api.characterClasses.remove);
	const updateCharacterClass = useMutation(api.characterClasses.update);

	function handleDeleteCharacterClass(id: Id<"characterClasses">) {
		openAlertModal({
			title: "Delete Class",
			description: "Are you sure you want to delete this class?",
			onConfirm: () =>
				deleteCharacterClass({ id })
					.then(() => {
						closeAlertModal();
						toast.success("Class deleted successfully");
					})
					.catch(() => {
						toast.error("Failed to delete class");
					}),
		});
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
			});

			if (res) {
				toast.success("Class updated successfully");
				closeModal();
			} else {
				toast.error("Failed to update class");
			}
		};
		openModal({
			title: "Edit Class",
			description: "Edit the class",
			content: (
				<ClassForm
					onSubmit={handleSubmit}
					isEdit={true}
					defaultValues={characterClass}
				/>
			),
		});
	}

	return (
		<AccordionItem value={value}>
			<AccordionTrigger className=" hover:no-underline hover:text-gray-500">
				<div className="flex flex-row gap-3 border border-[#2E2E2E] rounded-md px-4 py-2 justify-between w-full">
					<h1 className="text-xl">{characterClass.name}</h1>
					<div className="flex flex-row gap-3">
						<button
							type="button"
							onClick={() => handleEditCharacterClass(characterClass._id)}
						>
							<PencilIcon className="w-5 h-5 text-white hover:text-blue-950 transition-colors" />
						</button>
						<button
							type="button"
							onClick={() => handleDeleteCharacterClass(characterClass._id)}
						>
							<TrashIcon className="w-5 h-5 text-white hover:text-red-950 transition-colors" />
						</button>
					</div>
				</div>
			</AccordionTrigger>
			<AccordionContent className="text-lg">
				<h1 className="text-2xl">Base Stats</h1>
				<div className="flex flex-row gap-3">
					<h1>Strength: {characterClass.strength}</h1>
					<h1>Dexterity: {characterClass.dexterity}</h1>
					<h1>Intelligence: {characterClass.intelligence}</h1>
					<h1>HP: {characterClass.hp}</h1>
					<h1>MP: {characterClass.mp}</h1>
				</div>
			</AccordionContent>
		</AccordionItem>
	);
}
