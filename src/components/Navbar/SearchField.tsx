import { SearchIcon } from "lucide-react";
import { Input } from "../../ui/input";

export const SearchField = () => {
  return (
    <form>
      <div className='relative'>
        <Input name='q' placeholder='Search' className='pe-10' />
        <SearchIcon className='absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-muted-foreground' />
      </div>
    </form>
  );
};
