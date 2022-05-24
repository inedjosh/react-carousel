import './App.css';
import Carousel, { CarouselItem } from './Carousel'

function App() {
  return (
   <>
      <Carousel>
     <CarouselItem>
     Item 1
    </CarouselItem>
     <CarouselItem>
     Item 2
     </CarouselItem>
     <CarouselItem>
    Item 3
     </CarouselItem>
   </Carousel>
   </>
  );
}

export default App;
