import { Navbar, TextInput, Button, Dropdown, Avatar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from "../redux/theme/themeSlice";

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch()
  const { currentUser } = useSelector((state) => state.user);
  const {theme} = useSelector((state)=>state.theme)

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-2 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-400 rounded-lg text-white">
          Suyog&#39;s{" "}
        </span>
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
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill onClick={()=>dispatch(toggleTheme())}>

          {theme === 'dark' ? <FaSun /> : <FaMoon/> }

        </Button>
        {currentUser ? (
            <Dropdown arrowIcon={false}
            inline
            label={
                <Avatar alt="user"
                img={currentUser.profilePicture}
                rounded
                />
            }>
                <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item >Sign out</Dropdown.Item>

            </Dropdown>
        ):
        (
        <Link to="sign-in">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </Link>
        )
        }
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
  <Link to="/" className={`navbar-link ${path === "/" ? "active" : ""}`}>
    Home
  </Link>

  <Link to="/About" className={`navbar-link ${path === "/About" ? "active" : ""}`}>
    About
  </Link>

  <Link to="/Projects" className={`navbar-link ${path === "/Projects" ? "active" : ""}`}>
    Projects
  </Link>
</Navbar.Collapse>


      {/* <Navbar.Collapse>
        <Navbar.Link active={path === "/"}>
          <Link to="/" as={"div"}>Home</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/About"}>
          <Link to="/About" as={"div"}>About</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/Projects"}>
          <Link to="/Projects" as={"div"}> Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse> */}
    </Navbar>
  );
}
