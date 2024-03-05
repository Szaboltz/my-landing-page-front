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

import Node from "./assets/node.png"

function Backend() {
  return (
    <Tabs defaultValue="backend">
      <TabsList>
        <TabsTrigger value="backend">Backend</TabsTrigger>
      </TabsList>
      <TabsContent value="backend" className="mt-6">
        <Carousel>
            <CarouselContent> 
              <CarouselItem><img className="" src={ Node }/></CarouselItem>
              <CarouselItem>Link 2</CarouselItem>
              <CarouselItem>Link 3</CarouselItem>
            </CarouselContent>
          </Carousel>
      </TabsContent>
    </Tabs>
  )
}

export default Backend