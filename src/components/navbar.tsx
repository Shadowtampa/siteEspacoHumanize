/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/lJwnQlHSEBA
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";

import HumanizeLogo from "../assets/humanizearvore.jpg"
import HumanizeLogoTexto from "../assets/espacoHumanizeLogoTexto.png"
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";
import { Box } from "@radix-ui/themes";

const tabs = {
  "about": "Sobre nós",
  "services": "Serviços",
  "contact": "Fale conosco",
  // "work": "Como trabalhamos",
  // "vagues": "Trabalhe conosco",
  "ourspace": "Espaço"
}


export function Navbar() {

  const size = 20;
  const logo_x = size, logo_y = size;

  return (
    <Box>
      <header className="flex fixed top-0 h-20 w-screen shrink-0 items-center px-4 md:px-6 z-[9999]"
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white"
        }}>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link to="/" className="mr-6 hidden lg:flex" >
              <img src={HumanizeLogo} className={`h-${logo_x} w-${logo_y}`} />
              <img src={HumanizeLogoTexto} className={`h-${logo_x} w-${logo_y}`} />

              <span className="sr-only">Acme Inc</span>
            </Link>
            <div className="grid gap-2 py-6">
              {Object.entries(tabs).map(([key, value]) => (
                <>
                  <span>{key}</span>
                  <Link key={key} to={key} className="flex w-full items-center py-2 text-lg font-semibold">
                    {value}
                  </Link>
                </>

              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link to="/" className="mr-6 hidden lg:flex items-center justify-center">
          <img src={HumanizeLogo} className={`h-${logo_x} w-${logo_y}`} />
          <img src={HumanizeLogoTexto} className={`h-${logo_x} w-${logo_y}`} />  {/* Ajuste a margem superior aqui */}
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto hidden lg:flex gap-6">

          {Object.entries(tabs).map(([key, value]) => (
            <Link key={key} to={key} className="text-[#89b7d4] group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              {value}
            </Link>
          ))}
        </nav>
      </header>
    </Box>
  )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}