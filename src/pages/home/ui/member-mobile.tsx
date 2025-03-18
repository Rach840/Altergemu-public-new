import { User } from "@/src/db/schema";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/src/shared/ui/dialog"



export function MemberModile({member, children}: {member: User, children:React.ReactNode}){
    return (
        <Dialog>
        <DialogTrigger asChild>
      {children}
        </DialogTrigger>
        <DialogContent className=" rounded-lg bg-gray-800 mx-3">
          <DialogHeader>
            <DialogTitle>{member.firstName} {member.lastName}</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
        
        </DialogContent>
      </Dialog>
    )
}