import Image from 'next/image'
import CustomButton from "@/components/UI/CustomButton";
import {TourCardProps, Tours} from "@/types";
import {useRecoilState} from "recoil";
import {tourState} from "@/state/atoms/TourState";

const TourCard = ({id, name, description, type}: TourCardProps) => {
    const [tours, setTours] = useRecoilState<Array<Tours>>(tourState);

    const addTour = () => {
        const tourExists = tours.some((tour) => tour.id === id);

        if (!tourExists) {
            setTours((prevTours) => [...prevTours, {id, name, description}]);
        }
        console.log(tours);
    }

    const deleteTour = () =>{
        setTours((prevTour) => {
            return prevTour.filter((tour) => tour.id !== id)
        })
    }

    return (
        <div className="w-[411px] text-center border border-secondary">
            <Image src="/card1.jpg" alt="card1" width={411} height={296}/>
            <div className="mx-auto max-w-[347px]">
                <h3 className="text-dark-secondary text-2xl font-bold mt-8">{name}</h3>
                <p className="text-blue-secondary text-2xl font-light mt-4">{description}</p>
                <div className="flex justify-between mt-16 mb-6 flex-wrap">
                    <CustomButton
                        title="BUY"
                        containerStyles="w-[278px] h-[52px] bg-secondary text-2xl font-semibold
                     transform active:scale-75 transition-transform"
                    />
                    <CustomButton
                        containerStyles="w-[52px] h-[52px] bg-white-secondary flex items-center justify-center"
                        handleClick={type === 'like' ? addTour : deleteTour}
                        iconProperties={{
                            src: type === 'like' ? '/heart.svg' : '/delete.svg',
                            width: 24,
                            height: 24,
                            alt: type === 'like' ? 'like' : 'delete',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default TourCard