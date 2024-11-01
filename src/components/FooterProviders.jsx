import React from 'react'
import Marquee from "react-fast-marquee";
import f1 from '../assets/images/f1.png'
import f2 from '../assets/images/f2.png'
import f3 from '../assets/images/f3.png'
import f4 from '../assets/images/f4.png'
import f5 from '../assets/images/f5.png'
import f7 from '../assets/images/f7.png'
import f6 from '../assets/images/f6.png'
import f8 from '../assets/images/f8.png'
import f9 from '../assets/images/f9.png'
 
const FooterProviders = () => {
    const imgs=[f1,f2,f3,f4,f5,f6,f7,f8,f9]
  return (
    <Marquee className='mt-4 mb-5 pb-5'>
        {imgs.map((img,index)=>{
            return <img src={img} className='me-4 footerProviderImg' key={index}  />
        })}
    </Marquee>
  )
}

export default FooterProviders
