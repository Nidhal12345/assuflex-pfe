import { MouseEvent, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import logo from "../../assets/assuflex.svg"

export function Header() {
  const headerRef = useRef(null)
  const logoRef = useRef(null)
  const navRef = useRef(null)
  const mobileNavRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(logoRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })

    gsap.fromTo(
      navRef.current?.children,
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3,
      },
    )

    const headerAnim = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=100",
        scrub: true,
      },
    })

    headerAnim.to(headerRef.current, {
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(8px)",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      duration: 0.3,
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const handleSheetOpen = (open: any) => {
    if (open) {
      gsap.fromTo(
        mobileNavRef.current?.children,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.2,
        },
      )
    }
  }

  const handleButtonHover = (e: MouseEvent<HTMLAnchorElement, MouseEvent>, isEnter: boolean) => {
    gsap.to(e.currentTarget, {
      scale: isEnter ? 1.05 : 1,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 bg-white z-50 transition-all h-16 border-b border-gray-100"
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="md:hidden">
            <Sheet onOpenChange={handleSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-gray-200 hover:bg-gray-50">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
                <div className="py-6 px-6">
                  <Link to={"/"} className="inline-block mb-8">
                    <img
                      src={logo || "/placeholder.svg"}
                      alt="Assuflex Logo"
                      style={{ height: "100px" }}
                      className="object-contain"
                    />
                  </Link>
                  <nav ref={mobileNavRef} className="flex flex-col space-y-5">
                    <Link
                      to={"/"}
                      className="text-gray-800 hover:text-[#f25305] font-medium text-lg transition-colors duration-300 py-2 border-b border-gray-100"
                    >
                      Accueil
                    </Link>
                    <Link
                      to={"/nos-garanties"}
                      className="text-gray-800 hover:text-[#f25305] font-medium text-lg transition-colors duration-300 py-2 border-b border-gray-100"
                    >
                      Nos garanties
                    </Link>
                    <Link
                      to={"/insurance"}
                      className="text-gray-800 hover:text-[#f25305] font-medium text-lg transition-colors duration-300 py-2 border-b border-gray-100"
                    >
                      Simuler mon devis
                    </Link>
                    <Link
                      to={"/contact"}
                      className="text-gray-800 hover:text-[#f25305] font-medium text-lg transition-colors duration-300 py-2 border-b border-gray-100"
                    >
                      Contact
                    </Link>
                    <div className="pt-4">
                      <Link to={"/insurance"}>
                        <Button
                          variant="default"
                          className="bg-[#f25305] hover:bg-[#f8aa36] text-white w-full py-6 rounded-md flex items-center justify-center text-base transition-colors duration-300"
                        >
                          Obtenir un devis
                        </Button>
                      </Link>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Link to={"/"} className="relative z-10 hidden md:block">
            <span ref={logoRef} className="flex items-center group">
              <img
                src={logo || "/placeholder.svg"}
                alt="Assuflex Logo"
                style={{ height: "120px" }}
                className="object-contain"
              />
            </span>
          </Link>
          <nav ref={navRef} className="hidden md:flex items-center space-x-8">
            <Link
              to={"/"}
              className="text-gray-800 hover:text-[#f25305] font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#f25305] after:transition-all hover:after:w-full"
            >
              Accueil
            </Link>
            <Link
              to={"/nos-garanties"}
              className="text-gray-800 hover:text-[#f25305] font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#f25305] after:transition-all hover:after:w-full"
            >
              Nos garanties
            </Link>
            <Link
              to={"/insurance"}
              className="text-gray-800 hover:text-[#f25305] font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#f25305] after:transition-all hover:after:w-full"
            >
              Simuler mon devis
            </Link>
            <Link
              to={"/contact"}
              className="text-gray-800 hover:text-[#f25305] font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#f25305] after:transition-all hover:after:w-full"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center">
          <Link
            to={"/insurance"}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
          >
            <Button
              variant="default"
              className="bg-[#f25305] hover:bg-[#f8aa36] text-white px-5 py-2 rounded-md flex items-center text-sm font-medium transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              Obtenir un devis
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
