"use client"
import Image from 'next/image'
import TourCard from "@/components/TourCard";
import {useQuery} from '@apollo/client';

import {GET_ROCKETS} from "@/apollo/fetchData";

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomButton from "@/components/UI/CustomButton";
import {useEffect, useState} from "react";
import settings from "@/settings/slider";
import {Tours} from "@/types";
const PopularTours = () => {
    const [loadedTour, setLoadedTour] = useState<Tours[]>([])
    const [sliderRef, setSliderRef] = useState<Slider | null>(null);
    const {loading, error, data} = useQuery(GET_ROCKETS);

    const images = ["/card1.jpg", "/card2.jpg", "/card3.png"];

    useEffect(() => {
        if(!loading) {
            setLoadedTour([...data.rockets]);
        }
    }, [data])


    if (error) {
        return <p>Error...</p>
    }

    return (
        <section className="mx-auto max-w-[1280px] px-20 mt-24">
            <div className="flex justify-between items-center">
                <h2 className="text-[32px] font-extrabold text-dark-secondary">POPULAR TOURS</h2>
                <div className="flex gap-4">
                        <CustomButton
                            handleClick={sliderRef?.slickPrev}
                            containerStyles="w-[44px] h-[44px] bg-white-secondary flex items-center justify-center"
                            iconProperties={{
                                src: 'arrow.svg',
                                width: 10,
                                height: 10,
                                alt: 'left arrow',
                            }}
                        />
                        <CustomButton
                            handleClick={sliderRef?.slickNext}
                            containerStyles="w-[44px] h-[44px] bg-white-secondary flex items-center justify-center"
                            iconProperties={{
                                src: 'arrow.svg',
                                width: 10,
                                height: 10,
                                alt: 'left arrow',
                                styles: 'rotate-180'
                            }}
                        />
                </div>
            </div>

            {loading ? (<p>Loading...</p>) : (
                <Slider ref={setSliderRef} {...settings} className="mt-[42px] xl:-mx-8 2xl:-mx-32">
                    {loadedTour.map((tour: Tours, index: number) => (
                        <TourCard
                            key={tour.id}
                            id={tour.id}
                            name={tour.name}
                            description={tour.description}
                            type="like"
                            img={images[index % images.length]}
                        />
                    ))}
                </Slider>
            )

            }


            <div className="flex justify-between max-w-[88px] mx-auto mt-10 mb-24">
                <Image src="full-dot-dark.svg" alt="dot" width={24} height={24} className="stroke-dark-secondary"/>
                <Image src="empty-dot-dark.svg" alt="dot" width={24} height={24} className="stroke-dark-secondary"/>
                <Image src="empty-dot-dark.svg" alt="dot" width={24} height={24} className="fill-dark-secondary"/>
            </div>
        </section>
    )
}

export default PopularTours