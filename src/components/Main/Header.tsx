"use client"
import {usePathname} from 'next/navigation';
import Image from 'next/image';
import CustomButton from '@/components/UI/CustomButton';
import Link from 'next/link';

const Header = () => {
    const isFavoritesPage = usePathname() === '/favorites';

    return (
        <header className="w-full fixed z-40 bg-header-bg hover:bg-black transition duration-300">
            <div className="flex mx-auto max-w-[1280px] justify-between items-center px-20 py-4 hover:ease-linear">
                <Link href="/">
                    <div className="w-[229px] h-[42px] bg-red-800 relative mix-blend-difference">
                        <Image src="/logo.png" alt="spaceX" fill />
                    </div>
                </Link>

                <nav>
                    <ul className="flex text-white gap-8 font-medium">
                        <Link href="/">
                            <li className={isFavoritesPage ? 'hover-link' : 'border-b-[1px]' }>
                                HOME
                            </li>
                        </Link>
                        {/*<Link href="/#">*/}
                            <li className="hover-link">TOURS</li>
                        {/*</Link>*/}
                        {/*<Link href="/#">*/}
                            <li className="hover-link">ABOUT</li>
                        {/*</Link>*/}
                        {/*<Link href="/#">*/}
                            <li className="hover-link">HELP</li>
                        {/*</Link>*/}
                    </ul>
                </nav>

                <div className="flex gap-3">
                    <Link href="/favorites">
                        <div className={`w-[52px] h-[52px] flex items-center justify-center ${isFavoritesPage ? 'bg-pink-secondary' : 'bg-white-secondary'}`}>
                            <Image
                                src={`${isFavoritesPage ? 'heart-white.svg' : 'heart-dark.svg'}`}
                                alt="favorites"
                                width={24}
                                height={24}
                            />
                        </div>
                    </Link>

                    <CustomButton
                        title="SIGN IN"
                        containerStyles="w-[164px] h-[52px] bg-secondary text-2xl font-semibold transform active:scale-75 transition-transform"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
