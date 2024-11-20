import { cn } from "../../lib/utils";

interface UserAvatarProps {
  avatarUrl: string;
  size?: number;
  className?: string;
}

export const UserAvatar = ({ avatarUrl, size, className }: UserAvatarProps) => {
  return (
    <img
      src={avatarUrl}
      alt='User avatar'
      width={size ?? 48}
      height={size ?? 48}
      className={cn(
        "aspect-square h-fit flex-none rounded-full bg-secondary object-cover",
        className
      )}
    />
  );
};
