import Link from "next/link";
import DropdownButton from "./DropdownCategories";
import HomeSection from "./HomeSection";

const HeaderBottom = () => {
    return (
        <>
            <nav className="bg-black relative p-3 mt-14 font-normal hidden lg:block">
                <div className="">
                    <div className="flex justify-evenly ">
                        <div className="flex gap-20 font-bold text-white">
                            <DropdownButton className=" underline-hover-left-to-right cursor-pointer" />
                            <HomeSection className=" underline-hover-left-to-right cursor-pointer" />
                            <Link href="/pages/Shop">
                                <p className="underline-hover-left-to-right cursor-pointer text-sm">SHOP</p>
                            </Link>
                            <Link href="/pages/Cart">
                                <p className="underline-hover-left-to-right cursor-pointer text-sm">CART</p>
                            </Link>
                            <Link href="/pages/CheckOut">
                                <p className="underline-hover-left-to-right cursor-pointer text-sm">CHECKOUT</p>
                            </Link>
                            <Link href="/pages/Account">
                                <p className="underline-hover-left-to-right cursor-pointer text-sm">MY ACCOUNT</p>
                            </Link>
                            <Link href="/pages/Blog">
                                <p className="underline-hover-left-to-right cursor-pointer text-sm">BLOG</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default HeaderBottom;
