import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { Bookmark, Home } from "lucide-react";

interface SideBarProps {
  className?: string;
}

export const Sidebar = ({ className }: SideBarProps) => {
  return (
    <aside className={className}>
      <Button
        variant='ghost'
        className='flex items-center justify-start gap-3'
        title='Home'
        asChild
      >
        <Link to='/'>
          <Home />
          <span className='hidden lg:inline'>Home</span>
        </Link>
      </Button>
      {/* <NotificationsButton
              initialState={{ unreadCount: unreadNotificationsCount }}
            />
            <MessagesButton
              initialState={{ unreadCount: unreadMessagesCount }}
            /> */}
      <Button
        variant='ghost'
        className='flex items-center justify-start gap-3'
        title='Bookmarks'
        asChild
      >
        <Link to='/bookmarks'>
          <Bookmark />
          <span className='hidden lg:inline'>Bookmarks</span>
        </Link>
      </Button>
    </aside>
  );
};
