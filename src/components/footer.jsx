"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import SocialIcon from "./ui/social-icon";
import Link from "next/link";

const socielAccounts = [
    {
        title: "github",
        icon: <FaGithub size={25}/>,
        href: "https://github.com/VilBRabad",
        bgColor: "#000000"
    },
    {
        title: "linkedin",
        icon: <FaLinkedin size={25}/>,
        href: "https://www.linkedin.com/in/vilas-rabad-3a8081211",
        bgColor: "#0077B5"
    },
    {
        title: "gmail",
        icon: <BiLogoGmail size={25}/>,
        href: "mailto:rabadvilas11@gmail.com",
        bgColor: "#E04D3B"
    },
    {
        title: "leetcode",
        icon: <SiLeetcode size={25}/>,
        href: "https://leetcode.com/u/Rabadvilas/",
        bgColor: "#F09A1A"
    },
    {
        title: "codechef",
        icon: <SiCodechef size={25}/>,
        href: "https://www.codechef.com/users/rabad_vilas",
        bgColor: "#5D3117"
    },
]

function Footer() {
  return (
    <footer className="bg-[#5E5E5E]/20 h-[8rem] py-6 w-full flex flex-col items-center jsutify-center">
        <div className="flex gap-4 my-3">
            {
                socielAccounts.map((account) => (
                    <SocialIcon key={account.title} account={account}/>
                ))
            }
        </div>
        <div className="flex gap-4 text-(--gray-color) text-base">
            <Link href={"#about"}>About</Link>
            <Link href={"#projects"}>Projects</Link>
            <Link href={"#experience"}>Journey</Link>
            <Link href={"#skills"}>Skills</Link>
            <p>+91 73874 10172</p>
        </div>
    </footer>
  )
}

export default Footer