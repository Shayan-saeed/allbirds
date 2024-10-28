import React from 'react'
import { FaInstagram, FaXTwitter, FaFacebookF, FaYoutube, FaPinterestP } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside>
                <Image className="h-14 w-auto" src="https://images.squarespace-cdn.com/content/v1/657cca16d4fc2d1b4454176a/a383174c-c4ad-4a0d-8685-c8dea89b4686/Allbirds.png" alt="Your Company" />
                <p>
                    Follow the Flock
                    <br />
                    <br />
                    Exclusive offers, a heads up on new things, <br /> and sightings of Allbirds in the wild. Oh, <br /> we have cute sheep, too. #allbirds
                </p>
                <div className="social-icons flex space-x-4 pt-2">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size="1.5em" /></a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><SiTiktok size="1.5em" /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter size="1.5em" /></a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF size="1.5em" /></a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube size="1.5em" /></a>
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterestP size="1.5em" /></a>
                </div>
            </aside>
            <nav>
                <h6 className="footer-title">Help</h6>
                <a className="link link-hover">+92-333-0373591</a>
                <a className="link link-hover">help@myecomstore.com</a>
                <a className="link link-hover">Returns/Exchanges</a>
                <a className="link link-hover">FAQ/Contact Us</a>
                <a className="link link-hover">Afterpay</a>
            </nav>
            <nav>
                <h6 className="footer-title">Shop</h6>
                <a className="link link-hover">Men's Shoes</a>
                <a className="link link-hover">Women's Shoes</a>
                <a className="link link-hover">Men's Apparel</a>
                <a className="link link-hover">Women's Apparel</a>
                <a className="link link-hover">Socks</a>
                <a className="link link-hover">Gift Cards</a>
                <a className="link link-hover">Refer a Friend</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">Our Stores</a>
                <a className="link link-hover">Our Story</a>
                <a className="link link-hover">Our Materials</a>
                <a className="link link-hover">Sustainability</a>
                <a className="link link-hover">Investors</a>
                <a className="link link-hover">Shoe Care</a>
                <a className="link link-hover">Community Offers</a>
            </nav>
        </footer>
    )
}

export default Footer
