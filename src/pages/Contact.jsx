import { Github, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import toast from 'react-hot-toast'

const EASE = [0.16, 1, 0.3, 1]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: EASE, delay },
})

const links = [
  {
    icon: Mail,
    label: 'abhaykrsingh2904@gmail.com',
    href: 'mailto:abhaykrsingh2904@gmail.com',
  },
  {
    icon: Github,
    label: 'github.com/abhaydotcom',
    href: 'https://github.com/abhaydotcom',
  },
  {
    icon: Linkedin,
    label: 'linkedin.com/in/abhaydotcom',
    href: 'https://linkedin.com/in/abhaydotcom',
  },
  {
    icon: Phone,
    label: '+990273032',
    href: 'tel:+990273032',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message)
      return toast.error('Please fill all fields.')

    setSending(true)
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form,
        import.meta.env.VITE_PUBLIC_KEY
      )
      toast.success('Message sent!')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      toast.error('Service unavailable. Try again later.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      className="min-h-screen bg-zinc-950 px-4 sm:px-10 py-20 sm:py-28"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400&family=DM+Sans:wght@400;500&display=swap');`}</style>

      <div className="mx-auto max-w-6xl">

        {/* Label */}
        <motion.div {...fade()} className="flex items-center gap-3 mb-10 sm:mb-14">
          <span className="w-5 h-px bg-zinc-700" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-600">
            Get In Touch
          </span>
        </motion.div>

        {/* Heading */}
        <div className="mb-14 sm:mb-20">
          <motion.h2
            {...fade(0.05)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Let's work<br />
            <span className="text-zinc-700">together.</span>
          </motion.h2>
          <motion.p
            {...fade(0.15)}
            className="mt-4 text-sm sm:text-base text-zinc-500 max-w-sm leading-relaxed"
          >
            Have a project, collaboration, or just want to say hi?{' '}
            <span className="text-zinc-300 font-medium">Drop a message</span> — I usually reply within a few hours.
          </motion.p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4">


          <motion.div
            {...fade(0.1)}
            className="rounded-2xl border border-white/[0.07] bg-zinc-900 p-6 sm:p-10"
          >
            <div className="flex flex-col gap-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono tracking-widest uppercase text-zinc-600">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-zinc-950 border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/20 transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono tracking-widest uppercase text-zinc-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-zinc-950 border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/20 transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono tracking-widest uppercase text-zinc-600">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full bg-zinc-950 border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/20 transition-colors duration-200 resize-none"
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                disabled={sending}
                className="flex items-center justify-center gap-2 w-full sm:w-auto sm:self-end px-8 py-3.5 rounded-xl bg-white text-zinc-900 text-sm font-semibold tracking-wide hover:bg-zinc-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? 'Sending…' : 'Send Message'}
                {!sending && <ArrowUpRight size={15} />}
              </motion.button>

            </div>
          </motion.div>

          
          <motion.div
            {...fade(0.2)}
            className="rounded-2xl border border-white/[0.07] bg-zinc-900 p-6 sm:p-8 flex flex-col justify-between gap-10"
          >
            <div>
              <p className="text-[10px] font-mono tracking-widest uppercase text-zinc-600 mb-6">
                Contact Info
              </p>
              <ul className="flex flex-col gap-5">
                {links.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <Link
                      to={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 text-sm text-zinc-500 hover:text-white transition-colors duration-200"
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-950 border border-white/[0.07] group-hover:border-white/15 transition-colors duration-200">
                        <Icon size={14} className="text-zinc-500 group-hover:text-white transition-colors duration-200" />
                      </span>
                      <span className="truncate">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/[0.06]">
              <p className="text-[10px] font-mono tracking-widest uppercase text-zinc-700 mb-3">
                Availability
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-sm text-zinc-400">Open to new opportunities</span>
              </div>
            </div>
          </motion.div>

        </div>

        <motion.div {...fade(0.3)} className="flex items-center gap-4 mt-14 sm:mt-20">
          <span className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-700">
            Looking forward to hearing from you
          </span>
          <span className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

      </div>
    </section>
  )
}