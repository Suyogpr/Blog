import { Button, Label, TextInput } from "flowbite-react"

import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
      <Link to="/" className="sm:text-xl font-bold dark:text-white text-4xl">
            <span className="px-2 py-2 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-400 rounded-lg text-white">Suyog&#39;s </span>
            Blog
        </Link>
        <p className="text-sm mt-5">This is a demp project. You can sign up with your email and password or with Google.
        </p>
      </div>
      {/* right */}
      <div className="flex-1">
        <form className="flex flex-col gap-4">
          <div>

            <Label value ="Enter your Username" />
            <TextInput 
              type="text"
              placeholder="Username"
              id="username" />

            <Label value ="Enter your Email" />
            <TextInput 
              type="text"
              placeholder="name@company.com"
              id="email" />
            <Label value ="Enter your Password" />

            <TextInput 
              type="text"
              placeholder="Password"
              id="password" />

          </div>
          <Button gradientDuoTone='purpleToBlue' type="submit">
            Sign Up
            </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to ='/sign-in' className="text-blue-500">Sign In</Link>
        </div>
      </div>
    </div>
    </div>
  )
}
