"use client"

interface TagProps {
  children: React.ReactNode
}

export const Tag = ({ children }: TagProps) => {
  return (
    <div className="w-fit py-1.5 px-3 border border-neutral-800 rounded-md text-sm">
      {children}
    </div>
  )
}