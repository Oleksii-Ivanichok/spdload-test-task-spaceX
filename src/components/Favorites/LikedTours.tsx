import CustomButton from "@/components/UI/CustomButton";
import TourCard from "@/components/TourCard";
import {useRecoilState} from "recoil";
import {Tours} from "@/types";
import {tourState} from "@/state/atoms/TourState";
import {useState} from "react";
import Slider from "react-slick";
import settings from "@/settings/slider";

const LikedTours = () => {
    const [tours, setTours] = useRecoilState<Array<Tours>>(tourState);
    const [sliderRef, setSliderRef] = useState<Slider | null>(null);

    const clearTours = () => {
        setTours([])
    }

    return (
        <section className="mx-auto max-w-[1280px] px-20 mt-16">
            <div className="text-right">
            <CustomButton
                title="Clear all"
                handleClick={clearTours}
                containerStyles="text-2xl font-light text-blue-secondary"/>
            </div>
            <Slider ref={setSliderRef} {...settings} className="mt-[42px] xl:-mx-8 2xl:-mx-32">
                {tours.map((rocket: { id: string; name: string; description: string; img:string }) => (
                    <TourCard
                        key={rocket.id}
                        id={rocket.id}
                        name={rocket.name}
                        description={rocket.description}
                        img={rocket.img}
                        type="delete"
                    />
                ))}
            </Slider>
            <div className="mt-[104px]">

            </div>
        </section>
    )
}

export default LikedTours