
import CarLogoImg from '../../../assets/images/car-logo.png'
function Logo() {
    return (
    <div className="flex items-center">
        <div className="h-6 md:h-9 w-auto">

            <img src={CarLogoImg} alt="logo" className="w-auto h-full"/>
        </div>
        <div className="text-xl md:text-2xl font-bold text-black m-1">

Rent-A-Car
        </div>
    </div>
    );
}

export default Logo;