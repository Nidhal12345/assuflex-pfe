import { motion } from "framer-motion"
import { ClipboardList, FileText, CheckCircle } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function HowItWorksSection() {
  return (
    <section className="py-16 bg-[#f1faff]">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#002d52] mb-4">Comment ça marche</h2>
          <p className="text-[#394756] max-w-2xl mx-auto">Obtenez votre mutuelle santé en 3 étapes simples</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm text-center h-full flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-[#e6f5ff] rounded-full flex items-center justify-center mb-4">
                <ClipboardList className="h-8 w-8 text-[#0071cc]" />
              </div>
              <div className="text-4xl font-bold text-[#0071cc] mb-4">1</div>
              <h3 className="text-xl font-bold text-[#002d52] mb-2">Remplissez votre profil</h3>
              <p className="text-[#394756]">Quelques informations sur votre situation et vos besoins en santé</p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm text-center h-full flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-[#fff4e6] rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-[#f25305]" />
              </div>
              <div className="text-4xl font-bold text-[#f25305] mb-4">2</div>
              <h3 className="text-xl font-bold text-[#002d52] mb-2">Recevez une ou plusieurs offres</h3>
              <p className="text-[#394756]">Comparez les garanties et tarifs des meilleures mutuelles du marché</p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm text-center h-full flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-[#e6fff0] rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-[#008859]" />
              </div>
              <div className="text-4xl font-bold text-[#008859] mb-4">3</div>
              <h3 className="text-xl font-bold text-[#002d52] mb-2">Souscrivez en ligne ou avec un conseiller</h3>
              <p className="text-[#394756]">Finalisez votre contrat en quelques clics ou avec l'aide d'un expert</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
