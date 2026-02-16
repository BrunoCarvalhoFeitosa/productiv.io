"use client"
import { useState } from "react"
import { IoMdEye, IoMdEyeOff } from "react-icons/io"
import { FcGoogle } from "react-icons/fc"
import { FaChevronRight } from "react-icons/fa6"
import { TiHome } from "react-icons/ti"
import Link from "next/link"

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleShowOrHidePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="w-full min-h-116">
      <div className="absolute top-4 right-4 md:right-20 flex items-center gap-3">
        <Link href="/">
          <TiHome className="text-xl" />
        </Link>
        <div className="text-[10px]">
          <FaChevronRight />
        </div>
        <div className="flex items-center gap-1">
          <span>
            Já tem uma conta?
          </span>
          <span className="font-semibold underline text-[#183ec2]">
            <Link href="/account/sign-in">Acesse agora</Link>
          </span>
        </div>
      </div>
      <div className="mt-15 md:mt-0 mb-5">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
          <div className="flex flex-col">
            <h1 className="text-3xl">
              Cadastrar
            </h1>
            <p>
              Cadastre sua conta e comece a organizar-se.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <form className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-full">
              <label
                htmlFor="name"
                className="relative top-2 left-2 py-1 px-2 font-semibold cursor-pointer border border-neutral-200 bg-white rounded-md z-1"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                placeholder="Jonathan"
                className="py-3 px-3 w-full outline-none bg-neutral-100 rounded-md"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="surname"
                className="relative top-2 left-2 py-1 px-2 font-semibold cursor-pointer border border-neutral-200 bg-white rounded-md z-1"
              >
                Sobrenome
              </label>
              <input
                type="text"
                id="surname"
                placeholder="Doe"
                className="py-3 px-3 w-full outline-none bg-neutral-100 rounded-md"
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="relative top-2 left-2 py-1 px-2 font-semibold cursor-pointer border border-neutral-200 bg-white rounded-md z-1"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="jonathan_doe@email.com"
              className="py-3 px-3 w-full outline-none bg-neutral-100 rounded-md"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="password"
              className="relative top-2 left-2 py-1 px-2 font-semibold cursor-pointer border border-neutral-200 bg-white rounded-md z-1"
            >
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Insira sua senha"
                className="py-3 pl-3 pr-13 w-full outline-none bg-neutral-100 rounded-md"
              />
              <button
                type="button"
                className="absolute top-1/2 -translate-y-1/2 right-4"
                onClick={handleShowOrHidePassword}
              >
                {showPassword ? (
                  <IoMdEyeOff className="text-3xl text-neutral-300" />
                ) : (
                  <IoMdEye className="text-3xl text-neutral-300" />
                )}
              </button>
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="py-3 px-3 w-full outline-none bg-[#183ec2] rounded-lg text-white"
            >
              Cadastrar minha conta
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex-1 h-px bg-neutral-200" />
            <span className="text-sm">
              ou continue com
            </span>
            <span className="flex-1 h-px bg-neutral-200" />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="px-5 py-2 border border-neutral-200 rounded-md transition-all duration-200 hover:bg-neutral-100"
            >
              <FcGoogle className="text-2xl" />
            </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage
