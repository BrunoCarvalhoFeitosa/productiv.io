"use client"
import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="fixed top-11 md:top-10 py-3 md:py-4 px-5 w-full backdrop-blur-sm z-999">
      <div className="mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
        <div className="w-full flex justify-between items-center">
          <div className="overflow-hidden">
            <Link href="/">
              <Image
                src="/images/common/logo.png"
                alt="Logo"
                width={45}
                height={45}
                className="w-9 h-9 md:w-full md:h-full"
              />
            </Link>
          </div>
          <div className="flex flex-1 justify-end">
            <nav>
              <ul className="flex items-center gap-6">
                <li className="text-neutral-700 hover:text-neutral-900 hover:scale-110 transition-transform duration-200 cursor-pointer">
                  Sobre
                </li>
                <li className="text-neutral-700 hover:text-neutral-900 hover:scale-110 transition-transform duration-200 cursor-pointer">
                  Serviços
                </li>
                <li className="text-neutral-700 hover:text-neutral-900 hover:scale-110 transition-transform duration-200 cursor-pointer">
                  Clientes
                </li>
                <li className="hidden md:block text-neutral-700 hover:text-neutral-900 hover:scale-110 transition-transform duration-200 cursor-pointer">
                  Atualizações
                </li>
                <li className="text-neutral-700 hover:text-neutral-900 hover:scale-110 transition-transform duration-200 cursor-pointer">
                  Ajuda
                </li>
                <li className="hidden md:block text-neutral-700 hover:text-neutral-900 hover:scale-110 transition-transform duration-200 cursor-pointer">
                  <Link
                    href="/account/sign-up"
                    className="px-5 py-3 bg-black rounded-xl text-white"
                  >
                    Cadastre-se agora
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}