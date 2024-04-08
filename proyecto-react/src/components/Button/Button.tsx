import React from 'react';
import './Button.css';
import { NavLink } from 'react-router-dom';

interface ButtonProps {
    onClick?: () => void;
    to?: string;
    href?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, to, href, children }) => {
    if (to && !href) {
        return (
            <NavLink to={to} className="button">
                {children}
            </NavLink>
        );
    }

    if (href && !to) {
        return (
            <a href={href} className="button">
                {children}
            </a>
        );
    }

    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
