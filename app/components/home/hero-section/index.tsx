"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import { Tag } from "../../common/tag"
import { RightArrowIcon } from "../../ui/icons/right-arrow"
import Image from "next/image"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export const HeroSection = () => {
  const cylinderRef = useRef<HTMLDivElement>(null)
  const cogRef = useRef<HTMLDivElement>(null)
  const noodleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(cylinderRef.current, {
        y: 140,
        ease: "none",
        scrollTrigger: {
          trigger: cylinderRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })

      gsap.to(cogRef.current, {
        y: -18, 
        duration: 1.2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      })

      gsap.to(noodleRef.current, {
        y: -200,
        ease: "none",
        scrollTrigger: {
          trigger: noodleRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="px-5 pt-8 pb-20 md:pb-10 w-full bg-[radial-gradient(ellipse_100%_200%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip">
      <div className="mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-6xl flex flex-col lg:flex-row lg:gap-18">
        <div className="pt-35 lg:pt-40 flex w-full lg:w-[45%] flex-col gap-4 lg:gap-6">
          <Tag>
            Productiv.io versão 2.0 disponível
          </Tag>
          <h1 className="text-[22px] md:text-4xl xl:text-6xl font-bold tracking-tigher bg-linear-to-b from-black to-[#001e80] text-transparent bg-clip-text">
            Caminho para a produtividade
          </h1>
          <p className="text-lg xl:text-xl text-[#010d3e] tracking-tight">
            Celebre a alegria da conquista com um aplicativo desenvolvido para acompanhar seu progresso, motivar seus esforços e comemorar seu sucesso.
          </p>
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row items-center xl:items-start gap-2">
            <Link
              href="/account/sign-in"
              className="py-2 lg:py-3 px-5 w-full md:w-fit lg:w-full xl:w-fit bg-black rounded-xl text-white transition-transform duration-200 hover:scale-110"
            >
              Comece agora e de graça
            </Link>
            <button
              type="button"
              className="py-2 px-4 w-full md:w-fit lg:w-full xl:w-fit flex justify-center items-center gap-1 font-semibold text-black"
            >
              Saiba mais
              <RightArrowIcon width="22" height="22" fill="#000" />
            </button>
          </div>
        </div>
        <div className="relative pt-20 w-full lg:w-[55%]">
          <div ref={cylinderRef} className="absolute -top-16 lg:-top-10 xl:-top-5 -left-22 md:-left-10 lg:-left-30 xl:-left-25 z-1">
            <Image
              src="/images/hero/image-cylinder.png"
              alt="Cilindro"
              width={200}
              height={200}
            />
          </div>
          <div ref={cogRef} className="pt-6 flex justify-center">
            <Image
              src="/images/hero/image-cog.png"
              alt="Engrenagem"
              width={1500}
              height={1500}
              className="md:w-[80%] lg:w-full lg:h-full"
            />
          </div>
          <div ref={noodleRef} className="absolute md:-bottom-28 lg:-bottom-40 xl:-bottom-24 -right-14 md:-right-14 lg:-right-23 xl:-right-24 z-1">
            <Image
              src="/images/hero/image-noodle.png"
              width={200}
              height={200}
              alt="Espiral"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
