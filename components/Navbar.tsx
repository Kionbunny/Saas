"use client";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignedOut,
  SignedIn,
  useAuth,
} from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

export function Navbar() {
  const { userId } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
/// Conditioanlly show the dashboard link only if the user has logged in 
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-8 py-4 sm:py-6">
        <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-blue-500" />
              <span className="text-xl sm:text-2xl font-bold text-white">
                ThreadCraft AI
              </span>
            </Link>
          </div>
          <button
            className="sm:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (//// if the Menu is open show the close button 
              <X className="w-6 h-6" />
            ) : (//// show the menu icon is not open to open it by showing the menu icon 
              <Menu className="w-6 h-6" />
            )}
          </button> 
        {/*below div holds the all the menu items for us  */}
          <div
            className={`w-full sm:w-auto ${
              isMenuOpen ? "block" : "hidden"
            } sm:block mt-4 sm:mt-0`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8">
              {["Features", "Pricing", "Docs"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 relative group"
                >
                  {item}
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              ))} {/* Conditioanlly show if user has logged in */}
              {userId && (/// if uselogged in or something is there in the userID 
                <Link
                  href="/generate"
                  className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 relative group"
                >
                    {/*Page of DashBoad is show only for logged in users  */}
                  Dashboard 
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              )}

              {/* show signout button if user is not authenticated */}
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-gray-300 hover:text-white transition-colors mt-2 sm:mt-0">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors mt-2 sm:mt-0">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>  {/*if the user is signed in show the user icon along with user button from clerk after user has logged in  */}
                <UserButton
                  appearance={{   /// a appeareance obj with propertiy elements given in curly braces 
                    elements: {
                      avatarBox: "w-10 h-10",
                    },
                  }}
                />
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}