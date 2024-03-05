import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel"
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs"

import Typescript from "./assets/Typescript.png"

function Frontend() {
  return (
    <Tabs defaultValue="frontend">
      <TabsList>
        <TabsTrigger value="frontend">Frontend</TabsTrigger>
      </TabsList>
      <TabsContent value="frontend" className="mt-6">
        <Carousel>
            <CarouselContent> 
              <CarouselItem><img className="" src={ Typescript }/></CarouselItem>
              <CarouselItem>Link 2</CarouselItem>
              <CarouselItem>Link 3</CarouselItem>
            </CarouselContent>
          </Carousel>
      </TabsContent>
    </Tabs>
  )
}

export default Frontend