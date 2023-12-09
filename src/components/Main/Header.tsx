import Image from 'next/image'
import CustomButton from "@/components/UI/CustomButton";
import Link from "next/link";

const Header = () => {
    return (
        <header
            className="w-full absolute flex mx-auto max-w-[1280px] justify-between items-center px-20 py-4 bg-header-bg hover:bg-black transition duration-300 hover:ease-linear">
            <Link href="/">
                <div className="w-[229px] h-[42px] bg-red-800 relative">
                    <Image
                        src="/logo.png"
                        alt="spaceX"
                        fill
                    />
                </div>
            </Link>

            <nav>
                <ul className="flex text-white gap-8">
                    <Link href="/">
                        <li className="border-b-[1px]">HOME</li>
                    </Link>
                    <Link href="/#">
                        <li>TOURS</li>
                    </Link>
                    <Link href="/#">
                        <li>ABOUT</li>
                    </Link>
                    <Link href="/#">
                        <li>HELP</li>
                    </Link>
                </ul>
            </nav>

            <div className="flex gap-3">

                <Link href="/favorites">
                    <div className="w-[52px] h-[52px] bg-white-secondary flex items-center justify-center">
                        <Image
                            src="/heart.svg"
                            alt="spaceX"
                            width={24}
                            height={24}
                        />
                    </div>
                </Link>

                <CustomButton
                    title="SIGN IN"
                    containerStyles="w-[164px] h-[52px] bg-secondary text-2xl font-semibold
                    shadow-lg transform active:scale-75 transition-transform"
                />

            </div>

        </header>

    )
}
export default Header