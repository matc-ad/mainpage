import React from 'react';
import { formulariContacte, colorsOptions } from '../constants';

const Header = ({ isDarkMode }) => {
    const handleButtonClick = () => {
        window.location.href = formulariContacte;
    };

    const colors = isDarkMode ? colorsOptions.darkMode : colorsOptions.lightMode;

    return (
        <header className={`text-center py-5 bg-cover bg-center ${colors.background} ${colors.text}`} style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
            <div className={`p-6 border ${colors.border} rounded-lg ${colors.divBackground} bg-opacity-90`}>
                <h1 className={`text-5xl font-extrabold ${colors.title}`}>Benvingut a matc.ad</h1>
                <p className={`mt-4 text-2xl ${colors.paragraph}`}>Lorem ipsum (no sé què posar aquí) dolor sit amet.</p>
                <button onClick={handleButtonClick} className={`mt-8 font-bold py-2 px-6 rounded-full shadow-lg ${colors.buttonBackground} ${colors.buttonText} ${colors.buttonHoverBackground}`}>Comença Ara</button>
            </div>
        </header>
    );
};

export default Header;