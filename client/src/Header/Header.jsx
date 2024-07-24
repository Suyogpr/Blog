import { Navbar, TextInput, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa'


export default function Header() {
    const path = useLocation().pathname;
     
  return (
    <Navbar className="border-b-2">
        <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
            <span className="px-2 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white">Suyog&#39;s </span>
            {/* <Button gradientDuoTone="purpleToBlue" className="px-2 py-1 inline-flex" >
                Suyogs
            </Button> */}
            Blog
        </Link>
        <form>
            <TextInput 
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
            
            />
        </form>
        <Button className="w-11 h-10 lg:hidden" color="gray" pill>
            <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
            <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
                <FaMoon />
            </Button>
            <Link to='sign-in'>
            <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
            </Button>
            </Link>
            <Navbar.Toggle />
        </div>
            <Navbar.Collapse>

                <Navbar.Link active={path==='/'}>
                    <Link to="/" as={'div'}>
                    Home
                    </Link>
                </Navbar.Link>

                <Navbar.Link active={path==='/About'}>
                    <Link to="/About" as={'div'}>
                    About
                    </Link>
                </Navbar.Link>

                <Navbar.Link active={path==='/Projects'}>
                    <Link to="/Projects" as={'div'}>
                    Projects
                    </Link>
                </Navbar.Link>
                
            </Navbar.Collapse>
    </Navbar>
  )
}
