import React from 'react';
import {NavLinks} from "./navlinks";
import {slide as Menu} from 'react-burger-menu'
import {useMediaQuery} from 'react-responsive'
import {Screens} from "./rersponsive";
import './menuStyles.css'

function NavItems() {

    const isMobile = useMediaQuery({maxWidth:Screens.sm})


    if(isMobile){
        return (
            <Menu right>


            <ul className="flex list-none">


                {NavLinks.map((link, index) => <li>                  <a key={index} href={link.route} className='menu-item'>{link.name}</a>
                    </li>
                )}
            </ul>
            </Menu>
        );
    }

    return (
    <ul className="flex list-none">


            {NavLinks.map((link, index) => <li
                className="text-xs md:text-base text-black font-medium mr-1 md:mr-5 cursor-pointer transition duration-300 ease-in-out hover:text-gray-700">
                <a key={index} href={link.route}>{link.name}</a>
            </li>
            )}
                </ul>
                );
            }

export default NavItems;