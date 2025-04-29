import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(".hero-title", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        ".hero-description",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .from(
        ".hero-button",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4",
      )
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Découvrez nos{" "}
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              garanties santé
              </span>{" "}
              avec ASSUFLEX
            </h1>
            <p className="hero-description text-xl text-gray-600 mb-8">
              Protégez ce qui compte vraiment avec nos solutions personnalisées pour chaque profil et situation
            </p>
            <div className="hero-button flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-[#FF623E] via-[#FF623E] to-[#FF971B] text-white hover:opacity-90">
                Demander un devis gratuit
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          {/* <div className="hero-image relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-300 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
            <img
  src="https://images.unsplash.com/photo-1588776814546-d927ef18bcb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  alt="ASSUFLEX Assurance Santé"
              className="relative z-10 w-full h-auto rounded-xl shadow-2xl"
            />
          </div> */}
        </div>
      </div>

      <div className="absolute top-1/4 left-8 w-12 h-12 border-4 border-orange-400 rounded-full opacity-20"></div>
      <div className="absolute bottom-1/4 right-8 w-8 h-8 border-4 border-blue-400 rounded-full opacity-20"></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-orange-500 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-blue-500 rounded-full opacity-30"></div>
    </div>
  )
}
