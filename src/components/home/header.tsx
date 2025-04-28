import logo from "../../assets/assuflex.svg"
import { Menu } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Link } from "react-router-dom"

export function Header() {
  const controls = useAnimation()

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 h-16"
      initial={{ backgroundColor: "rgba(255, 255, 255, 1)", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)" }}
      animate={controls}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
        <Link to={"/"}>
          <a href="/" className="flex items-center group">
          <img src={logo} alt="" style={{ height:"120px" }} />
          </a>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            
          <Link to={"/"}>
            <a >
              Accueil
            </a>
            </Link>

            <Link to={"/nos-garanties"}>
            <a
            >
              Nos garanties
            </a>

            </Link>
            <Link to={"/insurance"}>
            <a
            >
              Simuler mon devis
            </a>
            </Link>
            <Link to={"/contact"}>
            <a >
              Contact
            </a>
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="py-6">
                <a href="/" className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[#f25305] text-white flex items-center justify-center rounded-sm">
                    <span className="text-xl font-bold">A</span>
                  </div>
                  <span className="text-[#f25305] font-bold text-xl ml-1">SSUFLEX</span>
                </a>
                <nav className="space-y-4">
                <Link to={"/"}>
            <a >
              Accueil
            </a>
            </Link>

            <Link to={"/nos-garanties"}>
            <a
            >
              Nos garanties
            </a>

            </Link>
            <Link to={"/insurance"}>
            <a
            >
              Simuler mon devis
            </a>
            </Link>
            <Link to={"/contact"}>
            <a >
              Contact
            </a>
            </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to={"/insurance"}>
            <Button
              variant="default"
              className="bg-[#f25305] hover:bg-[#f8aa36] text-white px-4 py-2 rounded-md flex items-center text-sm transition-colors duration-300"
            >
              Obtenir un devis
            </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
