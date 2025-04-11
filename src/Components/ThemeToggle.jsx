import { useEffect, useState } from "react";
import ContrastIcon from '@mui/icons-material/Contrast';
import LightModeIcon from '@mui/icons-material/LightMode';
import "./ThemeToggle.css";

function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const appliedTheme = savedTheme || "light";
        setTheme(appliedTheme);
        document.documentElement.setAttribute("data-theme", appliedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <ContrastIcon /> : <LightModeIcon />}
        </button>
    );
}

export default ThemeToggle;
