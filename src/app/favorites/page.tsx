"use client"
import Image from "next/image";
import CustomButton from "@/components/UI/CustomButton";
import TourCard from "@/components/TourCard";
import {useRecoilState} from "recoil";
import {Tours} from "@/types";
import {tourState} from "@/state/atoms/TourState";
import LikedTours from "@/components/Favorites/LikedTours";

export default function Favorites() {

    return (
        <section>
            <div className="h-[440px] w-full relative mx-auto text-white text-center">
                <div className="h-[440px] w-full absolute z-0 overflow-hidden">
                    <Image src="/card3.png" alt="spaceX" width={0}
                           height={0}
                           sizes="100vw" className="w-full h-auto"/>
                </div>
                <div className="h-full w-full bg-dark-secondary opacity-[.64] relative z-0">
                </div>
                <div className="centred z-10">
                    <h1 className="text-5xl font-extrabold">
                        FAVORITES
                    </h1>
                </div>
            </div>
            <LikedTours/>


        </section>
    )
}