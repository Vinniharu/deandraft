"use client";

import { useEffect, useState } from 'react';

export default function ScrollLink({ 
    to, 
    children, 
    className = "", 
    ariaLabel = "Scroll to section",
    offset = 0
}) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        
        // Check if we're on the client side
        if (typeof window === 'undefined') return;
        
        // Get the target element
        const targetElement = document.getElementById(to);
        
        // If target exists, scroll to it
        if (targetElement) {
            const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else {
            // If target doesn't exist on this page, check if it's a route
            if (to.startsWith('/')) {
                window.location.href = to;
            }
        }
    };

    if (!isClient) {
        // Return a plain anchor tag for SSR
        return (
            <a href={`#${to}`} className={className} aria-label={ariaLabel}>
                {children}
            </a>
        );
    }

    return (
        <button
            onClick={handleClick}
            className={className}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
} 