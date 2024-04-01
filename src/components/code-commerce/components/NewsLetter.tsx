export const NewsLetter = () => {
  return (
    <div className="flex items-center justify-center gap-4 py-16 px-4">
      <div className="max-w-[1240px] flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:mr-10">
            <h1 className="text-3xl md:text-5xl font-bold">
              Join Our Newsletter
            </h1>
            <p className="text-xl md:text-2xl text-start text-gray-400">
              Stay up to date with our latest news and products.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-slate-200 text-black py-2 px-4 rounded-md"
            />
            <button className="bg-slate-200 text-black py-2 px-4 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
