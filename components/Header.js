import Image from "next/image"

function Header() {
    return (
        <header className=''>
            <h1>This is the Header</h1>
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
