"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import { customersData, testomonialsData } from "@/app/constants"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

interface AccountLayoutPageProps {
  children: React.ReactNode
}

const AccountLayoutPage = ({ children }: AccountLayoutPageProps) => {
  const cylinderRef = useRef<HTMLDivElement>(null)
  const noodleRef = useRef<HTMLDivElement>(null)
  const column1Ref = useRef<HTMLDivElement | null>(null)
  const column2Ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!column1Ref.current || !column2Ref.current) {
      return
    }

    const ctx = gsap.context(() => {
      const createInfiniteColumn = (element: HTMLDivElement, direction: 1 | -1) => {
        const height = element.scrollHeight / 2
        let y = 0

        const setY = gsap.quickSetter(element, "y", "px")
        gsap.set(element, { willChange: "transform" })

        const speed = 0.15

        const update = () => {
          y += speed * direction

          if (y <= -height) y += height
          if (y >= height) y -= height

          setY(y)
        }

        gsap.ticker.add(update)

        return () => {
          gsap.ticker.remove(update)
        }
      }

      const cleanup1 = createInfiniteColumn(column1Ref.current!, -1)
      const cleanup2 = createInfiniteColumn(column2Ref.current!, 1)

      return () => {
        cleanup1()
        cleanup2()
      }
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(cylinderRef.current, {
        y: -18, 
        duration: 1.2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      })

      gsap.to(noodleRef.current, {
        y: -18, 
        duration: 1.2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="relative w-full h-dvh flex overflow-hidden">
      <div ref={cylinderRef} className="absolute top-14 md:top-2 -left-8 md:-left-15 z-1">
        <Image
          src="/images/hero/image-cylinder.png"
          alt="Cilindro"
          width={230}
          height={230}
          className="w-31 h-31 md:w-57.5 md:h-57.5"
        />
      </div>
      <div ref={noodleRef} className="absolute bottom-0 -right-4 md:right-0 z-1">
        <Image
          src="/images/hero/image-noodle.png"
          width={200}
          height={200}
          alt="Espiral"
          className="w-31 h-31 md:w-57.5 md:h-57.5"
        />
      </div>
      <div className="relative hidden xl:block xl:w-[50%] bg-[radial-gradient(ellipse_100%_150%_at_bottom_left,#eaeefe,#183ec2_100%)] overflow-hidden">
        <div className="mx-auto px-8 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl flex items-center gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-145 2xl:max-h-dvh overflow-hidden">
          <div ref={column1Ref} className="flex flex-1 flex-col gap-y-4">
            {[...testomonialsData.slice(0, 3), ...testomonialsData.slice(0, 3)].map((item, index) => (
              <div
                key={index}
                className="p-5 min-h-45 bg-white border-neutral-300 rounded-lg shadow"
              >
                <div className="mb-4">
                  <p className="text-sm">
                    {item.clientOpinion}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <Image
                      src={item.clientPicture}
                      alt={item.clientName}
                      width={50}
                      height={50}
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
          <div className="hidden lg:flex flex-1">
            <div ref={column2Ref} className="flex flex-col gap-y-4">
              {[...testomonialsData.slice(3, 6), ...testomonialsData.slice(3, 6)].map((item, index) => (
                <div
                  key={index}
                  className="p-5 min-h-45 bg-white border-neutral-300 rounded-lg shadow"
                >
                  <div className="mb-4">
                    <p className="text-sm">
                      {item.clientOpinion}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div>
                      <Image
                        src={item.clientPicture}
                        alt={item.clientName}
                        width={50}
                        height={50}
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
      </div>
      <div className="relative pt-10 px-5 md:px-20 w-full lg:w-[50%] flex-1 flex flex-col justify-center items-center bg-white overflow-hidden">
        {children}
      </div>
    </main>
  )
}

export default AccountLayoutPage
