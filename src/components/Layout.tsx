import { FC, useState } from 'react';
import Footer from './Footer';
import Navbar from './navbar/Navbar';
import FixedNavbar from './navbar/FixedNavbar';

interface Props {
    children: JSX.Element | JSX.Element[];
}


const Layout: FC<Props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='min-h-screen'>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <FixedNavbar isBarOpen={isOpen} />
            <div className='pb-14'>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout