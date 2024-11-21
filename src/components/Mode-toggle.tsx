import { Moon, Sun } from "lucide-react";
import { useTheme } from "../lib/theme-context";

import { Button } from "../ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const theme = localStorage.getItem("vite-ui-theme");
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button onClick={toggle} variant='outline' size='icon'>
      <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
    </Button>
  );
}
