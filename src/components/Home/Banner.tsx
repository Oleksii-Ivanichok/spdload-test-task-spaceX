import Image from 'next/image'
import CustomButton from "@/components/UI/CustomButton";

const Banner = () => {
    return (
        <section className="h-[660px] w-full relative mx-auto text-white text-center">
            <Image src="/card1.jpg" alt="spaceX" fill className="relative z-0" />
            <div className="h-full w-full bg-header-bg relative z-0">
            </div>
            <div className="centred z-10">
                <h1 className="text-5xl font-extrabold">
                    THE SPACE IS WAITING FOR <br/>
                    <span className="text-[310px] font-extrabold">YOU</span>
                </h1>
                <CustomButton title="Explore tours" containerStyles="text-white mt-[58px] text-2xl font-light text-shadow-md"/>
            </div>

        </section>
    )
}

export default Banner