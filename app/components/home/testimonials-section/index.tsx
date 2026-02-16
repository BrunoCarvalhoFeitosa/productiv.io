"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Tag } from "../../common/tag"
import { testomonialsData } from "@/app/constants"
import Image from "next/image"

export const TestimonialsSection = () => {
  const column1Ref = useRef<HTMLDivElement | null>(null)
  const column2Ref = useRef<HTMLDivElement | null>(null)
  const column3Ref = useRef<HTMLDivElement | null>(null)
  const directionRef = useRef<1 | -1>(-1)
  const lastScrollTop = useRef<number>(0)

  useEffect(() => {
    if (!column1Ref.current || !column2Ref.current || !column3Ref.current) {
      return
    }

    const ctx = gsap.context(() => {
      const createInfiniteColumn = (
        element: HTMLDivElement,
      ) => {
        const height = element.scrollHeight / 2
        const speedBase = 0.35
        let y = 0

        const setY = gsap.quickSetter(element, "y", "px")
        gsap.set(element, { willChange: "transform" })

        const update = () => {
          y += speedBase * directionRef.current

          if (y <= -height) y += height
          if (y >= height) y -= height

          setY(y)
        }

        gsap.ticker.add(update)

        return () => {
          gsap.ticker.remove(update)
        }
      }

      const cleanup1 = createInfiniteColumn(column1Ref.current!)
      const cleanup2 = createInfiniteColumn(column2Ref.current!)
      const cleanup3 = createInfiniteColumn(column3Ref.current!)

      const onScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop

        if (scrollTop > lastScrollTop.current) {
          directionRef.current = -1
        } else if (scrollTop < lastScrollTop.current) {
          directionRef.current = 1
        }

        lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop
      }

      window.addEventListener("scroll", onScroll)

      return () => {
        cleanup1()
        cleanup2()
        cleanup3()
        window.removeEventListener("scroll", onScroll)
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="w-full">
      <div className="mx-auto px-5 md:max-w-sm lg:max-w-xl xl:max-w-3xl flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <Tag>
            Opiniões dos nossos clientes
          </Tag>
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <h2 className="text-[22px] md:text-2xl lg:text-4xl xl:text-5xl font-bold text-center tracking-tigher bg-linear-to-b from-black to-[#001e80] text-transparent bg-clip-text">
            O que nossos clientes dizem da ferramenta
          </h2>
          <p className="lg:px-22 text-xl text-[#010d3e] tracking-tight text-center">
            Do design fácil e intuitivo aos recursos poderosos, nosso aplicativo se tornou uma ferramenta essencial para usuários em todo o mundo, tornando-se indispensável.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-25 px-5 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl flex items-center gap-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-184.5 overflow-hidden">
        <div ref={column1Ref} className="flex flex-col gap-y-8">
          {[...testomonialsData.slice(0, 3), ...testomonialsData.slice(0, 3)].map((item, index) => (
            <div
              key={index}
              className="p-6 border-neutral-300 rounded-lg shadow"
            >
              <div className="mb-4">
                <p className="text-base">
                  {item.clientOpinion}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src={item.clientPicture}
                    alt={item.clientName}
                    width={60}
                    height={60}
                    className="grayscale-100"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold leading-none">
                    {item.clientName}
                  </span>
                  <span className="leading-none">
                    {item.clientSocialMedia}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          <div ref={column2Ref} className="flex flex-col gap-y-8">
            {[...testomonialsData.slice(3, 6), ...testomonialsData.slice(3, 6)].map((item, index) => (
              <div
                key={index}
                className="p-6 border-neutral-300 rounded-lg shadow"
              >
                <div className="mb-4">
                  <p className="text-base">
                    {item.clientOpinion}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <Image
                      src={item.clientPicture}
                      alt={item.clientName}
                      width={60}
                      height={60}
                      className="grayscale-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold leading-none">
                      {item.clientName}
                    </span>
                    <span className="leading-none">
                      {item.clientSocialMedia}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <div ref={column3Ref} className="flex flex-col gap-y-8">
            {[...testomonialsData.slice(6, 9), ...testomonialsData.slice(6, 9)].map((item, index) => (
              <div
                key={index}
                className="p-6 border-neutral-300 rounded-lg shadow"
              >
                <div className="mb-4">
                  <p className="text-base">
                    {item.clientOpinion}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <Image
                      src={item.clientPicture}
                      alt={item.clientName}
                      width={60}
                      height={60}
                      className="grayscale-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold leading-none">
                      {item.clientName}
                    </span>
                    <span className="leading-none">
                      {item.clientSocialMedia}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
