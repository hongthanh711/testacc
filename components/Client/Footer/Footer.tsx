import FacebookIcon from '@/public/svg/FacebookIcon'
import InstagramIcon from '@/public/svg/InstagramIcon'
import TwitterIcon from '@/public/svg/TwitterIcon'
import YoutubeIcon from '@/public/svg/YoutubeIcon'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
    return (
        <div className="bg-black">
            <div className="max-w-[70%] mx-auto pt-14 pb-4">
                <div className="flex justify-between">
                    <div className="flex gap-[100px]">
                        <div>
                            <h3 className="footer__title">Find a store</h3>
                            <ul className="flex flex-col gap-3 pt-3">
                                <li className="uppercase text-white text-sm">
                                    <Link href="#">Become A Partner</Link>
                                </li>
                                <li className="uppercase text-white text-sm">
                                    <Link href="#">Sign Up For Email</Link>
                                </li>
                                <li className="uppercase text-white text-sm">
                                    <Link href="#">Send us feedback</Link>
                                </li>
                                <li className="uppercase text-white text-sm">
                                    <Link href="#">Student discount</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="footer__title">Get Help</div>
                            <ul className="flex flex-col gap-3 pt-3">
                                <li className="footer__link">
                                    <Link href="#">Order Status</Link>
                                </li>
                                <li className="footer__link">
                                    <Link href="#">Delivery</Link>
                                </li>
                                <li className="footer__link">
                                    <Link href="#">Returns</Link>
                                </li>
                                <li className="footer__link">
                                    <Link href="#">Payment Options</Link>
                                </li>
                                <li className="footer__link">
                                    <Link href="#">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="footer__title">About Nike</div>
                            <ul className="flex flex-col gap-3 pt-3">
                                <li className="footer__link">
                                    <Link href="#">News</Link>
                                </li>
                                <li className="footer__link">
                                    <Link href="#">Careers</Link>
                                </li>
                                <li className="footer__link">
                                    <Link href="#">Investor</Link>
                                </li>
                                <li className="footer__link">
                                    <Link href="#">Sustainability</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-grey-text rounded-full hover:bg-white transition-all duration-100">
                            <div className="w-6  text-black">
                                <Link href="#">
                                    <FacebookIcon />
                                </Link>
                            </div>
                        </div>
                        <div className="p-2 bg-grey-text rounded-full hover:bg-white transition-all duration-100">
                            <div className="w-6  text-black">
                                <Link href="#">
                                    <TwitterIcon />
                                </Link>
                            </div>
                        </div>
                        <div className="p-2 bg-grey-text rounded-full hover:bg-white transition-all duration-100">
                            <div className="w-6  text-black">
                                <Link href="#">
                                    <YoutubeIcon />
                                </Link>
                            </div>
                        </div>
                        <div className="p-2 bg-grey-text rounded-full hover:bg-white transition-all duration-100">
                            <div className="w-6  text-black">
                                <Link href="#">
                                    <InstagramIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex text-grey-text justify-between items-center mt-10">
                    <Link href="#" className="footer__link text-[12px]">
                        © 2023 Nike, Inc. All Rights Reserved
                    </Link>
                    <div className="flex gap-5">
                        <Link className="footer__link text-[12px]" href="#">
                            Guides
                        </Link>
                        <Link className="footer__link text-[12px]" href="#">
                            Terms of Sale
                        </Link>
                        <Link className="footer__link text-[12px]" href="#">
                            Terms of Use
                        </Link>
                        <Link className="footer__link text-[12px]" href="#">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
