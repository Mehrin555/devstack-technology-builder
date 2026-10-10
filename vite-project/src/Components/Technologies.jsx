import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Technologies() {
  // Store technologies from JSON
  const [technologies, setTechnologies] = useState([]);

  // Loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Selected technologies
  const [stack, setStack] = useState(["Svelte", "Redis"]);

  // Search state
  const [search, setSearch] = useState("");

  // Fetch technologies from JSON
  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }
        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
      })
      .catch((error) => {
        console.error("Error loading technologies:", error);
        setError("Could not load technologies. Please try again.");
        toast.error("Could not load technologies!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Add technology to stack
  function addToStack(name) {
    if (stack.includes(name)) {
      toast.warning("Technology already exists!");
      return;
    }

    setStack((previousStack) => [...previousStack, name]);
    toast.success(`${name} added successfully!`);
  }

  // Remove one technology
  function removeFromStack(name) {
    setStack((previousStack) =>
      previousStack.filter((item) => item !== name)
    );

    toast.info(`${name} removed from your stack!`);
  }

  // Remove all technologies
  function removeAll() {
    if (stack.length === 0) {
      toast.info("Your stack is already empty!");
      return;
    }

    setStack([]);
    toast.info("All technologies removed!");
  }

  // Filter technologies using search
  const filteredTechnologies = technologies.filter((tech) =>
    tech.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-10">
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Heading */}
      <div className="mx-auto mb-8 max-w-7xl text-center">
        {/* <h1 className="mb-3 text-3xl font-bold text-gray-800">
          Explore the Technologies
        </h1> */}
        <h1 className="mb-3 text-3xl font-bold">
  Explore the{" "}
  <span className="gradient-text">Technologies</span>
</h1>

        <p className="text-gray-600">
          Discover technologies and build your own stack.
        </p>
      </div>

      {/* Loading message */}
      {loading ? (
        <div className="py-12 text-center">
          <p className="text-lg font-semibold text-pink-500">
            Loading technologies...
          </p>
        </div>
      ) : error ? (
        /* Error message */
        <div className="py-12 text-center">
          <p className="text-red-500">{error}</p>
        </div>
      ) : (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Technology Cards Section */}
          <div className="lg:col-span-2">

            {/* Search Box */}
            <input
              type="text"
              placeholder="Search technology..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-6 w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-pink-500"
            />

            {/* Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {filteredTechnologies.length > 0 ? (
                filteredTechnologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md"
                  >
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700">
                        {tech.category}
                      </span>

                      {tech.tag && (
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                          {tech.tag}
                        </span>
                      )}
                    </div>

                    <h2 className="mb-2 text-xl font-bold text-gray-800">
                      {tech.name}
                    </h2>

                    <p className="mb-4 text-sm text-gray-600">
                      {tech.description}
                    </p>

                    <div className="mb-4 flex items-center justify-between text-sm">
                      <span className="text-gray-500">{tech.level}</span>
                      <span className="font-semibold text-yellow-600">
                        ★ {tech.rating}
                      </span>
                    </div>

                    <button
                      onClick={() => addToStack(tech.name)}
                      // className="w-full rounded-lg bg-pink-500 px-4 py-2 font-semibold text-white transition hover:bg-pink-600 "
                      className="brand-gradient w-full rounded-lg px-4 py-2 font-semibold text-white"
                    >
                      Add to Stack
                    </button>
                  </div>
                ))
              ) : (
                <p className="col-span-full py-8 text-center text-gray-500">
                  No technologies found.
                </p>
              )}
            </div>
          </div>

          {/* Your Stack Section */}
          <aside className="h-fit rounded-xl bg-white p-5 shadow-sm">
            <h2 className="mb-2 text-2xl font-bold text-gray-800">
              Your Stack
            </h2>

            <p className="mb-5 text-gray-500">
              Selected technologies: {stack.length}
            </p>

            {stack.length === 0 ? (
              <p className="py-4 text-gray-500">
                Your stack is empty. Add a technology!
              </p>
            ) : (
              <div className="space-y-3">
                {stack.map((name) => {
                  const tech = technologies.find(
                    (item) => item.name === name
                  );

                  return (
                    <div
                      key={name}
                      className="flex items-center justify-between gap-3 rounded-lg border border-gray-200 p-3"
                    >
                      <div>
                        <p className="font-semibold text-gray-800">{name}</p>
                        <p className="text-xs text-gray-500">
                          {tech ? tech.category : "Technology"}
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromStack(name)}
                        className="rounded-md bg-red-100 px-3 py-1 text-sm text-red-600 hover:bg-red-200"
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            <button
              onClick={removeAll}
              className="mt-5 w-full rounded-lg bg-gray-800 px-4 py-2 font-semibold text-white hover:bg-gray-700"
            >
              Remove All
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}

export default Technologies;