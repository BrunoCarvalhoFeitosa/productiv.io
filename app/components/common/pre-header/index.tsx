"use client"
import Link from "next/link"
import { RightArrowIcon } from "../../ui/icons/right-arrow"

export const PreHeader = () => {
  return (
    <div className="px-5 py-3 fixed top-0 w-full flex flex-col md:flex-row justify-center items-center gap-4 bg-black z-999">
      <div className="hidden md:block">
        <p className="text-sm text-neutral-400">
          Otimize seu fluxo de trabalho e aumente sua produtividade.
        </p>
      </div>
      <div className="text-sm text-white">
         <Link
            href="/account/sign-up"
            className="flex items-center gap-2"
          >
          Cadastre-se agora
          <RightArrowIcon width="18" height="18" fill="#fff" />
        </Link>
      </div>
    </div>
  )
}