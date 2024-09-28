import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaStar } from 'react-icons/fa';

const Roadmap = ({ isDarkMode, toggleDarkMode }) => (
    <>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div className="container mx-auto py-20 px-4 md:px-8">
            <h1 className="text-4xl font-extrabold text-center mb-8">Roadmap</h1>
            <p className="mt-4 text-lg text-center">Aquí pots veure el nostre roadmap. <strong>Tot això és momentani.</strong></p>
            <ul className="mt-8 space-y-4 text-lg">
                <li className="flex items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                    <FaStar className="text-yellow-500 mr-3" />
                    <span>Creació logo matc.ad (.svg).</span>
                    <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">01/01/2023</span>
                </li>
                <li className="flex items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                    <FaStar className="text-yellow-500 mr-3" />
                    <span>Fer més bonica la pàgina web.</span>
                    <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">15/02/2023</span>
                </li>
                <li className="flex items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                    <FaStar className="text-yellow-500 mr-3" />
                    <span>Creació d'un roadmap correcte amb les coses que volem fer després de tot això.</span>
                    <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">30/03/2023</span>
                </li>
            </ul>
        </div>
        <Footer isDarkMode={isDarkMode} />
    </>
);

export default Roadmap;