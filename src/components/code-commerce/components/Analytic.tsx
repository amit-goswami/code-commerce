'use client'

export const Analytic = () => {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className="flex items-center justify-center gap-4 py-16 px-4">
      <div className="max-w-[1240px] flex flex-col md:flex-row items-center justify-center gap-4">
        <img
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          alt="Analytics"
          className="w-[500px] object-cover rounded-md shadow-lg"
        />
        <div className="flex flex-col items-start justify-center space-y-2">
          <h1 className="text-3xl md:text-5xl font-bold">Analytics</h1>
          <p className="text-xl md:text-2xl text-start text-gray-400">
            Get insights on your store's performance with our analytics
            dashboard.
          </p>
          <button
            className="bg-slate-200 text-black py-2 px-4 rounded-md mt-4"
            onClick={scroll}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
