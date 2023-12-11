"use client"
import Image from 'next/image'
import TourCard from "@/components/TourCard";
import {useQuery, gql, ApolloProvider} from '@apollo/client';

import {GET_ROCKETS} from "@/apollo/fetchData";

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomButton from "@/components/UI/CustomButton";
import {useEffect, useState} from "react";
import settings from "@/settings/slider";
const PopularTours = () => {
    const [sliderRef, setSliderRef] = useState<Slider | null>(null);

    const {loading, error, data} = useQuery(GET_ROCKETS);

    useEffect(() => {

    }, [data])

    if (loading) {
        return <p>Loading...</p>;
    }


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


            <Slider ref={setSliderRef} {...settings} className="mt-[42px] xl:-mx-8 2xl:-mx-32">
                {data.rockets.map((rocket: { id: string; name: string; description: string }) => (
                    <TourCard
                        key={rocket.id}
                        id={rocket.id}
                        name={rocket.name}
                        description={rocket.description}
                        type="like"
                    />
                ))}
            </Slider>

            <div className="flex justify-between max-w-[88px] mx-auto mt-10 mb-24">
                <Image src="full-dot-dark.svg" alt="dot" width={24} height={24} className="stroke-dark-secondary"/>
                <Image src="empty-dot-dark.svg" alt="dot" width={24} height={24} className="stroke-dark-secondary"/>
                <Image src="empty-dot-dark.svg" alt="dot" width={24} height={24} className="fill-dark-secondary"/>
            </div>
        </section>
    )
}

export default PopularTours