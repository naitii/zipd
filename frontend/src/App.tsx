import Header from "./components/Header";


function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col mt-20 items-center gap-3 font-semibold">
        <h1 className="text-5xl lowercase">
          From Long
          <span className="uppercase"> URL</span>s to{" "}
        </h1>
        <h1 className="text-5xl lowercase">
          <span className="tracking-wide text-yellow-400">
            zipd
          </span>{" "}
          Links
        </h1>
      </div>
    </>
  );
}

export default App
