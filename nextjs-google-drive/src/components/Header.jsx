import Image from "next/image";

const Header = () =>  {
    return (
        <header>
        <Image
        src="/driver_google.png"
        alt='Drive Logo'
        width={80}
        height={70}
        >
        </Image>
        <h1>Drive</h1>

        </header>
    )
}
export default Header;