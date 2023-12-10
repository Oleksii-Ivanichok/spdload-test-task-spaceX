import Image from 'next/image'
import CustomButton from "@/components/UI/CustomButton";
import {TourCardProps} from "@/types";

const TourCard = ({name, description}:TourCardProps) => {
    return (
        <div className="w-[411px] h-[572px] text-center border border-secondary">
            <Image src="/card1.jpg" alt="card1" width={411} height={296}/>
            <div className="mx-auto max-w-[347px]">
                <h3 className="text-dark-secondary text-2xl font-bold mt-8">NAME{name}</h3>
                <p className="text-blue-secondary text-2xl font-light mt-4">DESCRIPTION{description}</p>
                <div className="flex justify-between mt-16">
                    <CustomButton
                        title="BUY"
                        containerStyles="w-[278px] h-[52px] bg-secondary text-2xl font-semibold
                     transform active:scale-75 transition-transform"
                    />
                    <CustomButton
                        containerStyles="w-[52px] h-[52px] bg-white-secondary flex items-center justify-center"
                        iconProperties={{src: '/heart.svg', width: 24, height: 24, alt: 'like'}}/>
                </div>
            </div>
        </div>
    )
}

export default TourCard