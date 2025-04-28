import { Users, Zap, HeartHandshake, Laptop, PiggyBank } from "lucide-react"
import { AnimatedSection, StaggeredChildren, StaggeredChild } from "./animated-section"
import { motion } from "framer-motion"

export function WhyChooseSection() {
  return (
    <section className="bg-[#f8f9fa] py-16">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-[#002d52] text-3xl font-bold text-center mb-12">Pourquoi choisir ASSUFLEX ?</h2>
        </AnimatedSection>
        <StaggeredChildren className="grid md:grid-cols-5 gap-6" initialDelay={0.3} staggerDelay={0.15}>
          {[
            {
              icon: <Users className="h-12 w-12" />,
              text: "Offres personnalisées",
            },
            {
              icon: <Zap className="h-12 w-12" />,
              text: "Comparaison rapide et indépendante",
            },
            {
              icon: <HeartHandshake className="h-12 w-12" />,
              text: "Accompagnement humain",
            },
            {
              icon: <Laptop className="h-12 w-12" />,
              text: "Souscription 100% en ligne",
            },
            {
              icon: <PiggyBank className="h-12 w-12" />,
              text: "Tarifs compétitifs",
            },
          ].map((feature, index) => (
            <StaggeredChild key={index}>
              <motion.div
                className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm h-full"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="mb-4 text-[#0071cc]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                <p className="text-[#394756] font-medium">{feature.text}</p>
              </motion.div>
            </StaggeredChild>
          ))}
        </StaggeredChildren>
      </div>
    </section>
  )
}
