"use client";

export default function ExternalLink({
    href,
    children,
    className = "",
    ariaLabel = "External link",
    download = false,
    onClick = null
}) {
    const handleClick = (e) => {
        // If there's a custom click handler, call it
        if (onClick) {
            onClick(e);
        }
        
        // For broken links in development, prevent navigation and log error
        if (href === "#" || !href) {
            e.preventDefault();
            console.warn("Link href is missing or set to '#'");
        }
    };

    return (
        <a
            href={href || "#"}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            download={download}
            onClick={handleClick}
        >
            {children}
        </a>
    );
} 