import React from 'react'
// import toshi_icon from './app-photo/toshi_icon.png'

const Navibar = () => {
  return (

    <div className='navibar-wrap'>

      {/* <div className='toshi_icon_wrap'>
        <a href="/toshiki-profile/"><img src={toshi_icon} className="toshi_icon" /></a>
      </div> */}

      <div className='button-bar'>
        <p>
          <a href="/">TOP</a>
          <a href="/">ABOUT</a>
          <a href="/">ARCHIVE</a>
          <a href="/">CONTACT</a>
        </p>
      </div>
      <div className='navibar-title'>
        <a href="https://toshiki16.github.io/toshiki-profile/"><p className='navibar-titleName'>PC用ページ</p></a>
      </div>

      <div className='header-bar'>
        <div className="h-menu">
          <input id="h-menu_checkbox" className="h-menuCheckbox" type="checkbox" />
          <label className="h-menu_icon" htmlFor="h-menu_checkbox">
            <span className="hamburger-icon"></span>
          </label>
          <label id="h-menu_black" className="h-menuCheckbox" htmlFor="h-menu_checkbox"></label>
          <div id="h-menu_content">
            <ul>
              <li><a href="/toshiki-profile/">ホーム</a></li>
              <li><a href="/toshiki-profile/About">概要</a></li>
              <li><a href="/toshiki-profile/Archive">制作したもの</a></li>
              <li><a href="/toshiki-profile/Service">宣伝</a></li>
              <li><a href="/toshiki-profile/Contact">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}




export default Navibar
