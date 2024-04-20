import Navbar from '../../components/navbar';
import TopSection from './topSection';
import BookCard from '../../components/bookCard';
import Marginer from '../../components/marginer';
import BookingSteps from './bookingSteps';
import AboutUs from './aboutUs';
import TopCars from './topCars';

function HomePage() {
  return (
    <div className="flex flex-col w-full h-full items-center overflow-x-hidden">
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="5em" />
      <BookCard />
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
      <Marginer direction="vertical" margin="8em" />
      <TopCars />
    </div>
  );
}

export default HomePage;
