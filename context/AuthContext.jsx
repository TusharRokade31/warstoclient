'use client'
import { usePathname } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const location = usePathname();

  const [openCart, setCartOpen] = useState(false);
  const [openFilter, setFilterOpen] = useState(false);
  




  const openCartDrawer = () => {
    if (location !== "/cart") {
      setCartOpen(true);
    }
  };
  const closeCartDrawer = () => setCartOpen(false);

  const openFilterDrawer = () => setFilterOpen(true);
  const closeFilterDrawer = () => setFilterOpen(false);


// navbar scroll 

const [showNavbar, setShowNavbar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);
const [Reqvalue, setvalue] = useState("flex");


const scrollThreshold = 30;



useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [lastScrollY]);



  const value = {
    openCart,
    openFilter,
    openCartDrawer,
    showNavbar,
    Reqvalue,
    setvalue,
    openFilterDrawer,
    closeFilterDrawer,
    closeCartDrawer
  };




  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
