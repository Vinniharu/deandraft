"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'; // Added ChevronDown and ChevronUp icons
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';

// Navigation links data
const navLinks = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about",
    sublinks: [
      { name: "Mission", path: "/about#mission" },
      { name: "Vision", path: "/about#vision" },
      { name: "Team", path: "/about#team" },
      { name: "Boards", path: "/about#boards" }
    ]
  },
  {
    name: "Edu",
    path: "/programs/education",
    sublinks: [
      { name: "NextGen Teachers", path: "/programs/education/nextgen" },
      { name: "Girls Back to School", path: "/programs/education/girls-back" },
      { name: "SDGs Activation", path: "/programs/education/sdgs" },
      { name: "Transforming Education", path: "/programs/education/transforming-edu" },
      { name: "Education Archive", path: "/programs/education/archive" }
    ]
  },
  {
    name: "Climate",
    path: "/programs/climate-action",
    sublinks: [
      { name: "Lake Chad Fellowship", path: "/programs/climate-action/lake-chad" },
      { name: "Climate Democracy Accelerator", path: "/programs/climate-action/democracy-accelerator" },
      { name: "National Action Day", path: "/programs/climate-action/national-action" },
      { name: "MSC Kenya Workshop", path: "/programs/climate-action/msc-kenya" },
      { name: "More Climate Projects", path: "/programs/climate-action/more" }
    ]
  },
  {
    name: "Democracy",
    path: "/programs/democracy",
    sublinks: [
      { name: "#iPledge2Vote", path: "/programs/democracy/ipledge" },
      { name: "CEEP", path: "/programs/democracy/ceep" },
      { name: "FixElection Youth Assembly", path: "/programs/democracy/fixelection" },
      { name: "EEWOM", path: "/programs/democracy/eewom" },
      { name: "More Democracy Projects", path: "/programs/democracy/more" }
    ]
  },
  {
    name: "Governance",
    path: "/programs/governance",
    sublinks: [
      { name: "#OpenLGAs", path: "/programs/governance/openlgas" },
      { name: "#BudgetWatch", path: "/programs/governance/budgetwatch" },
      { name: "Student Open-Gov Fellowship", path: "/programs/governance/student-fellowship" },
      { name: "More Governance Projects", path: "/programs/governance/more" }
    ]
  },
  {
    name: "Publications",
    path: "/publications",
    sublinks: [
      { name: "First Report", path: "/publications/first" },
      { name: "Annual Reports", path: "/publications/annual" },
      { name: "Project Reports", path: "/publications/projects" }
    ]
  },
  {
    name: "Media",
    path: "/media",
    sublinks: [
      { name: "Press", path: "/media/press" },
      { name: "Blog", path: "/media/blog" },
      { name: "Gallery", path: "/media/gallery" }
    ]
  },
  {
    name: "Donate",
    path: "/donate"
  },
  {
    name: "Special Intervention Projects",
    path: "/special-projects"
  }
];


const ListItem = ({ className, title, href, children }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none p-3 leading-none no-underline outline-none transition-colors hover:bg-transparent hover:text-white focus:text-white",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>}
        </Link>
      </NavigationMenuLink>
    </motion.li>
  );
};

// Animation variants
const navbarVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  }
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      type: "spring",
      stiffness: 150 
    }
  }
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: "auto",
    transition: {
      duration: 0.3,
      staggerChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3
    }
  }
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
};

const dropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: "auto",
    transition: {
      duration: 0.3
    }
  },
  exit: { 
    opacity: 0, 
    height: 0,
    transition: {
      duration: 0.2
    }
  }
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (100vh)
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dropdown in mobile menu
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div variants={logoVariants}>
          <Link href="/" className="flex items-center">
            {/* Logo */}
            <div className="w-14 h-14 relative flex items-center">
              <img 
                src="/deanlogo.png" 
                alt="Dean Initiative Logo" 
                className="object-contain w-full h-full"
              />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={navItemVariants}
                  custom={index}
                >
                  <NavigationMenuItem>
                    {link.sublinks ? (
                      <>
                        <NavigationMenuTrigger 
                          className={cn(
                            "text-sm font-medium transition-colors border-0 shadow-none bg-transparent",
                            isScrolled 
                              ? "text-[var(--dean-blue)] hover:text-[var(--dean-blue)]/80" 
                              : "text-white hover:text-blue-500/80"
                          )}
                        >
                          {link.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {link.sublinks.map((sublink) => (
                              <ListItem
                                key={sublink.name}
                                title={sublink.name}
                                href={sublink.path}
                                className={isScrolled ? "hover:text-[var(--dean-blue)] hover:bg-blue-500/10" : "hover:text-blue-500 hover:bg-blue-500/10"}
                              />
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link 
                        href={link.path}
                        className={cn(
                          "px-3 py-2 text-sm font-medium transition-colors inline-block",
                          isScrolled 
                            ? "text-[var(--dean-blue)] hover:text-[var(--dean-blue)]/80" 
                            : "text-white hover:text-white/80"
                        )}
                      >
                        {link.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                </motion.div>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          variants={navItemVariants}
          className={cn(
            "lg:hidden",
            isScrolled 
              ? "text-[var(--dean-blue)]" 
              : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="lg:hidden bg-white/90 backdrop-blur-sm w-full px-4 py-5 shadow-lg overflow-hidden overflow-y-auto h-4/5"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <nav className="flex flex-col space-y-4 h-full">
              {navLinks.map((link, index) => (
                <motion.div 
                  key={link.name} 
                  className="flex flex-col"
                  variants={mobileItemVariants}
                  custom={index}
                >
                  {link.sublinks ? (
                    <>
                      <div 
                        className="font-medium py-2 flex justify-between items-center cursor-pointer"
                        style={{ color: 'var(--dean-blue)' }}
                        onClick={() => toggleDropdown(index)}
                      >
                        <span>{link.name}</span>
                        {activeDropdown === index ? 
                          <ChevronUp size={18} /> : 
                          <ChevronDown size={18} />
                        }
                      </div>
                      
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div 
                            className="pl-4 mt-2 flex flex-col space-y-2"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                          >
                            {link.sublinks.map((sublink, subIndex) => (
                              <motion.div
                                key={sublink.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 * subIndex }}
                              >
                                <Link 
                                  href={sublink.path}
                                  className="text-sm py-1"
                                  style={{ color: 'var(--dean-blue)' }}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {sublink.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link 
                      href={link.path}
                      className="font-medium py-2"
                      style={{ color: 'var(--dean-blue)' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
