import { EditorContent, useEditor } from "@tiptap/react";
import { UserAvatar } from "../../../components/UserButton/UserAvatar";
import { cn } from "../../../lib/utils";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { Button } from "../../../ui/button";

export const UserPost = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false,
      }),
      Placeholder.configure({
        placeholder: "What's crack-a-lackin'?",
      }),
    ],
  });

  //   const input =
  //     editor?.getText({
  //       blockSeparator: "\n",
  //     }) || "";
  return (
    <div className='flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm h-fit'>
      <div className='flex gap-5'>
        <UserAvatar
          avatarUrl='/assets/avatar-placeholder.png'
          className='hidden sm:inline'
        />
        <div className='w-full'>
          <EditorContent
            editor={editor}
            className={cn(
              "max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-5 py-3"
            )}
          />
        </div>
        <div className='flex justify-end'>
          <Button className='min-w-20'>Post</Button>
        </div>
      </div>
    </div>
  );
};
