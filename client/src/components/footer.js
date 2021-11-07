import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import ChatBox from './ChatBox';


const Footer = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <div>
      <footer className="row center">
        {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
        <div>All right reserved</div>{' '}
      </footer>
    </div>
  )
}

export default Footer;
