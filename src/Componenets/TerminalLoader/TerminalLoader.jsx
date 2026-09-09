import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * TerminalLoader - Full-screen terminal-style loading screen
 *
 * Features:
 * - Symbol: </> with authentic blinking cursor (_)
 * - Theme: Portfolio color scheme (accent blue #3b82f6 / #60a5fa, gradient accents, surface tones)
 * - Split Curtain Animation: Black background split into 2 halves (top half slides UP, bottom half slides DOWN)
 * - 3-second loader sequence with smooth progress line and percentage
 * - Zero layout shift or pre-render flash
 */
export default function TerminalLoader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Lock body scrolling while the terminal loader is active
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Smooth percentage counter reaching 100% around 2.5s
    const startTime = performance.now()
    const counterDuration = 2500

    let animationFrameId
    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime
      const current = Math.min(100, Math.round((elapsed / counterDuration) * 100))
      setProgress(current)

      if (elapsed < counterDuration) {
        animationFrameId = requestAnimationFrame(updateProgress)
      } else {
        setProgress(100)
      }
    }

    animationFrameId = requestAnimationFrame(updateProgress)

    // Trigger split curtain exit animation at 2.8s
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 2800)

    // Complete and unmount after split curtain transition finishes (~3.55s total)
    const completeTimer = setTimeout(() => {
      if (onComplete) {
        onComplete()
      }
    }, 3550)

    return () => {
      cancelAnimationFrame(animationFrameId)
      clearTimeout(exitTimer)
      clearTimeout(completeTimer)
      document.body.style.overflow = previousOverflow
    }
  }, [onComplete])

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none select-none overflow-hidden"
      aria-label="Terminal Loading Screen"
      role="status"
    >
      {/* Top Half Curtain (slides upward on exit) */}
      <motion.div
        initial={{ y: '0%' }}
        animate={isExiting ? { y: '-100%' } : { y: '0%' }}
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1], // Smooth cinematic split easing
        }}
        className="absolute inset-x-0 top-0 h-[50.5%] bg-black pointer-events-auto border-b border-accent-500/10"
      />

      {/* Bottom Half Curtain (slides downward on exit) */}
      <motion.div
        initial={{ y: '0%' }}
        animate={isExiting ? { y: '100%' } : { y: '0%' }}
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute inset-x-0 bottom-0 h-[50.5%] bg-black pointer-events-auto border-t border-accent-500/10"
      />

      {/* Centered Content (fades out as curtains split open) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto z-20 px-6">
        <motion.div
          animate={isExiting ? { opacity: 0, scale: 0.96 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex flex-col items-center w-full max-w-xs sm:max-w-sm"
        >
          {/* Terminal Symbol: </> with matching portfolio gradient and blinking cursor */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex items-center justify-center font-mono text-3xl sm:text-4xl font-bold tracking-wider mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-accent-400 select-none">
              &lt;/&gt;
            </span>
            <span className="inline-block text-accent-400 animate-terminal-blink ml-1.5 select-none font-light">
              {/* _ */}
            </span>
          </motion.div>

          {/* Horizontal Progress Line matching portfolio accent blue/indigo palette */}
          <div className="w-56 sm:w-64 md:w-72 h-[2.5px] bg-surface-800/90 border border-white/5 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-full bg-gradient-to-r from-accent-600 via-accent-400 to-indigo-400 shadow-[0_0_12px_rgba(59,130,246,0.6)] rounded-full"
            />
          </div>

          {/* Minimal Status & Progress Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="w-56 sm:w-64 md:w-72 flex justify-between items-center mt-3 font-mono text-[11px] tracking-wider"
          >
            <span className="text-slate-500 uppercase tracking-widest text-[10px]">
              {progress < 100 ? 'initializing' : 'ready'}
            </span>
            <span className="tabular-nums text-accent-300 font-medium">
              {progress}%
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
