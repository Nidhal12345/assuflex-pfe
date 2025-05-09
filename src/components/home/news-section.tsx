import { ArrowRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { Card, CardContent } from "../ui/card"
import { AnimatedSection, AnimatedText } from "./animated-section"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const newsItems = [
  {
    id: 1,
    category: "Mutuelle Santé",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    date: "24.02.2025",
    alt: "Health insurance consultation",
  },
  {
    id: 2,
    category: "Mutuelle Santé",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    date: "26.01.2025",
    alt: "Medical consultation",
  },
  {
    id: 3,
    category: "Mutuelle Santé",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    date: "24.02.2025",
    alt: "Family health coverage",
  },
  {
    id: 4,
    category: "Mutuelle Santé",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    date: "15.03.2025",
    alt: "Healthcare professionals",
  },
  {
    id: 5,
    category: "Mutuelle Santé",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    date: "10.04.2025",
    alt: "Digital health services",
  },
]


const placeholderImages = [
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop",
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
              <Link to={"/actualites"} className="text-[#008859] flex items-center group">
                Actualités
                <motion.div
                  className="ml-1"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 1 }}
                >
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </Link>
            </motion.div>
          </AnimatedText>
        </div>

        <AnimatedSection delay={0.4}>
          <Carousel className="w-full relative">
            <CarouselContent>
              {newsItems.map((item, index) => (
                <CarouselItem key={item.id} className="md:basis-1/3 p-2">
                  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="h-full">
                    <Card className="bg-[#eef5f9] rounded-lg overflow-hidden border-none hover:shadow-lg transition-shadow duration-300 h-full">
                      <div className="h-48 overflow-hidden relative">
                        <motion.div
                          className="w-full h-full"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-500"
                            style={{
                              backgroundImage: `url(${placeholderImages[index % placeholderImages.length]})`,
                            }}
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                      </div>
                      <CardContent className="p-4">
                        <div className="mb-2">
                          <span className="text-[#008859] text-xs font-medium">{item.category}</span>
                        </div>
                        <h3 className="text-[#002d52] font-medium mb-2 line-clamp-2">{item.title}</h3>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute left-1 top-1/2 transform -translate-y-1/2">
              <CarouselPrevious className="bg-white text-[#002d52] border border-gray-200 shadow-md hover:bg-[#eef5f9] hover:text-[#008859] transition-colors duration-300" />
            </div>
            <div className="absolute right-1 top-1/2 transform -translate-y-1/2">
              <CarouselNext className="bg-white text-[#002d52] border border-gray-200 shadow-md hover:bg-[#eef5f9] hover:text-[#008859] transition-colors duration-300" />
            </div>
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  )
}
