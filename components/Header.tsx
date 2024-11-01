'use client'
import { useEffect, useState } from 'react';
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Cart from './Cart';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectTotalItems } from '../app/store/cartSlice';

const Header = () => {

    const texts = ["Our Newest Neutrals Are Here: Stony Vibes To Ground Any Look", "Our Fall Sale Is Officially On: 30% Off Select Styles For The Season", "Free Shipping On Orders Over $75. Free Returns"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const { setTheme } = useTheme();
    const { theme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const totalItems = useSelector(selectTotalItems);

    const handleCartClick = () => {
        setIsCartOpen(!isCartOpen);
    };



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div>
            <div className={`bg-[#b09776] text-white font-semibold text-xs text-center py-3 w-full transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'} z-30 relative`}>
                {texts.map((text, index) => (
                    <div key={index} className={index === currentIndex ? 'block' : 'hidden'}>
                        {text}
                    </div>
                ))}
            </div>
            <nav className={`w-full shadow-md backdrop-blur-3xl  transition-transform duration-300 ease-in-out ${isScrolled ? 'translate-y-0 fixed top-0 z-50' : 'translate-y-0'}`}>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={mobileMenuOpen}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {mobileMenuOpen ? (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Link href={{
                                    pathname: "/"
                                }}>
                                    <img className="h-8 w-auto" src={theme === 'dark' ? 'https://images.squarespace-cdn.com/content/v1/657cca16d4fc2d1b4454176a/a383174c-c4ad-4a0d-8685-c8dea89b4686/Allbirds.png' : 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Allbirds_logo.png'} alt="Your Company" />
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link href="/collections/mens" className="rounded-md px-3 py-2 text-sm font-semibold hover:underline" aria-current="page">Men</Link>
                                    <Link href="/collections/womens" className="rounded-md px-3 py-2 text-sm font-semibold hover:underline">Women</Link>
                                    <Link href="/" className="rounded-md px-3 py-2 text-sm font-semibold hover:underline">Socks</Link>
                                    <Link href="/" className="rounded-md px-3 py-2 text-sm text-red-700 font-semibold hover:underline">Sale</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <Link
                                href={{
                                    pathname: "/search"
                                }}
                            >
                                <button type="button" className="relative hidden sm:block rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Search</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </button>
                            </Link>
                            <Link
                                href={{
                                    pathname: "/account"
                                }}
                            >
                                <button type="button" className="relative hidden sm:block rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">View user profile</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </button>
                            </Link>
                            <Link
                                href={{
                                    pathname: "/help"
                                }}
                            >
                                <button type="button" className="relative hidden sm:block rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Help</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                    </svg>
                                </button>
                            </Link>

                            <Link
                                href={{
                                    pathname: "/track-order"
                                }}
                            >
                                <button type="button" className="relative hidden sm:block rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Track Order</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 7.5.415-.207a.75.75 0 0 1 1.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 0 0 5.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>
                            </Link>

                            <button
                                onClick={handleCartClick}
                                type="button"
                                className="relative flex rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View shopping cart</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                <Badge className='rounded-full'>{totalItems}</Badge>
                            </button>
                            {isCartOpen && (
                                <div className="cart-modal">
                                    <Cart open={isCartOpen} onOpenChange={setIsCartOpen} />
                                </div>
                            )}
                            <div className="ml-3 hidden">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                            <span className="sr-only">Toggle theme</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => setTheme("light")}>
                                            Light
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                                            Dark
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setTheme("system")}>
                                            System
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link href="/collections/mens" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white" aria-current="page">Men</Link>
                            <Link href="/collections/womens" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white">Women</Link>
                            <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white">Socks</Link>
                            <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white">Sale</Link>
                            <Link href="/search" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white">Search</Link>
                            <Link href="/account" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white">Profile</Link>
                            <Link href="/help" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white">Help</Link>
                            <Link href="/track-order" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white">Track Order</Link>
                        </div>
                    </div>
                )}
            </nav>
            <div className={` shadow-md transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'} z-40 relative mt-2`}>
                <nav className="flex justify-center space-x-8 py-4">
                    <Link
                        className="relative text-sm hover:underline"
                        href={{
                            pathname: '/collections/mens'
                        }}
                    >
                        Men's Shoes
                    </Link>
                    <Link
                        className="relative text-sm hover:underline"
                        href={{
                            pathname: '/collections/womens'
                        }}
                    >
                        Women's Shoes
                    </Link>
                    <Link
                        className="relative text-sm hover:underline"
                        href={{
                            pathname: '/collections/new-arrivals'
                        }}
                    >
                        New Arrivals
                    </Link>

                </nav>
            </div>
        </div>
    )
}

export default Header
