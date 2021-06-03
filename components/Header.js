import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"

import Image from "next/image"
import HeaderItem from "./HeaderItem"

function Header() {
    return (
        <header className=''>
            <div>
                <HeaderItem title='HOME' Icon={HomeIcon} />
            </div>
            <Image 
                className="object-contain"
                src='https://via.placeholder.com/200x100/06202A/FFFFFF/?text=Hulu+2.0'
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header
