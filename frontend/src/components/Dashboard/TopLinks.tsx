import { MousePointerClickIcon } from 'lucide-react';

const TopLinks = () => {
  return (
    <div className=' p-2'>
      <h1 className="text-3xl mt-2 ml-3 font-semibold">Top Links</h1>
      <div className="flex flex-col gap-3 mt-6 ml-1 mr-1">
        <div className=" border-x-0 grid grid-flow-col auto-col-max items-center">
          <div>
            <h2 className=" p-2 text-lg font-bold tracking-wide">zipd.tk/Ratsasan</h2>
            <p className=" text-gray-500 text-xs px-3">
              https://ui.shadcn.com/examples/dashboard
            </p>
          </div>
          <div className="flex items-center gap-1">
            <h2 className="font-bold text-xl">21</h2>
            <MousePointerClickIcon className="w-3 h-3" />
          </div>
        </div>
        <div className=" border-x-0 grid grid-flow-col auto-col-max items-center">
          <div>
            <h2 className=" p-2 text-lg font-bold tracking-wide">zipd.tk/Ratsasan</h2>
            <p className=" text-gray-500 text-xs px-3">
              https://ui.shadcn.com/examples/dashboard
            </p>
          </div>
          <div className="flex items-center gap-1">
            <h2 className="font-bold text-xl">14</h2>
            <MousePointerClickIcon className="w-3 h-3" />
          </div>
        </div>
        <div className=" border-x-0 grid grid-flow-col auto-col-max items-center">
          <div>
            <h2 className=" p-2 text-lg font-bold tracking-wide">zipd.tk/Ratsasan</h2>
            <p className=" text-gray-500 text-xs px-3">
              https://ui.shadcn.com/examples/dashboard
            </p>
          </div>
          <div className="flex items-center gap-1">
            <h2 className="font-bold text-xl">5</h2>
            <MousePointerClickIcon className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopLinks
