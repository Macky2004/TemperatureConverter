"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300/40 via-sky-300/40 to-orange-300/40 dark:from-pink-900/20 dark:via-sky-900/20 dark:to-orange-900/20" />

      {/* Animated flowing gradients */}
      <div className="absolute inset-0 opacity-60 dark:opacity-40">
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-sky-400 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "3s", animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-orange-400 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        />
      </div>

      {/* Flowing wave effect */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-sky-500/20 to-orange-500/20 animate-gradient-x" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
