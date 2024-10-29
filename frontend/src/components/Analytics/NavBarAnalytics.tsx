import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeoBar from './GeoBar';

const NavBarAnalytics = () => {
  return (
    <div>
      <Tabs defaultValue="geo" className='m-4'>
        <TabsList className='flex'>
          <TabsTrigger value="geo">Geo-Analytics</TabsTrigger>
          <TabsTrigger value="refers">Referrals</TabsTrigger>
        </TabsList>
        <TabsContent value="geo">
          <GeoBar/>
        </TabsContent>
        <TabsContent value="refers">Soon...</TabsContent>
      </Tabs>
    </div>
  );
}

export default NavBarAnalytics
