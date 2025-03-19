import { User } from "@/src/db/schema";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/src/shared/ui/dialog";

export function MemberModile({
	member,
	children,
}: {
	member: User;
	children: React.ReactNode;
}) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className=" rounded-lg bg-gray-800 mx-3">
				<DialogHeader>
					<DialogTitle className="p-3">
						<img
							src={member.avatarUrl as string}
							alt={member.firstName}
							className="w-full h-full object-cover object-center rounded-xl "
						/>
					</DialogTitle>
					<DialogDescription className="p-6 pt-1">
						<h2 className="text-2xl lg:text-3xl font-bold mb-2">
							{member.firstName} {member.lastName}
						</h2>
						<p className="text-blue-400 text-md lg:text-lg mb-4">
							{member.devStatus ? member.devStatus.split(",").join(", ") : ""}
						</p>
						<p className="text-gray-300 text-md lg:text-lg ">{member.bio}</p>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
