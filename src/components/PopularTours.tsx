"use client"
import Image from 'next/image'
import TourCard from "@/components/TourCard";
import {useQuery, gql, ApolloProvider} from '@apollo/client';

import client from '../apollo/client'
import {GET_ROCKETS} from "@/apollo/fetchData";

const PopularTours = () => {

    const { loading, error, data } = useQuery(GET_ROCKETS);

    if (loading) {
        return <p>Loading...</p>;
    }

    if(error) {
        return <p>Error...</p>
    }

    return (
        <section className="mx-auto max-w-[1280px] px-20 mt-24">
            <div className="flex justify-between items-center">
                <h2 className="text-[32px] font-extrabold text-dark-secondary">POPULAR TOURS</h2>
                <div className="flex gap-4">
                    <div className="bg-white-secondary w-[44px] h-[44px] flex justify-center items-center">
                        <Image src="arrow.svg" alt="left arrow" width={14} height={7}/>
                    </div>
                    <div className="bg-white-secondary w-[44px] h-[44px] flex justify-center items-center">
                        <Image src="arrow.svg" alt="left arrow" width={14} height={7} className="rotate-180"/>
                    </div>
                </div>
            </div>

            <div className="mt-[42px]">
                {data.rockets.map((rocket: { id: string; name: string; description: string }) => (
                    <TourCard key={rocket.id} name={rocket.name} description={rocket.description} />
                ))}
            </div>
        </section>
    )
}

export default PopularTours