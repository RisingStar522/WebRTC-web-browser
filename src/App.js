import React, { useEffect } from "react"
import QRCode from "react-qr-code";
import { isMobileOnly, isTablet, isBrowser, isSmartTV, browserName, mobileVendor, mobileModel } from 'react-device-detect';

import remote_meeting from './assets/img/remote_meeting.png'
import add_meeting from './assets/img/addmeet.svg'
import connect from './assets/img/connect.svg'
import connect_computer from './assets/img/connect_computer.png'
import mirror_url_src from './assets/img/mirror_url_src.png'
import qr_code_src from './assets/img/qr_code_src.png'

import "./styles.css";

export default function App() {

  // const [url, setURL] = useState("https://me.at/123456789");
  const url = "https://me.at/123456789";
  
 //  const onAfterChange = (val) => {
    
	// };

  useEffect(() => {
    console.log(isMobileOnly, ' ', isTablet, ' ', isBrowser, ' ', isSmartTV);
    console.log('browserName = ', browserName);
    console.log('mobileVendor = ', mobileVendor);
    console.log('mobileModel = ', mobileModel);
  });

  if ( isMobileOnly )
    return (
      <div className="App">
        <div id="mobile" >
          <div>
            <div>
              <img className="object-none object-center remote-meeting mx-auto" src={remote_meeting} alt=""></img>
            </div> 
            <div className="row">
              <p className="text-center font-medium text-[42px] text-[#3343F8] title">Meet me@</p> 
              <p className="text-center font-normal text-[24px]  leading-7 text-[#3343F8] subtitle">Video meetings on your</p>
              <p className="text-center font-normal text-[24px] leading-7 text-[#3343F8] subtitle">phone and TV</p>
            </div>
            <div className="flex flex-col button-group">
              <button className="flex items-center bg-yellow-300 hover:bg-yellow-400 rounded-xl text-[24px] leading-6 my-auto mt-[40px  ] p-4 px-6 new-meeting">
                <img className="px-4" src={add_meeting} alt=""></img>
                NEW MEETING
              </button>
              <label className="relative text-[20px] leading-6 block">
                <svg className="pointer-events-none w-8 h-8 absolute top-6 transform -translate-y-1/2 left-3" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_9_13)">
                  <path d="M24.5 8.75C24.9641 8.75 25.4092 8.93437 25.7374 9.26256C26.0656 9.59075 26.25 10.0359 26.25 10.5V19.25C26.25 19.7141 26.0656 20.1592 25.7374 20.4874C25.4092 20.8156 24.9641 21 24.5 21H3.5C3.03587 21 2.59075 20.8156 2.26256 20.4874C1.93437 20.1592 1.75 19.7141 1.75 19.25V10.5C1.75 10.0359 1.93437 9.59075 2.26256 9.26256C2.59075 8.93437 3.03587 8.75 3.5 8.75H24.5ZM3.5 7C2.57174 7 1.6815 7.36875 1.02513 8.02513C0.368749 8.6815 0 9.57174 0 10.5L0 19.25C0 20.1783 0.368749 21.0685 1.02513 21.7249C1.6815 22.3813 2.57174 22.75 3.5 22.75H24.5C25.4283 22.75 26.3185 22.3813 26.9749 21.7249C27.6313 21.0685 28 20.1783 28 19.25V10.5C28 9.57174 27.6313 8.6815 26.9749 8.02513C26.3185 7.36875 25.4283 7 24.5 7H3.5Z" fill="#3B3B3B" fillOpacity="0.5" />
                  <path d="M22.75 17.9375C22.75 17.8215 22.7961 17.7102 22.8781 17.6281C22.9602 17.5461 23.0715 17.5 23.1875 17.5H24.0625C24.1785 17.5 24.2898 17.5461 24.3719 17.6281C24.4539 17.7102 24.5 17.8215 24.5 17.9375V18.8125C24.5 18.9285 24.4539 19.0398 24.3719 19.1219C24.2898 19.2039 24.1785 19.25 24.0625 19.25H23.1875C23.0715 19.25 22.9602 19.2039 22.8781 19.1219C22.7961 19.0398 22.75 18.9285 22.75 18.8125V17.9375ZM22.75 14.4375C22.75 14.3215 22.7961 14.2102 22.8781 14.1281C22.9602 14.0461 23.0715 14 23.1875 14H24.0625C24.1785 14 24.2898 14.0461 24.3719 14.1281C24.4539 14.2102 24.5 14.3215 24.5 14.4375V15.3125C24.5 15.4285 24.4539 15.5398 24.3719 15.6219C24.2898 15.7039 24.1785 15.75 24.0625 15.75H23.1875C23.0715 15.75 22.9602 15.7039 22.8781 15.6219C22.7961 15.5398 22.75 15.4285 22.75 15.3125V14.4375ZM14 14.4375C14 14.3215 14.0461 14.2102 14.1281 14.1281C14.2102 14.0461 14.3215 14 14.4375 14H15.3125C15.4285 14 15.5398 14.0461 15.6219 14.1281C15.7039 14.2102 15.75 14.3215 15.75 14.4375V15.3125C15.75 15.4285 15.7039 15.5398 15.6219 15.6219C15.5398 15.7039 15.4285 15.75 15.3125 15.75H14.4375C14.3215 15.75 14.2102 15.7039 14.1281 15.6219C14.0461 15.5398 14 15.4285 14 15.3125V14.4375ZM17.5 14.4375C17.5 14.3215 17.5461 14.2102 17.6281 14.1281C17.7102 14.0461 17.8215 14 17.9375 14H20.5625C20.6785 14 20.7898 14.0461 20.8719 14.1281C20.9539 14.2102 21 14.3215 21 14.4375V15.3125C21 15.4285 20.9539 15.5398 20.8719 15.6219C20.7898 15.7039 20.6785 15.75 20.5625 15.75H17.9375C17.8215 15.75 17.7102 15.7039 17.6281 15.6219C17.5461 15.5398 17.5 15.4285 17.5 15.3125V14.4375ZM19.25 17.9375C19.25 17.8215 19.2961 17.7102 19.3781 17.6281C19.4602 17.5461 19.5715 17.5 19.6875 17.5H20.5625C20.6785 17.5 20.7898 17.5461 20.8719 17.6281C20.9539 17.7102 21 17.8215 21 17.9375V18.8125C21 18.9285 20.9539 19.0398 20.8719 19.1219C20.7898 19.2039 20.6785 19.25 20.5625 19.25H19.6875C19.5715 19.25 19.4602 19.2039 19.3781 19.1219C19.2961 19.0398 19.25 18.9285 19.25 18.8125V17.9375ZM10.5 14.4375C10.5 14.3215 10.5461 14.2102 10.6281 14.1281C10.7102 14.0461 10.8215 14 10.9375 14H11.8125C11.9285 14 12.0398 14.0461 12.1219 14.1281C12.2039 14.2102 12.25 14.3215 12.25 14.4375V15.3125C12.25 15.4285 12.2039 15.5398 12.1219 15.6219C12.0398 15.7039 11.9285 15.75 11.8125 15.75H10.9375C10.8215 15.75 10.7102 15.7039 10.6281 15.6219C10.5461 15.5398 10.5 15.4285 10.5 15.3125V14.4375ZM7 14.4375C7 14.3215 7.04609 14.2102 7.12814 14.1281C7.21019 14.0461 7.32147 14 7.4375 14H8.3125C8.42853 14 8.53981 14.0461 8.62186 14.1281C8.70391 14.2102 8.75 14.3215 8.75 14.4375V15.3125C8.75 15.4285 8.70391 15.5398 8.62186 15.6219C8.53981 15.7039 8.42853 15.75 8.3125 15.75H7.4375C7.32147 15.75 7.21019 15.7039 7.12814 15.6219C7.04609 15.5398 7 15.4285 7 15.3125V14.4375ZM3.5 14.4375C3.5 14.3215 3.54609 14.2102 3.62814 14.1281C3.71019 14.0461 3.82147 14 3.9375 14H4.8125C4.92853 14 5.03981 14.0461 5.12186 14.1281C5.20391 14.2102 5.25 14.3215 5.25 14.4375V15.3125C5.25 15.4285 5.20391 15.5398 5.12186 15.6219C5.03981 15.7039 4.92853 15.75 4.8125 15.75H3.9375C3.82147 15.75 3.71019 15.7039 3.62814 15.6219C3.54609 15.5398 3.5 15.4285 3.5 15.3125V14.4375ZM22.75 10.9375C22.75 10.8215 22.7961 10.7102 22.8781 10.6281C22.9602 10.5461 23.0715 10.5 23.1875 10.5H24.0625C24.1785 10.5 24.2898 10.5461 24.3719 10.6281C24.4539 10.7102 24.5 10.8215 24.5 10.9375V11.8125C24.5 11.9285 24.4539 12.0398 24.3719 12.1219C24.2898 12.2039 24.1785 12.25 24.0625 12.25H23.1875C23.0715 12.25 22.9602 12.2039 22.8781 12.1219C22.7961 12.0398 22.75 11.9285 22.75 11.8125V10.9375ZM19.25 10.9375C19.25 10.8215 19.2961 10.7102 19.3781 10.6281C19.4602 10.5461 19.5715 10.5 19.6875 10.5H20.5625C20.6785 10.5 20.7898 10.5461 20.8719 10.6281C20.9539 10.7102 21 10.8215 21 10.9375V11.8125C21 11.9285 20.9539 12.0398 20.8719 12.1219C20.7898 12.2039 20.6785 12.25 20.5625 12.25H19.6875C19.5715 12.25 19.4602 12.2039 19.3781 12.1219C19.2961 12.0398 19.25 11.9285 19.25 11.8125V10.9375ZM15.75 10.9375C15.75 10.8215 15.7961 10.7102 15.8781 10.6281C15.9602 10.5461 16.0715 10.5 16.1875 10.5H17.0625C17.1785 10.5 17.2898 10.5461 17.3719 10.6281C17.4539 10.7102 17.5 10.8215 17.5 10.9375V11.8125C17.5 11.9285 17.4539 12.0398 17.3719 12.1219C17.2898 12.2039 17.1785 12.25 17.0625 12.25H16.1875C16.0715 12.25 15.9602 12.2039 15.8781 12.1219C15.7961 12.0398 15.75 11.9285 15.75 11.8125V10.9375ZM12.25 10.9375C12.25 10.8215 12.2961 10.7102 12.3781 10.6281C12.4602 10.5461 12.5715 10.5 12.6875 10.5H13.5625C13.6785 10.5 13.7898 10.5461 13.8719 10.6281C13.9539 10.7102 14 10.8215 14 10.9375V11.8125C14 11.9285 13.9539 12.0398 13.8719 12.1219C13.7898 12.2039 13.6785 12.25 13.5625 12.25H12.6875C12.5715 12.25 12.4602 12.2039 12.3781 12.1219C12.2961 12.0398 12.25 11.9285 12.25 11.8125V10.9375ZM8.75 10.9375C8.75 10.8215 8.79609 10.7102 8.87814 10.6281C8.96019 10.5461 9.07147 10.5 9.1875 10.5H10.0625C10.1785 10.5 10.2898 10.5461 10.3719 10.6281C10.4539 10.7102 10.5 10.8215 10.5 10.9375V11.8125C10.5 11.9285 10.4539 12.0398 10.3719 12.1219C10.2898 12.2039 10.1785 12.25 10.0625 12.25H9.1875C9.07147 12.25 8.96019 12.2039 8.87814 12.1219C8.79609 12.0398 8.75 11.9285 8.75 11.8125V10.9375ZM3.5 10.9375C3.5 10.8215 3.54609 10.7102 3.62814 10.6281C3.71019 10.5461 3.82147 10.5 3.9375 10.5H6.5625C6.67853 10.5 6.78981 10.5461 6.87186 10.6281C6.95391 10.7102 7 10.8215 7 10.9375V11.8125C7 11.9285 6.95391 12.0398 6.87186 12.1219C6.78981 12.2039 6.67853 12.25 6.5625 12.25H3.9375C3.82147 12.25 3.71019 12.2039 3.62814 12.1219C3.54609 12.0398 3.5 11.9285 3.5 11.8125V10.9375ZM3.5 17.9375C3.5 17.8215 3.54609 17.7102 3.62814 17.6281C3.71019 17.5461 3.82147 17.5 3.9375 17.5H4.8125C4.92853 17.5 5.03981 17.5461 5.12186 17.6281C5.20391 17.7102 5.25 17.8215 5.25 17.9375V18.8125C5.25 18.9285 5.20391 19.0398 5.12186 19.1219C5.03981 19.2039 4.92853 19.25 4.8125 19.25H3.9375C3.82147 19.25 3.71019 19.2039 3.62814 19.1219C3.54609 19.0398 3.5 18.9285 3.5 18.8125V17.9375ZM7 17.9375C7 17.8215 7.04609 17.7102 7.12814 17.6281C7.21019 17.5461 7.32147 17.5 7.4375 17.5H17.0625C17.1785 17.5 17.2898 17.5461 17.3719 17.6281C17.4539 17.7102 17.5 17.8215 17.5 17.9375V18.8125C17.5 18.9285 17.4539 19.0398 17.3719 19.1219C17.2898 19.2039 17.1785 19.25 17.0625 19.25H7.4375C7.32147 19.25 7.21019 19.2039 7.12814 19.1219C7.04609 19.0398 7 18.9285 7 18.8125V17.9375Z" fill="#3B3B3B" fillOpacity="0.5"/>
                </g>
                <defs>
                  <clipPath id="clip0_9_13">
                    <rect width="28" height="28" fill="white"/>
                  </clipPath>
                </defs>
                </svg>
                <input type="text" placeholder="Type URL or meeting ID" className="form-input rounded-xl  border py-3 px-4 border-[#3343F8] appearance-none w-full block pl-14 focus:outline-none" />
              </label>
              <button className="items-center bg-[#3343F8] rounded-xl text-[24px] text-center leading-6 my-[20px] py-4 join-meeting">
                JOIN A MEETING
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  else if ( isTablet )
    return (
      <div className="App">
        <div id="mobile" >
          <div>
            <div>
              <img className="object-none object-center remote-meeting mx-auto" src={remote_meeting} alt=""></img>
            </div> 
            <div className="row">
              <p className="text-center font-medium text-[42px] text-[#3343F8] title">Meet me@</p> 
              <p className="text-center font-normal text-[24px]  leading-7 text-[#3343F8] subtitle">Video meetings on your</p>
              <p className="text-center font-normal text-[24px] leading-7 text-[#3343F8] subtitle">phone and TV</p>
            </div>
            <div className="flex flex-col button-group">
              <button className="flex items-center bg-yellow-300 hover:bg-yellow-400 rounded-xl text-[24px] leading-6 my-auto mt-[40px  ] p-4 px-6 new-meeting">
                <img className="px-4" src={add_meeting} alt=""></img>
                NEW MEETING
              </button>
              <label className="relative text-[20px] leading-6 block">
                <svg className="pointer-events-none w-8 h-8 absolute top-6 transform -translate-y-1/2 left-3" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_9_13)">
                  <path d="M24.5 8.75C24.9641 8.75 25.4092 8.93437 25.7374 9.26256C26.0656 9.59075 26.25 10.0359 26.25 10.5V19.25C26.25 19.7141 26.0656 20.1592 25.7374 20.4874C25.4092 20.8156 24.9641 21 24.5 21H3.5C3.03587 21 2.59075 20.8156 2.26256 20.4874C1.93437 20.1592 1.75 19.7141 1.75 19.25V10.5C1.75 10.0359 1.93437 9.59075 2.26256 9.26256C2.59075 8.93437 3.03587 8.75 3.5 8.75H24.5ZM3.5 7C2.57174 7 1.6815 7.36875 1.02513 8.02513C0.368749 8.6815 0 9.57174 0 10.5L0 19.25C0 20.1783 0.368749 21.0685 1.02513 21.7249C1.6815 22.3813 2.57174 22.75 3.5 22.75H24.5C25.4283 22.75 26.3185 22.3813 26.9749 21.7249C27.6313 21.0685 28 20.1783 28 19.25V10.5C28 9.57174 27.6313 8.6815 26.9749 8.02513C26.3185 7.36875 25.4283 7 24.5 7H3.5Z" fill="#3B3B3B" fillOpacity="0.5" />
                  <path d="M22.75 17.9375C22.75 17.8215 22.7961 17.7102 22.8781 17.6281C22.9602 17.5461 23.0715 17.5 23.1875 17.5H24.0625C24.1785 17.5 24.2898 17.5461 24.3719 17.6281C24.4539 17.7102 24.5 17.8215 24.5 17.9375V18.8125C24.5 18.9285 24.4539 19.0398 24.3719 19.1219C24.2898 19.2039 24.1785 19.25 24.0625 19.25H23.1875C23.0715 19.25 22.9602 19.2039 22.8781 19.1219C22.7961 19.0398 22.75 18.9285 22.75 18.8125V17.9375ZM22.75 14.4375C22.75 14.3215 22.7961 14.2102 22.8781 14.1281C22.9602 14.0461 23.0715 14 23.1875 14H24.0625C24.1785 14 24.2898 14.0461 24.3719 14.1281C24.4539 14.2102 24.5 14.3215 24.5 14.4375V15.3125C24.5 15.4285 24.4539 15.5398 24.3719 15.6219C24.2898 15.7039 24.1785 15.75 24.0625 15.75H23.1875C23.0715 15.75 22.9602 15.7039 22.8781 15.6219C22.7961 15.5398 22.75 15.4285 22.75 15.3125V14.4375ZM14 14.4375C14 14.3215 14.0461 14.2102 14.1281 14.1281C14.2102 14.0461 14.3215 14 14.4375 14H15.3125C15.4285 14 15.5398 14.0461 15.6219 14.1281C15.7039 14.2102 15.75 14.3215 15.75 14.4375V15.3125C15.75 15.4285 15.7039 15.5398 15.6219 15.6219C15.5398 15.7039 15.4285 15.75 15.3125 15.75H14.4375C14.3215 15.75 14.2102 15.7039 14.1281 15.6219C14.0461 15.5398 14 15.4285 14 15.3125V14.4375ZM17.5 14.4375C17.5 14.3215 17.5461 14.2102 17.6281 14.1281C17.7102 14.0461 17.8215 14 17.9375 14H20.5625C20.6785 14 20.7898 14.0461 20.8719 14.1281C20.9539 14.2102 21 14.3215 21 14.4375V15.3125C21 15.4285 20.9539 15.5398 20.8719 15.6219C20.7898 15.7039 20.6785 15.75 20.5625 15.75H17.9375C17.8215 15.75 17.7102 15.7039 17.6281 15.6219C17.5461 15.5398 17.5 15.4285 17.5 15.3125V14.4375ZM19.25 17.9375C19.25 17.8215 19.2961 17.7102 19.3781 17.6281C19.4602 17.5461 19.5715 17.5 19.6875 17.5H20.5625C20.6785 17.5 20.7898 17.5461 20.8719 17.6281C20.9539 17.7102 21 17.8215 21 17.9375V18.8125C21 18.9285 20.9539 19.0398 20.8719 19.1219C20.7898 19.2039 20.6785 19.25 20.5625 19.25H19.6875C19.5715 19.25 19.4602 19.2039 19.3781 19.1219C19.2961 19.0398 19.25 18.9285 19.25 18.8125V17.9375ZM10.5 14.4375C10.5 14.3215 10.5461 14.2102 10.6281 14.1281C10.7102 14.0461 10.8215 14 10.9375 14H11.8125C11.9285 14 12.0398 14.0461 12.1219 14.1281C12.2039 14.2102 12.25 14.3215 12.25 14.4375V15.3125C12.25 15.4285 12.2039 15.5398 12.1219 15.6219C12.0398 15.7039 11.9285 15.75 11.8125 15.75H10.9375C10.8215 15.75 10.7102 15.7039 10.6281 15.6219C10.5461 15.5398 10.5 15.4285 10.5 15.3125V14.4375ZM7 14.4375C7 14.3215 7.04609 14.2102 7.12814 14.1281C7.21019 14.0461 7.32147 14 7.4375 14H8.3125C8.42853 14 8.53981 14.0461 8.62186 14.1281C8.70391 14.2102 8.75 14.3215 8.75 14.4375V15.3125C8.75 15.4285 8.70391 15.5398 8.62186 15.6219C8.53981 15.7039 8.42853 15.75 8.3125 15.75H7.4375C7.32147 15.75 7.21019 15.7039 7.12814 15.6219C7.04609 15.5398 7 15.4285 7 15.3125V14.4375ZM3.5 14.4375C3.5 14.3215 3.54609 14.2102 3.62814 14.1281C3.71019 14.0461 3.82147 14 3.9375 14H4.8125C4.92853 14 5.03981 14.0461 5.12186 14.1281C5.20391 14.2102 5.25 14.3215 5.25 14.4375V15.3125C5.25 15.4285 5.20391 15.5398 5.12186 15.6219C5.03981 15.7039 4.92853 15.75 4.8125 15.75H3.9375C3.82147 15.75 3.71019 15.7039 3.62814 15.6219C3.54609 15.5398 3.5 15.4285 3.5 15.3125V14.4375ZM22.75 10.9375C22.75 10.8215 22.7961 10.7102 22.8781 10.6281C22.9602 10.5461 23.0715 10.5 23.1875 10.5H24.0625C24.1785 10.5 24.2898 10.5461 24.3719 10.6281C24.4539 10.7102 24.5 10.8215 24.5 10.9375V11.8125C24.5 11.9285 24.4539 12.0398 24.3719 12.1219C24.2898 12.2039 24.1785 12.25 24.0625 12.25H23.1875C23.0715 12.25 22.9602 12.2039 22.8781 12.1219C22.7961 12.0398 22.75 11.9285 22.75 11.8125V10.9375ZM19.25 10.9375C19.25 10.8215 19.2961 10.7102 19.3781 10.6281C19.4602 10.5461 19.5715 10.5 19.6875 10.5H20.5625C20.6785 10.5 20.7898 10.5461 20.8719 10.6281C20.9539 10.7102 21 10.8215 21 10.9375V11.8125C21 11.9285 20.9539 12.0398 20.8719 12.1219C20.7898 12.2039 20.6785 12.25 20.5625 12.25H19.6875C19.5715 12.25 19.4602 12.2039 19.3781 12.1219C19.2961 12.0398 19.25 11.9285 19.25 11.8125V10.9375ZM15.75 10.9375C15.75 10.8215 15.7961 10.7102 15.8781 10.6281C15.9602 10.5461 16.0715 10.5 16.1875 10.5H17.0625C17.1785 10.5 17.2898 10.5461 17.3719 10.6281C17.4539 10.7102 17.5 10.8215 17.5 10.9375V11.8125C17.5 11.9285 17.4539 12.0398 17.3719 12.1219C17.2898 12.2039 17.1785 12.25 17.0625 12.25H16.1875C16.0715 12.25 15.9602 12.2039 15.8781 12.1219C15.7961 12.0398 15.75 11.9285 15.75 11.8125V10.9375ZM12.25 10.9375C12.25 10.8215 12.2961 10.7102 12.3781 10.6281C12.4602 10.5461 12.5715 10.5 12.6875 10.5H13.5625C13.6785 10.5 13.7898 10.5461 13.8719 10.6281C13.9539 10.7102 14 10.8215 14 10.9375V11.8125C14 11.9285 13.9539 12.0398 13.8719 12.1219C13.7898 12.2039 13.6785 12.25 13.5625 12.25H12.6875C12.5715 12.25 12.4602 12.2039 12.3781 12.1219C12.2961 12.0398 12.25 11.9285 12.25 11.8125V10.9375ZM8.75 10.9375C8.75 10.8215 8.79609 10.7102 8.87814 10.6281C8.96019 10.5461 9.07147 10.5 9.1875 10.5H10.0625C10.1785 10.5 10.2898 10.5461 10.3719 10.6281C10.4539 10.7102 10.5 10.8215 10.5 10.9375V11.8125C10.5 11.9285 10.4539 12.0398 10.3719 12.1219C10.2898 12.2039 10.1785 12.25 10.0625 12.25H9.1875C9.07147 12.25 8.96019 12.2039 8.87814 12.1219C8.79609 12.0398 8.75 11.9285 8.75 11.8125V10.9375ZM3.5 10.9375C3.5 10.8215 3.54609 10.7102 3.62814 10.6281C3.71019 10.5461 3.82147 10.5 3.9375 10.5H6.5625C6.67853 10.5 6.78981 10.5461 6.87186 10.6281C6.95391 10.7102 7 10.8215 7 10.9375V11.8125C7 11.9285 6.95391 12.0398 6.87186 12.1219C6.78981 12.2039 6.67853 12.25 6.5625 12.25H3.9375C3.82147 12.25 3.71019 12.2039 3.62814 12.1219C3.54609 12.0398 3.5 11.9285 3.5 11.8125V10.9375ZM3.5 17.9375C3.5 17.8215 3.54609 17.7102 3.62814 17.6281C3.71019 17.5461 3.82147 17.5 3.9375 17.5H4.8125C4.92853 17.5 5.03981 17.5461 5.12186 17.6281C5.20391 17.7102 5.25 17.8215 5.25 17.9375V18.8125C5.25 18.9285 5.20391 19.0398 5.12186 19.1219C5.03981 19.2039 4.92853 19.25 4.8125 19.25H3.9375C3.82147 19.25 3.71019 19.2039 3.62814 19.1219C3.54609 19.0398 3.5 18.9285 3.5 18.8125V17.9375ZM7 17.9375C7 17.8215 7.04609 17.7102 7.12814 17.6281C7.21019 17.5461 7.32147 17.5 7.4375 17.5H17.0625C17.1785 17.5 17.2898 17.5461 17.3719 17.6281C17.4539 17.7102 17.5 17.8215 17.5 17.9375V18.8125C17.5 18.9285 17.4539 19.0398 17.3719 19.1219C17.2898 19.2039 17.1785 19.25 17.0625 19.25H7.4375C7.32147 19.25 7.21019 19.2039 7.12814 19.1219C7.04609 19.0398 7 18.9285 7 18.8125V17.9375Z" fill="#3B3B3B" fillOpacity="0.5"/>
                </g>
                <defs>
                  <clipPath id="clip0_9_13">
                    <rect width="28" height="28" fill="white"/>
                  </clipPath>
                </defs>
                </svg>
                <input type="text" placeholder="Type URL or meeting ID" className="form-input rounded-xl  border py-3 px-4 border-[#3343F8] appearance-none w-full block pl-14 focus:outline-none" />
              </label>
              <button className="items-center bg-[#3343F8] rounded-xl text-[24px] text-center leading-6 my-[20px] py-4 join-meeting">
                JOIN A MEETING
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  else if ( isBrowser )
    return (
      <div className="App">
        <div id="desktop">
      <div className="ml-[90px] pr-[20px] pt-[60px] place-items-center v-screen h-screen">
        <div className="pl-3">
          <img src={connect} alt="" />
        </div> 
        <div className="otp-container mt-[100px] flex flex-row">
          <img src={connect_computer} alt="" />
          <div className="px-[128px] pt-[30px]">
            <div className="text-center font-medium text-[36px] text-white">
              Type the <span className="text-yellow">9 digits</span> you see on 
              <br/>
              TV to mirror your screen 
            </div>
            <div className="otp-numbers flex flex-row gap-2 mt-8">
              <input type="text" max={9} min={0} maxLength={1} className="otp-num pl-[13px] h-[96px] w-[56px] border-spacing-1 bg-[#FCD41B] rounded-md"></input>
              <input type="text" max={9} min={0} maxLength={1} className="otp-num pl-[13px] h-[96px] w-[56px] border-spacing-1 bg-[#FCD41B] rounded-md"></input>
              <input type="text" max={9} min={0} maxLength={1} className="otp-num pl-[13px] h-[96px] w-[56px] border-spacing-1 bg-[#FCD41B] rounded-md mr-6"></input>
              <input type="text" max={9} min={0} maxLength={1} className="otp-num pl-[13px] h-[96px] w-[56px] border-spacing-1 bg-[#FCD41B] rounded-md"></input>
              <input type="text" max={9} min={0} maxLength={1} className="otp-num pl-[13px] h-[96px] w-[56px] border-spacing-1 bg-[#FCD41B] rounded-md"></input>
              <input type="text" max={9} min={0} maxLength={1} className="otp-num pl-[13px] h-[96px] w-[56px] border-spacing-1 bg-[#FCD41B] rounded-md mr-6"></input>
              <input type="text" max={9} min={0} maxLength={1} className="otp-num pl-[13px] h-[96px] w-[56px] border-spacing-1 bg-[#FCD41B] rounded-md"></input>
              <input type="text" max="9" min="0" maxLength={1} className="otp-num pl-[13px] h-[96px] w-[56px] border-spacing-1 bg-[#FCD41B] rounded-md"></input>
              <input type="text" max="9" min="0" maxLength={1} className="otp-num pl-[13px] h-[96px] w-[56px] border-spacing-1 bg-[#FCD41B] rounded-md"></input>
            </div>
          </div>
        </div> 
      </div>
        </div>  
      </div>
    )
  else if ( isSmartTV )
    return (
      <div className="App">
        <div id="tv">
          <div className="ml-[90px] pr-[20px] pt-[121px] flex flex-col">
            <div className="pl-3">
              <img src={connect} alt="" />
            </div> 
            <div className="otp-generator mt-[120px] flex flex-row">
              <div>
                <img src={qr_code_src} alt="" />
              </div>
              <div className="qr-code absolute ml-[326px] mt-[154px] bg-[#f1f1f5] p-[36px]">
                <QRCode value={url} />
              </div>
              <div className="ml-[240px] pt-[16px] flex flex-col">
                <div>
                  <img src={mirror_url_src} alt="" />
                </div>
                <div className="text-[60px] text-[#FCD41B] underline">
                  {url}
                </div>
              </div> 
            </div>
          </div>
        </div> 
      </div>
    )
}
