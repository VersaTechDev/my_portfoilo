import React, { useEffect, useState } from 'react'
import Button from '../components/Button';
import { Menu , X } from 'lucide-react';

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" }
];

export default function Navbar() {

  const [isMobileMenuOpen , setMobileMenuOpen] = useState(false)
  const [isScrolled , setIsScrolled] = useState(false)

  useEffect(() =>{
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);   // ✅ FIXED
    };

    window.addEventListener("scroll" ,handleScroll);

    return () =>{
      window.removeEventListener("scroll" ,handleScroll);
    }
  },[])

  return (
    <div>
      <header className={`fixed top-0 right-0 left-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>

        <nav className='container mx-auto px-6 flex items-center justify-between'>
          
          <a href="#" className='text-xl font-bold tracking-light hover:text-primary'>
            VK<span className='text-primary'>.</span>
          </a>

          {/* desktop nav */}
          <div className='hidden md:flex items-center gap-1'>
            <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
                {navLinks.map((link) => (
                  <a 
                    href={link.href} 
                    key={link.href}   // ✅ better key
                    className='px-4 py-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'
                  >
                    {link.label}
                  </a>
                ))}
            </div>
          </div>

          {/* contact button */}
          <a href="#contact">
          <div className='hidden md:block'>
            <Button size='sm'>Contact Me</Button>
          </div>
          </a>

          {/* mobile toggle */}
          <button 
            className='md:hidden p-2 text-foreground cursor-pointer' 
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </nav>

        {/* mobile menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden glass-strong animate-fade-in'>
            <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>

              {navLinks.map((link) => (
                <a 
                  href={link.href}
                  key={link.href}   
                  onClick={() => setMobileMenuOpen(false)}
                  className='text-lg text-muted-foreground hover:text-foreground py-2'
                >
                  {link.label}
                </a>
              ))}
<a href="#contact">
  <Button onClick={() => setMobileMenuOpen(false)}>
    Contact Me
  </Button>
</a>

            </div>
          </div>
        )}

      </header>
    </div>
  )
}