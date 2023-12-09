import {CustomButtonProps} from "@/types";
import Image from "next/image"
const CustomButton = ({title, iconProperties, containerStyles, textStyles, isDisabled, handleClick}: CustomButtonProps) => {
    return (
        <button
            disabled={isDisabled}
            className={`${containerStyles}`}
            onClick={handleClick}
        >
            {
                iconProperties ?
                    <Image
                    src={iconProperties.src}
                    width={iconProperties.width}
                    height={iconProperties.height}
                    alt={iconProperties.alt}
                /> : title
            }

        </button>
    )
}

export default CustomButton