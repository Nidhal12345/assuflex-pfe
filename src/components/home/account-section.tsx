import { ArrowRight } from "lucide-react"
import { AnimatedText } from "./animated-section"
import { motion } from "framer-motion"
import img from "../../assets/assurance-231-1669737955-462496877.jpg"

export function AccountSection() {
  return (
    <section className="container py-16">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div
            className="p-8"
          >
            <img src={img} alt="" />
          </div>
        <div className="space-y-6">
          <AnimatedText delay={0.3}>
            <h2 className="text-[#002d52] text-3xl font-bold">Vous assurer par cœur</h2>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <p className="text-[#394756] font-medium">Chez Assuflex, vous gérez votre contrat en toute simplicité</p>
          </AnimatedText>
          <AnimatedText delay={0.5}>
            <div className="space-y-4">
              <div className="flex gap-2">
                <span className="font-bold">•</span>
                <div>
                  <span className="font-medium">24h/7j depuis votre espace en ligne :</span> suivez vos demandes et vos
                  remboursements
                </div>
              </div>
            </div>
          </AnimatedText>
          <AnimatedText delay={0.6}>
            <motion.div whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/espace-client"
                className="bg-[#0288d1] hover:bg-[#0071cc] text-white px-6 py-3 rounded-md inline-flex items-center transition-colors duration-300"
              >
                Je me connecte à mon espace
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 1 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </a>
            </motion.div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}
