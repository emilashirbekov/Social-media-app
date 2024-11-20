import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { cn } from "../../lib/utils";
import { UserAvatar } from "./UserAvatar";
import { Check, LogOutIcon, Monitor, Moon, Sun, UserIcon } from "lucide-react";

interface UserButtonProps {
  className?: string;
}

export const UserButton = ({ className }: UserButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={cn("flex-none rounded-full", className)}>
          <UserAvatar avatarUrl={"/assets/avatar-placeholder.png"} size={40} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Logged in as @ Emil</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link to={"/profile"}>
          <DropdownMenuItem>
            <UserIcon className='mr-2 size-4' />
            Profile
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Monitor className='mr-2 size-4' />
            Theme
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Monitor className='mr-2 size-4' />
                System default
                <Check className='ms-2 size-4' />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Sun className='mr-2 size-4' />
                Light
                <Check className='ms-2 size-4' />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Moon className='mr-2 size-4' />
                <Check className='ms-2 size-4' />
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon className='mr-2 size-4' />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
