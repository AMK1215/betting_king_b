import React from 'react'
import user from '../assets/images/profile.png'
import '../assets/css/account.css'
import { FaLanguage, FaRegBell } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { FaUserCircle } from 'react-icons/fa'
import { IoWallet } from 'react-icons/io5'
import { RiBankCard2Fill } from 'react-icons/ri'
import { BsFillGiftFill } from 'react-icons/bs'
import { MdLock, MdMail } from 'react-icons/md'
const AccountPage = () => {
    const menus=[
        {icon:<FaUserCircle size={26}  color='#00FFFF' />,name:'My Profile',link:'/profile'},
        {icon:<IoWallet size={26}  className='text-danger' />,name:'My Wallet',link:'/wallet'},
        {icon:<IoWallet size={26}  className='text-danger' />,name:'Game Logs',link:'/game-logs'},
        {icon:<RiBankCard2Fill size={26}   className='text-primary' />,name:'My Bank Card',link:'/bank'},
        {icon:<BsFillGiftFill size={26} color='#FF00FF'  />,name:'My Promotion',link:'/promotion'},
        {icon:<FaLanguage size={26} color='#FFFF00' />,name:'Language',link:'/change-language'},
        {icon:<MdLock size={26} className='text-warning'  />,name:'Reset Password',link:'/reset-password'},
        {icon:<MdMail size={26} className='text-primary'  />,name:'Contact Us',link:'/contact'},
        // {icon:,name:'',link:''},
        // {icon:,name:'',link:''},
    ]
  return (
    <div>
      <div className="px-3 py-2 gradientBg">
        <div className="d-flex align-items-center justify-content-between">
            <div className='d-flex align-items-center gap-2'>
            <img src={user} className='accountProfile' />
            <div>
                <p className="fw-semibold ">user@123</p>
                <small  >Tele: 09123345</small>
            </div>
            </div>
            <div className='d-flex align-items-center gap-3'>
                <Link to={'/contact'}>
                    <TfiHeadphoneAlt size={25} />
                </Link>
                <FaRegBell size={25} />
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-6 px-2">
                <div className="rounded-3 bg-primary p-2">
                    <small className=" d-block mb-1 fw-semibold">Balance</small>
                    <p className="fw-semibold">0</p>
                </div>
            </div>
            <div className="col-6 px-2">
            <div className="rounded-3 bg-primary p-2">
                    <small className=" d-block mb-1 fw-semibold">Promotion Balance</small>
                    <p className="fw-semibold">0</p>
                </div>
            </div>
        </div>
      </div>
      <div className="p-2">
        <div className='p-2  rounded-3' style={{background:'#4D4573'}}>
            {menus.map((menu,index)=>{
                return <Link to={menu.link} className="pb-2 border-bottom mb-3 d-flex align-items-center gap-2">
                    {menu.icon}
                    <small>{menu.name}</small>
                </Link>
            })}
        </div>
      </div>
    </div>
  )
}

export default AccountPage
