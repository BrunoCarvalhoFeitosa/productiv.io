"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import { Tag } from "../../common/tag"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export const FeaturesSection = () => {
  const pyramidRef = useRef<HTMLDivElement>(null)
  const tubeRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(pyramidRef.current, {
        y: 140,
        ease: "none",
        scrollTrigger: {
          trigger: pyramidRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })

      gsap.to(tubeRef.current, {
        y: -200,
        ease: "none",
        scrollTrigger: {
          trigger: tubeRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-28 w-full bg-linear-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-clip">
      <div className="mx-auto px-5 md:max-w-sm lg:max-w-xl xl:max-w-2xl flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <Tag>
            Aumente sua produtividade
          </Tag>
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <h2 className="text-[22px] md:text-2xl lg:text-4xl xl:text-5xl font-bold text-center tracking-tigher bg-linear-to-b from-black to-[#001e80] text-transparent bg-clip-text">
            Uma forma mais eficaz de acompanhar o progresso.
          </h2>
          <p className="lg:px-22 text-xl text-[#010d3e] tracking-tight text-center">
            Transforme suas ideias, crie boards e integre pessoas para colaborar. Receba notificações em tempo real e acompanhe o progresso da sua equipe.
          </p>
        </div>
      </div>
      <div className="relative mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
        <div ref={pyramidRef} className="absolute -top-16 lg:-top-10 xl:-top-5 -right-15 md:-right-10 lg:-right-30 xl:-right-25 z-1">
          <Image
            src="/images/features/image-pyramid.png"
            alt="Pirâmide"
            width={200}
            height={200}
          />
        </div>
        <div className="pt-6 flex justify-center">
          <Image
            src="/images/features/image-product-preview.png"
            alt="Imagem de pré-visualização do produto"
            width={1500}
            height={1500}
            className="md:w-[80%] lg:w-full lg:h-full"
          />
        </div>
        <div ref={tubeRef} className="absolute md:-bottom-28 lg:-bottom-40 xl:-bottom-24 -left-14 md:-left-14 lg:-left-23 xl:-left-24 z-1">
          <Image
            src="/images/features/image-tube.png"
            width={200}
            height={200}
            alt="Tubo"
          />
        </div>
      </div>
    </section>
  )
}
