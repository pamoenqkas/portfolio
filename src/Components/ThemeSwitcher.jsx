import React, { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs'

const ThemeSwitcher = () => {

    const [theme, setTheme] = useState(null)

    useEffect(() => {
        if(window.matchMedia("prefer-color-scheme: dark").matches){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }, []);

    useEffect(() => {
        if(theme == 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    }, [theme]);

    const handleThemeSwitcher = () => {
        setTheme(theme == 'dark' ? 'light' : 'dark');
    }

    return(
        <button 
            onClick={handleThemeSwitcher}
            className='p-3 m-3 bg-[#EDF5E1] dark:bg-[#05386B] text-yellow-500 dark:text-white'
            >
            {theme === 'dark' ? <FaMoon /> : <BsSunFill />}
        </button> 
    );
};

export default ThemeSwitcher;