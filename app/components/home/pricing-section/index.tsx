"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Tag } from "../../common/tag"
import { CheckedIcon } from "../../ui/icons/checked"
import Link from "next/link"

export const PricingSection = () => {
  const popularRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (!popularRef.current) {
      return
    }

    gsap.to(popularRef.current, {
      backgroundPosition: "200% center",
      duration: 3,
      ease: "none",
      repeat: -1,
      yoyo: false
    })
  }, [])

  return (
    <section className="py-28 w-full">
      <div className="mx-auto px-5 md:max-w-sm lg:max-w-xl xl:max-w-3xl flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <Tag>
            Preço competitivo
          </Tag>
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <h2 className="text-[22px] md:text-2xl lg:text-4xl xl:text-5xl font-bold text-center tracking-tigher bg-linear-to-b from-black to-[#001e80] text-transparent bg-clip-text">
            Preço
          </h2>
          <p className="lg:px-22 text-xl text-[#010d3e] tracking-tight text-center">
            Gratuito para sempre. Atualize o plano para tarefas ilimitadas, maior segurança, maior armazenamento, suporte e recursos exclusivos que farão você evoluir.
          </p>
        </div>
      </div>
      <div className="mt-16 px-5 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-3 xl:gap-10">
          <div className="lg:mt-30 flex flex-col gap-6 p-10 h-fit shadow-2xl rounded-lg border border-neutral-200">
            <div>
              <h4 className="text-xl font-semibold tracking-wider text-neutral-500">
                Gratuito
              </h4>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-4xl font-extrabold tracking-tighter">
                $0
              </span>
              <span className="font-semibold text-neutral-500">
                /mês
              </span>
            </div>
            <div className="w-full">
              <Link
                href="/account/sign-up"
                className="py-2 px-3 flex justify-center w-full bg-black rounded-lg text-white"
              >
                Comece agora e de graça
              </Link>
            </div>
            <div className="w-full">
              <ul className="flex flex-col gap-y-6">
                <li className="flex items-center gap-2 text-sm">
                  <CheckedIcon width="25" height="22" fill="#000" />
                  Até 5 membros por projeto
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckedIcon width="25" height="22" fill="#000" />
                  Tarefas e projetos ilimitados
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckedIcon width="25" height="22" fill="#000" />
                  Armazenamento de 2 GB
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckedIcon width="25" height="22" fill="#000" />
                  Integrações
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckedIcon width="25" height="22" fill="#000" />
                  Suporte básico
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:mt-15 flex flex-col gap-6 p-10 h-fit shadow-2xl rounded-lg bg-[linear-gradient(to_right,#1c1c1c,#000)] bg-size-[200%]">
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-semibold tracking-wider text-neutral-500">
                Pro
              </h4>
              <span ref={popularRef} className="py-1 px-3 bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] bg-size-[200%] text-transparent bg-clip-text border border-neutral-700 rounded-md text-lg">
                Popular
              </span>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-4xl font-extrabold tracking-tighter text-white">
                $9
              </span>
            </div>
            <div className="w-full">
              <Link
                href="/account/sign-up"
                className="py-2 px-3 flex justify-center w-full bg-white rounded-lg text-black"
              >
                Cadastre-se agora
              </Link>
            </div>
            <div className="w-full">
              <ul className="flex flex-col gap-y-6">
                <li className="flex items-center gap-2 text-sm text-white">
                  <CheckedIcon width="25" height="22" fill="#fff" />
                  Até 50 membros por projeto
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <CheckedIcon width="25" height="22" fill="#fff" />
                  Tarefas e projetos ilimitados
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <CheckedIcon width="25" height="22" fill="#fff" />
                  Armazenamento de 50 GB
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <CheckedIcon width="25" height="22" fill="#fff" />
                  Integrações
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <CheckedIcon width="25" height="22" fill="#fff" />
                  Suporte priorizado
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <CheckedIcon width="25" height="22" fill="#fff" />
                  Suporte avançado 24 horas
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <CheckedIcon width="25" height="22" fill="#fff" />
                  Exportação de documentos
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-10 h-fit shadow-2xl rounded-lg border border-neutral-200">
            <div>
              <h4 className="text-xl font-semibold tracking-wider text-neutral-500">
                Enterprise
              </h4>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-4xl font-extrabold tracking-tighter">
                $19
              </span>
              <span className="font-semibold text-neutral-500">
                /mês
              </span>
            </div>
            <div className="w-full">
              <Link
                href="/account/sign-up"
                className="py-2 px-3 flex justify-center w-full bg-black rounded-lg text-white"
              >
                Cadastre-se agora
              </Link>
            </div>
            <div className="w-full">
              <ul className="flex flex-col gap-y-6">
                <li className="flex items-center gap-2 text-sm">
                  <CheckedIcon width="25" height="22" fill="#000" />
                  Até 50 membros por projeto
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckedIcon width="25" height="22" fill="#000" />
                  Tarefas e projetos ilimitados
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckedIcon width="25" height="22" fill="#000" />
                  Armazenamento de 200 GB
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckedIcon width="25" height="22" fill="#000" />
                  Integrações
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckedIcon width="25" height="22" fill="#000" />
                  Suporte priorizado
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckedIcon width="25" height="22" fill="#000" />
                  Suporte avançado 24 horas
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckedIcon width="25" height="22" fill="#000" />
                  Exportação de documentos
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckedIcon width="25" height="22" fill="#000" />
                  Gerente de conta dedicado
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckedIcon width="25" height="22" fill="#000" />
                  Campos personalizados
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckedIcon width="25" height="22" fill="#000" />
                  Análise de dados avançada
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckedIcon width="25" height="22" fill="#000" />
                  Acesso a API
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
