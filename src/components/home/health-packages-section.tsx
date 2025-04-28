import { motion } from "framer-motion"
import { GraduationCap, Users, HeartPulse, Briefcase, Building } from "lucide-react"
import { AnimatedSection, StaggeredChildren, StaggeredChild } from "./animated-section"
import { Link } from "react-router-dom"

const packages = [
  {
    id: "jeune",
    title: "Jeune actif / étudiant",
    description: "Couverture essentielle à petit prix pour les jeunes en bonne santé",
    icon: <GraduationCap className="h-10 w-10" />,
    color: "#0071cc",
  },
  {
    id: "famille",
    title: "Famille",
    description: "Protection complète pour toute la famille avec options pédiatriques",
    icon: <Users className="h-10 w-10" />,
    color: "#f25305",
  },
  {
    id: "senior",
    title: "Senior / retraité",
    description: "Garanties renforcées pour les soins spécifiques aux seniors",
    icon: <HeartPulse className="h-10 w-10" />,
    color: "#008859",
  },
  {
    id: "tns",
    title: "Travailleur indépendant (TNS)",
    description: "Solutions fiscalement avantageuses pour les indépendants",
    icon: <Briefcase className="h-10 w-10" />,
    color: "#13acf7",
  },
  {
    id: "entreprise",
    title: "Entreprise / TPE",
    description: "Offres collectives adaptées aux besoins de vos salariés",
    icon: <Building className="h-10 w-10" />,
    color: "#6c757d",
  },
]

export function HealthPackagesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#002d52] mb-4">Nos packs santé par profil</h2>
          <p className="text-[#394756] max-w-2xl mx-auto">
            Des solutions adaptées à chaque situation personnelle et professionnelle
          </p>
        </AnimatedSection>

        <StaggeredChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" initialDelay={0.3} staggerDelay={0.15}>
          {packages.map((pkg) => (
            <StaggeredChild key={pkg.id}>
              <motion.div
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm h-full"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4" style={{ color: pkg.color }}>
                      {pkg.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#002d52]">{pkg.title}</h3>
                  </div>
                  <p className="text-[#394756] mb-6">{pkg.description}</p>
                  <Link to={"nos-garanties"}>
                  <motion.a
                    href={`/garanties/${pkg.id}`}
                    className="inline-flex items-center text-[#0071cc] font-medium hover:underline"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Découvrir
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                  </Link> 
                </div>
              </motion.div>
            </StaggeredChild>
          ))}
        </StaggeredChildren>
      </div>
    </section>
  )
}
