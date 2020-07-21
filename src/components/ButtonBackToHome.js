import React from 'react';
import { Link } from 'react-router-dom';


export const ButtonBackToHome = () => (
    <Link 
        className="button is-primary is-rounded"
        to='/'
    >Volver al Home
    </Link>
)