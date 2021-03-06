import Logo from "../components/Logo";
import {useTheme} from "next-themes";
import{SunIcon ,MoonIcon} from "@heroicons/react/solid";
import {useState, useEffect} from "react";

const Header = () => {

  const {systemTheme , theme, setTheme} = useTheme ();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() =>{
    setMounted(true);
  },[])

   const renderThemeChanger= () => {
      if(!mounted) return null;

      const currentTheme = theme === "system" ? systemTheme : theme ;

      if(currentTheme ==="dark"){
        return (
          <SunIcon className="w-10 h-10" role="button" onClick={() => setTheme('light')} />
        )
      }

      else {
        return (
          <MoonIcon className="w-10 h-10" role="button" onClick={() => setTheme('dark')} />
        )
      }
   };

  return (
    <header className="top-0 h-15 z-10">
      <div className="px-4 sm:px-6 py-4 flex justify-center">
        
        {/*<Logo />*/}

        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Header;

