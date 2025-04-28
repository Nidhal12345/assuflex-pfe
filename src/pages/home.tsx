import { Header } from "../components/home/header"
import HeroSection from "../components/home/hero-section"
import { AccountSection } from "../components/home/account-section"
import { WhyChooseSection } from "../components/home/why-choose-section"
import { HealthPackagesSection } from "../components/home/health-packages-section"
import { HowItWorksSection } from "../components/home/how-it-works-section"
import { TestimonialsSection } from "../components/home/testimonials-section"
import { CallToActionSection } from "../components/home/call-to-action-section"
import { NewsSection } from "../components/home/news-section"
import { AnimatePresence, motion } from "framer-motion"
import { FAQSection } from "../components/home/faq-section"
import Footer from "../components/shared/footer"
import { Loader } from "../components/shared/loader"
import { useEffect, useState } from "react"
function Home(){
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-white"
        >
        <Header />
        <main>
          <HeroSection />
          <AccountSection />
          <WhyChooseSection />
          <HealthPackagesSection />
          <NewsSection />
            <HowItWorksSection />
            <TestimonialsSection />
            <CallToActionSection />
          <FAQSection />
        </main>
        <Footer />
        </motion.div>
      )}
    </AnimatePresence>
      
    )
}

export default Home
