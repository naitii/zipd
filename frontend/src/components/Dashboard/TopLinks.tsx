import { Card } from '../ui/card'
import { MousePointerClickIcon } from 'lucide-react';

const TopLinks = () => {
  return (
    <div>
      <h1 className="text-3xl mt-2 ml-3">Top Links</h1>
      <div className="flex flex-col gap-3 mt-6 ml-1 mr-1">
        <Card className=" border-x-0 grid grid-flow-col auto-col-max items-center">
          <div>
            <h2 className=" p-2">zipd.tk/Ratsasan</h2>
            <p className=" text-gray-500 text-xs px-3">
              https://ui.shadcn.com/examples/dashboard
            </p>
          </div>
          <div className="flex items-center">
            <h2>21</h2>
            <MousePointerClickIcon className='w-4 h-4'/>
          </div>
        </Card>
        <Card className=" border-x-0 grid grid-flow-col auto-col-max items-center">
          <div>
            <h2 className=" p-2">zipd.tk/Ratsasan</h2>
            <p className=" text-gray-500 text-xs px-3">
              https://ui.shadcn.com/examples/dashboard
            </p>
          </div>
          <div className="flex items-center">
            <h2>14</h2>
            <MousePointerClickIcon className='w-4 h-4'/>
          </div>
        </Card>
        <Card className=" border-x-0 grid grid-flow-col auto-col-max items-center">
          <div>
            <h2 className=" p-2">zipd.tk/Ratsasan</h2>
            <p className=" text-gray-500 text-xs px-3">
              https://ui.shadcn.com/examples/dashboard
            </p>
          </div>
          <div className="flex items-center">
            <h2>5</h2>
            <MousePointerClickIcon className='w-4 h-4'/>         
         </div>
        </Card>
      </div>
    </div>
  );
}

export default TopLinks
