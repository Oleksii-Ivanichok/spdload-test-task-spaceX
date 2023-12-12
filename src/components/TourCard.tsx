import Image from 'next/image'
import CustomButton from "@/components/UI/CustomButton";
import {TourCardProps, Tours} from "@/types";
import {useRecoilState} from "recoil";
import {tourState} from "@/state/atoms/TourState";

const TourCard = ({id, name, description, img, type}: TourCardProps) => {
    const [tours, setTours] = useRecoilState<Array<Tours>>(tourState);

    const addTour = () => {
        const tourExists = tours.some((tour) => tour.id === id);

        if (!tourExists) {
            setTours((prevTours) => [...prevTours, {id, name, description, img}]);
        }
    }

    const deleteTour = () => {
        setTours((prevTour) => {
            return prevTour.filter((tour) => tour.id !== id)
        })
    }

    return (
        <div className="w-full xl:max-w-[340px] xl:mx-6 2xl:mx-6 2xl:max-w-[411px] h-[850px] text-center border border-secondary">
            <div className="w-full relative h-[240px]">
                <Image src={img} alt="card" fill/>
            </div>
            <div className="mx-auto max-w-[347px] px-8">
                <div className="h-[440px]">
                    <h3 className="text-dark-secondary text-2xl font-bold mt-8">{name}</h3>
                    <p className="text-blue-secondary text-2xl font-light mt-4">{description}</p>
                </div>
                <div className="mt-16 2xl:mt-6 mb-6 flex gap-4">
                    <CustomButton
                        title="BUY"
                        containerStyles="w-full max-w-[278px] h-[52px] bg-secondary text-2xl font-semibold
                     transform active:scale-75 transition-transform"
                    />
                    <CustomButton
                        containerStyles="w-full max-w-[52px] h-[52px] bg-white-secondary flex items-center justify-center"
                        handleClick={type === 'like' ? addTour : deleteTour}
                        iconProperties={{
                            src: type === 'like' ? '/heart-dark.svg' : '/delete.svg',
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