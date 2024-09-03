import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"
import {BsFacebook,BsInstagram,BsTwitter,BsGithub} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
            <span className="px-2 py-2 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-400 rounded-lg text-white">Suyog&#39;s </span>
            Blog
        </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                    <Footer.Title title="About" />
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://www.chatgpt.com' target="_blank" rel="noopener noreferrer">
                            ChatGPT
                        </Footer.Link>
                        <Footer.Link href='/About' target="_blank" rel="noopener noreferrer">
                            The Blog
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>

                    <div>
                    <Footer.Title title="Follow us" />
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://www.github.com/Suyogpr' target="_blank" rel="noopener noreferrer">
                            GitHub
                        </Footer.Link>
                        <Footer.Link href='https://www.facebook.com/thesuyogpradhan' target="_blank" rel="noopener noreferrer">
                            Facebook
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>

                    <div>
                    <Footer.Title title="legal" />
                    <Footer.LinkGroup col>
                        <Footer.Link href='#'>
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href='#'>
                            Terms And Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>

                    
                </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href='#' by="Suyog's Blog" year={new Date().getFullYear()}/>
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon href='#' icon={BsFacebook} />
                    <Footer.Icon href='#' icon={BsInstagram} />
                    <Footer.Icon href='#' icon={BsTwitter} />
                    <Footer.Icon href='#' icon={BsGithub} />
                    {/* <Footer.Icon href='#' icon={BsDribble} /> */}
                </div>
            </div>
        </div>


    </Footer>
  )
}
