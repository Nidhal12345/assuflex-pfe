import { ArrowRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { Card, CardContent } from "../ui/card"
import { AnimatedSection, AnimatedText } from "./animated-section"
import { motion } from "framer-motion"

const newsItems = [
  {
    id: 1,
    category: "mutuelle Santé",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    date: "24.02.2023",
  },
  {
    id: 2,
    category: "mutuelle Santé",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    date: "26.01.2023",
  },
  {
    id: 3,
    category: "mutuelle Santé",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    date: "24.02.2023",
  },
  {
    id: 4,
    category: "mutuelle Santé",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    date: "15.03.2023",
  },
  {
    id: 5,
    category: "mutuelle Santé",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    date: "10.04.2023",
  },
]

export function NewsSection() {

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <AnimatedText>
            <h2 className="text-[#002d52] text-3xl font-bold">Nos Actualités</h2>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <a href="/actualites" className="text-[#008859] flex items-center group">
                Actualités
                <motion.div
                  className="ml-1"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 1 }}
                >
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </a>
            </motion.div>
          </AnimatedText>
        </div>

        <AnimatedSection delay={0.4}>
          <Carousel className="w-full relative">
            <CarouselContent>
              {newsItems.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/3">
                  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                    <Card className="bg-[#eef5f9] rounded-lg overflow-hidden border-none hover:shadow-lg transition-shadow duration-300">
                      <div className="h-48 bg-gray-200 overflow-hidden">
                        <motion.div
                          className="w-full h-full bg-gray-300"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="mb-2">
                          <span className="text-[#008859] text-xs">{item.category}</span>
                        </div>
                        <h3 className="text-[#002d52] font-medium mb-2">{item.title}</h3>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-80 transition-opacity duration-300" />
              <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-80 transition-opacity duration-300" />
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  )
}
