'use client'
import CartIcon from '@/public/svg/CartIcon'
import DownOpenIcon from '@/public/svg/DownOpenIcon.tsx.tsx'
import HeartIcon from '@/public/svg/HeartIcon'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import Modal from '../../Modal/Modal'
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { authentication } from '@/firebase-config'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { login, logout } from '@/store/authSlice'

type Props = {}

interface NavLinkType {
    href: string
    title: string
}

const navLinkData: NavLinkType[] = [
    {
        href: '/',
        title: 'Home',
    },
    {
        href: '/custom',
        title: 'Custom',
    },
    {
        href: '/about',
        title: 'About',
    },
    {
        href: '/categories',
        title: 'Categories',
    },
    {
        href: '/contact',
        title: 'Contact',
    },
]

const dropDownData: NavLinkType[] = [
    {
        href: '/jordan',
        title: 'Jordan',
    },
    {
        href: '/sneaker',
        title: 'Sneaker',
    },
    {
        href: '/running-shoes',
        title: 'Running Shoes',
    },
    {
        href: '/football-shoes',
        title: 'Footbal Shoes',
    },
]

// const dropDownData = [{
//     href : 'jordan'
// }]

export default function Header({}: Props) {
    const [isLogin, setIsLogin] = useState<boolean>(true)
    const [isDropDown, setIsDropDown] = useState<boolean>(false)
    const [isModalLogIn, setIsModalLogIn] = useState<boolean>(false)
    const router = useRouter()
    const pathname = usePathname()
    const dropDownRef = useRef<any>()
    const dispatch = useAppDispatch()
    const cart = useAppSelector((state) => state.cart.cart)

    useEffect(() => {
        let handler = (e: any) => {
            if (!dropDownRef.current.contains(e.targer)) {
                setIsDropDown(false)
                // console.log(2)
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [isDropDown])

    const handleLogin = () => {
        setIsModalLogIn(!isModalLogIn)
    }

    const handleLoginFacebook = () => {
        const provider = new FacebookAuthProvider()
        signInWithPopup(authentication, provider)
            .then((res) => {
                console.log(res)
                setIsLogin(true)
                setIsModalLogIn(false)
            })
            .catch((err) => {
                err.message
                setIsLogin(false)
            })
    }

    const handleLoginGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(authentication, provider)
            .then((res) => {
                console.log(res)
                setIsLogin(true)
                setIsModalLogIn(false)
            })
            .catch((err) => {
                console.log(err.message)
            })
        dispatch(login())
    }

    const handleLogOut = () => {
        setIsLogin(false)
        // dispatch(logout())
    }

    return (
        <header className="sticky top-0 bg-white z-10">
            <div className="max-w-[70%] mx-auto flex justify-between p-5 items-center">
                <div>
                    <Link href="/">
                        <Image width={40} height={20} src="/logo.svg" alt="logo store" />
                    </Link>
                </div>

                <div>
                    <div className="flex gap-8">
                        {navLinkData.map((navLink: NavLinkType) => {
                            if (navLink.href === '/categories') {
                                return (
                                    <div
                                        key={navLink.href}
                                        onClick={() => setIsDropDown(!isDropDown)}
                                        className="relative"
                                        ref={dropDownRef}
                                    >
                                        <div className="flex gap-2 cursor-pointer">
                                            <div>{navLink.title}</div>
                                            <div className="w-3">
                                                <DownOpenIcon />
                                            </div>
                                        </div>
                                        {isDropDown && (
                                            <div className="absolute border-1 bg-white rounded-lg shadow w-44 z-20">
                                                <div className="py-2 text-sm text-gray-700">
                                                    {dropDownData.map((link: NavLinkType) => {
                                                        return (
                                                            <Link
                                                                href={`/categories${link.href}`}
                                                                key={link.href}
                                                                className="block px-4 py-2 hover:bg-gray-100"
                                                            >
                                                                {link.title}
                                                            </Link>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            }
                            return (
                                <div key={navLink.href}>
                                    <Link
                                        className={
                                            pathname === navLink.href ? 'font-bold' : undefined
                                        }
                                        href={navLink.href}
                                    >
                                        {navLink.title}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {isLogin ? (
                    <div className="flex gap-4">
                        <div className="relative">
                            <div className="text-[10px] text-center absolute z-20 -top-1 right-0 w-4 h-4 leading-4 rounded-full bg-[#00000026] bg-opacity-50">
                                51
                            </div>
                            <div className="transition-all duration-200 hover:bg-[#00000026] p-2 rounded-full">
                                <div className="w-5">
                                    <HeartIcon />
                                </div>
                            </div>
                        </div>
                        <div className="relative" onClick={() => router.push('/cart')}>
                            <div className="text-[10px] text-center absolute z-20 -top-1 right-0 w-4 h-4 leading-4 rounded-full bg-[#00000026] bg-opacity-50">
                                {cart.length}
                            </div>
                            <div className="transition-all duration-200 hover:bg-[#00000026] p-2 rounded-full">
                                <div className="w-5">
                                    <CartIcon />
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleLogOut}
                            className="border border-black rounded-full px-2 py-1"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div>
                        <button
                            onClick={handleLogin}
                            className="border border-black rounded-full px-2 py-1 peer"
                        >
                            Login
                        </button>

                        <Modal isOpen={isModalLogIn} onClose={handleLogin}>
                            <div className="flex flex-col gap-4 items-center p-5">
                                <h1 className="fiont-semibold text-[30px] uppercase">Login</h1>
                                <div
                                    className="flex items-center border p-3 rounded-lg w-full gap-2 cursor-pointer"
                                    onClick={handleLoginGoogle}
                                >
                                    <div className="w-8 h-8 relative">
                                        <Image alt="google" fill src="/Google-logo.png"></Image>
                                    </div>
                                    <p>Login with Google</p>
                                </div>
                                <div
                                    className="flex items-center border p-3 rounded-lg w-full gap-2 cursor-pointer"
                                    onClick={handleLoginFacebook}
                                >
                                    <div className="w-8 h-8 relative">
                                        <Image
                                            alt="facebook"
                                            fill
                                            src="/Facebook-logo.avif"
                                        ></Image>
                                    </div>
                                    <p>Login with Facebook</p>
                                </div>
                            </div>
                        </Modal>
                    </div>
                )}
            </div>
        </header>
    )
}
