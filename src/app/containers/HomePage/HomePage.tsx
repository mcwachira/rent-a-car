import Navbar from "../../components/navbar";
import TopSection from "./topSection";


function HomePage() {
    return (
        <div className="flex flex-col w-full h-full items-center overflow-x-hidden">
<Navbar/>
            <TopSection/>
        </div>
    );
}

export default HomePage;