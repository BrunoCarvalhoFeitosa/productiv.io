"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import { RightArrowIcon } from "../../ui/icons/right-arrow"
import Image from "next/image"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export const SignUpSection = () => {
  const starRef = useRef<HTMLDivElement>(null)
  const springRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(starRef.current, {
        y: 140,
        ease: "none",
        scrollTrigger: {
          trigger: starRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })

      gsap.to(springRef.current, {
        y: 140,
        ease: "none",
        scrollTrigger: {
          trigger: springRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="pt-70 md:pt-50 lg:pt-28 pb-50 md:pb-30 xl:pb-60 px-5 w-full bg-linear-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-clip">
      <div className="relative mx-auto md:max-w-lg lg:max-w-lg xl:max-w-2xl">
        <div ref={starRef} className="absolute -top-100 md:-top-70 lg:-top-50 xl:-top-35 -left-32 md:-left-60 lg:-left-85 xl:-left-90 z-1">
          <Image
            src="/images/sign-up/image-star.png"
            alt="Estrela"
            width={400}
            height={400}
            className="scale-50 lg:scale-75 xl:scale-100"
          />
        </div>
        <div ref={springRef} className="absolute top-33 md:-top-9 lg:-top-5 xl:-top-14 -right-28 md:-right-55 lg:-right-72 xl:-right-70 z-1">
          <Image
            src="/images/sign-up/image-spring.png"
            alt="Espiral"
            width={400}
            height={400}
            className="scale-50 lg:scale-75 xl:scale-100"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-[22px] md:text-2xl lg:text-4xl xl:text-5xl font-bold text-center tracking-tigher bg-linear-to-b from-black to-[#001e80] text-transparent bg-clip-text">
            Cadastre-se gratuitamente hoje mesmo
          </h5>
          <p className="text-lg xl:text-xl text-[#010d3e] tracking-tight text-center">
            Celebre a alegria da conquista com um aplicativo desenvolvido para acompanhar seu progresso e motivar seus esforços.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
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
      </div>
    </section>
  )
}
