import Image from 'next/image'
import CustomButton from "@/components/UI/CustomButton";

const Banner = () => {
    return (
        <section className="h-[660px] w-full relative mx-auto text-white text-center">
            <Image src="/card1.jpg" alt="spaceX" fill className="relative z-0"/>
            <div className="h-full w-full bg-header-bg relative z-0">
            </div>
            <div className="centred z-10">
                <h1 className="text-5xl font-extrabold">
                    THE SPACE IS WAITING FOR <br/>
                    <span className="text-[310px] font-extrabold">YOU</span>
                </h1>
                <div className="flex justify-center items-center mt-[58px] gap-2">
                    <CustomButton
                        title="Explore tours"
                        containerStyles="text-white text-2xl font-light text-shadow-md"
                    />
                    <CustomButton
                        iconProperties={{
                            src: 'arrow-down.svg',
                            width: 20,
                            height: 25,
                            alt: 'arrow-down',
                        }}
                    />
                </div>
            </div>

        </section>
    )
}

export default Banner