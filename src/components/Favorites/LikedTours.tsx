import CustomButton from "@/components/UI/CustomButton";
import TourCard from "@/components/TourCard";
import {useRecoilState} from "recoil";
import {Tours} from "@/types";
import {tourState} from "@/state/atoms/TourState";

const LikedTours = () => {
    const [tours, setTours] = useRecoilState<Array<Tours>>(tourState);

    const clearTours = () => {
        setTours([])
    }

    return (
        <section className="mx-auto max-w-[1280px] px-20 mt-16">
            <CustomButton
                title="Clear all"
                handleClick={clearTours}
                containerStyles="text-2xl font-light text-blue-secondary float-right"/>

            <div className="mt-[42px] flex">
                {tours.map((rocket: { id: string; name: string; description: string }) => (
                    <TourCard
                        key={rocket.id}
                        id={rocket.id}
                        name={rocket.name}
                        description={rocket.description}
                        type="delete"
                    />
                ))}
            </div>
        </section>
    )
}

export default LikedTours