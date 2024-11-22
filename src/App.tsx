import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { ThemeProvider } from "./lib/theme-context";
import { UserPost } from "./modules/user/components/UserPost";

function App() {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <main className='flex min-h-screen flex-col'>
        <Navbar />
        <div className='mx-auto flex w-full max-w-7xl grow gap-5 p-5'>
          <Sidebar className='sticky top-[5.25rem] hidden h-fit flex-none  rounded-2xl bg-card py-5 shadow-sm sm:block lg:px-5 xl:w-80' />
          <UserPost />
        </div>
        <Sidebar className='sticky bottom-0 flex w-full justify-center gap-5 border-t bg-card p-3 sm:hidden' />
      </main>
    </ThemeProvider>
  );
}

export default App;
