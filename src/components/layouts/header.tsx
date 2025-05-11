
import Image from "next/image"
import LogoImage from "@/assets/images/logo.png"

const Header = () => {
    return <div className='px-5 py-[30px] lg:px-10 2xl:px-[90px]'>
        <Image src={LogoImage} alt='Logo' width={114} height={86} />
    </div>
}


export default Header;