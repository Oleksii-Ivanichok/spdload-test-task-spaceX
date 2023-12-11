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
    styles?: string;
}

export interface TourCardProps {
    id: string;
    name: string;
    description: string;
    type: string;
}

export interface Tours {
    id: string;
    name: string;
    description: string;
}