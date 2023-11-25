import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
const DropOptions = () => {
  return (
    <section className="flex justify-evenly items-center py-5">
        <div className="px-7 py-4 w-1/3 mx-4">
            <DropdownMenu>
                <DropdownMenuTrigger className="flex outline-none justify-between w-full">SELECT CATEGORY</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Select category</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div className="px-7 py-4 w-1/3 mx-4">
            <DropdownMenu>
                <DropdownMenuTrigger className="flex outline-none justify-between w-full">SELECT LEVEL</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Select level</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div className="px-7 py-4 w-1/3 mx-4">
            <DropdownMenu>
                <DropdownMenuTrigger className="flex outline-none justify-between w-full">SELECT TYPE</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Select type</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </section>
  )
}

export default DropOptions