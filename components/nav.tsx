import { Grid, Home, Info, Mail, Menu, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";


export default function NavBarComponent(){
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex space-x-2">
                <Home className="h-8 w-8" /> 
                <div className="font-bold text-2xl">Japanese Guide of guides</div>
              </Link>
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-4">
                  {[
                    { name: 'Home', icon: <Home className="w-4 h-4 mr-1" /> },
                    { name: 'Categories', icon: <Grid className="w-4 h-4 mr-1" /> },
                    { name: 'Popular', icon: <TrendingUp className="w-4 h-4 mr-1" /> },
                    { name: 'About', icon: <Info className="w-4 h-4 mr-1" /> },
                    { name: 'Contact', icon: <Mail className="w-4 h-4 mr-1" /> },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href="/"
                      className="text-gray-800 hover:bg-pink-200 hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
            <Button className="ml-4 hidden md:flex bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md">
              Login
            </Button>
          </div>
        </div>
      </nav>
    )
}