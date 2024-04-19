import Navbar from "../../components/navbar";
import TopSection from "./topSection";
import BookCard from "../../components/bookCard";
import Marginer from "../../components/marginer";


function HomePage() {
    return (
        <div className="flex flex-col w-full h-full items-center overflow-x-hidden">
<Navbar/>
            <TopSection/>
            <Marginer direction="vertical" margin="5em"/>
            <BookCard/>
        </div>
    );
}

export default HomePage;