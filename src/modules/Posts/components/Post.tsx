import { Link } from "react-router-dom";
import { UserAvatar } from "../../../components/UserButton/UserAvatar";

export const Posts = () => {
  return (
    <article className='group/post space-y-3 rounded-2xl bg-card p-5 shadow-sm'>
      <div className='flex justify-between gap-3'>
        <div className='flex flex-wrap gap-3'>
          <Link to={""}>
            <UserAvatar
              avatarUrl={"/assets/avatar-placeholder.png"}
              size={40}
            />
          </Link>
          <div>
            <Link className='block font-medium hover:underline' to={""}>
              Emka
            </Link>
          </div>
          <Link
            to={``}
            className='block text-sm text-muted-foreground hover:underline'
            suppressHydrationWarning
          >
            23 november
          </Link>
          <div className='whitespace-pre-line break-words'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            omnis. Eius quisquam ipsum animi quia id, repellat molestiae
            perferendis laudantium, harum sapiente omnis, et accusamus minima
            debitis vero tenetur! Ducimus!
          </div>
        </div>
      </div>
    </article>
  );
};
