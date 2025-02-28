import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
        <span className="text-primary-foreground font-bold">SR</span>
      </div>
      <span className="font-bold text-xl">Clínica San Roque</span>
    </Link>
  )
}

