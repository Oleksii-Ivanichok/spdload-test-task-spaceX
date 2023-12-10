import {MouseEventHandler} from "react";

export interface CustomButtonProps {
    title?: string;
    iconProperties?: iconProperties;
    containerStyles?: string;
    textStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    isDisabled?: boolean;
}

interface iconProperties {
    src: string;
    width: number;
    height: number;
    alt: string;
}

export interface TourCardProps {
    name: string;
    description: string;
}