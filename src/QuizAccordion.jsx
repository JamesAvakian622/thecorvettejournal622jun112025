
import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Quiz1';
import data from './data.json'; // Assuming your JSON is stored in `data.json`
import NavbarMore from "./NavbarMore";
export default function QuizAccordion() {
    return (
        <div>

            <NavbarMore />
            
            <h1>Corvette Fast Facts</h1>

            <Accordion data={data} />

        </div>
    );
}