export const HeroSection = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-[800px] flex flex-col items-center justify-center h-screen p-2 space-y-2">
        <h1 className="text-3xl md:text-5xl font-bold">Code Commerce</h1>
        <p className="text-xl md:text-2xl text-start text-gray-400">
          A simple e-commerce website built with React, Tailwind CSS, and
          TypeScript A simple e-commerce website built with React, Tailwind CSS,
          and TypeScript
        </p>
        <button className="bg-slate-200 text-black py-2 px-4 rounded-md mt-4">
          Get Started
        </button>
      </div>
    </section>
  )
}
