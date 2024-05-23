import Header from "./components/Header";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<Home />} />
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
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
