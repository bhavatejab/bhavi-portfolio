export default function Projects() {
  return (
    <section id = "projects" className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold">
            Portfolio Website
          </h3>

          <p className="text-gray-400 mt-3">
            Modern portfolio built using Next.js.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold">
            Weather App
          </h3>

          <p className="text-gray-400 mt-3">
            Weather app using API integration.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold">
            Notes App
          </h3>

          <p className="text-gray-400 mt-3">
            CRUD notes application using React.
          </p>
        </div>

      </div>
    </section>
  );
}