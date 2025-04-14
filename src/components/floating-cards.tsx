"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { EXAMPLE_COURSES } from "@/lib/example-data"

const cards = EXAMPLE_COURSES.map((course, index) => ({
  image: course.image,
  title: course.title,
  rotation: [-15, 15, -10, 20][index % 4],
  x: ["10%", "80%", "20%", "70%"][index % 4],
  y: ["10%", "20%", "70%", "60%"][index % 4],
}))

export function FloatingCards() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="absolute w-64 h-40 rounded-xl overflow-hidden shadow-lg"
          initial={{ 
            x: card.x, 
            y: card.y, 
            rotate: card.rotation,
            scale: 0
          }}
          animate={{ 
            scale: 1,
            y: [card.y, `calc(${card.y} - 20px)`, card.y],
            rotate: [card.rotation, card.rotation + 5, card.rotation],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover opacity-50"
              sizes="(max-width: 768px) 100vw, 256px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10" />
          </div>
        </motion.div>
      ))}
    </div>
  )
} 