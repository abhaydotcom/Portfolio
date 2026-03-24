import { Link } from "react-router-dom";
import { motion} from 'framer-motion'
export function NavLink({ link, active }) {
  return (
    <Link to={link.path} className="relative group flex items-baseline gap-1.5 py-1">
      
      <span
        className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
          active ? 'text-[#e2ff5d]' : 'text-white/50 group-hover:text-white'
        }`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {link.name}
      </span>

      <motion.span
        className="absolute bottom-0 left-0 h-px bg-[#e2ff5d]"
        initial={false}
        animate={{ width: active ? '100%' : '0%' }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
      {!active && (
        <span className="absolute bottom-0 left-0 h-px bg-white/30 w-0 group-hover:w-full transition-all duration-300" />
      )}
    </Link>
  )
}