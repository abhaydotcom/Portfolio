import { ArrowUpRight, Github } from "lucide-react"

export function Links({ demo, github, large }) {
  const base = large
    ? "flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 active:scale-95"
    : "flex items-center gap-1 text-xs font-medium transition-colors duration-200 active:opacity-60"

  return (
    <div className={`flex items-center gap-3 ${!large && "pt-3 border-t border-white/[0.06]"}`}>
      {demo && (
        <a href={demo} target="_blank" rel="noreferrer"
          className={large ? `${base} bg-white text-zinc-900 hover:bg-zinc-200` : `${base} text-zinc-300 hover:text-white`}>
          <ArrowUpRight size={13} /> Demo
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noreferrer"
          className={large ? `${base} border border-white/15 text-zinc-400 hover:border-white/30 hover:text-zinc-200` : `${base} text-zinc-600 hover:text-zinc-400`}>
          <Github size={13} /> Code
        </a>
      )}
    </div>
  )
}