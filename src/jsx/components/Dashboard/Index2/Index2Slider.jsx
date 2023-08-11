import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//import { Autoplay } from "swiper";

import "swiper/css";

const sliderData = [
  { id: 1, bgColor: "bg-secondary", title: "Bitcoin", svgcolor: "#BE7CFF" },
  { id: 2, bgColor: "bg-primary", title: "Ethereum", svgcolor: "#1ABAFF" },
  { id: 3, bgColor: "bg-success", title: "Litecoin", svgcolor: "#40CD68" },
  { id: 4, bgColor: "bg-pink", title: "Ripplecoin", svgcolor: "#F272FD" },
];

const Index2Slider = () => {
  return (
    <>
      <Swiper
        className="swiper crypto-Swiper position-relative overflow-hidden"
        speed={1500}
        slidesPerView={4}
        spaceBetween={40}
        loop={false}
        //autoplay= {{
        //delay: 1200,
        //}}
        //modules={[ Autoplay ]}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {sliderData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className={`card coin-card ${data.bgColor}`}>
              <div className="back-image">
                <svg
                  width="121"
                  height="221"
                  viewBox="0 0 121 221"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="135.5" cy="84.5" r="40" stroke={data.svgcolor} />
                  <circle cx="136" cy="85" r="135.5" stroke={data.svgcolor} />
                  <circle cx="136" cy="85" r="109.5" stroke={data.svgcolor} />
                  <circle cx="136" cy="85" r="86.5" stroke={data.svgcolor} />
                  <circle cx="136" cy="85" r="64.5" stroke={data.svgcolor} />
                </svg>
              </div>
              <div className="card-body p-4 ">
                <div className="title">
                  <h4>{data.title}</h4>
                  {data.id === 1 ? (
                    <svg
                      width="57"
                      height="73"
                      viewBox="0 0 57 73"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M46.2175 32.9646C47.8461 30.5592 48.7888 27.7557 48.9443 24.855C49.0997 21.9543 48.4621 19.066 47.0999 16.5003C45.7377 13.9347 43.7024 11.7885 41.2125 10.2923C38.7226 8.79613 35.8722 8.00643 32.9673 8.00801V4.00801C32.9673 2.94714 32.5459 1.92973 31.7957 1.17958C31.0456 0.429439 30.0282 0.00801182 28.9673 0.00801182C27.9064 0.00801182 26.889 0.429439 26.1389 1.17958C25.3887 1.92973 24.9673 2.94714 24.9673 4.00801V8.00801H16.9673V4.00801C16.9673 2.94714 16.5459 1.92973 15.7957 1.17958C15.0456 0.429439 14.0282 0.00801182 12.9673 0.00801182C11.9064 0.00801182 10.889 0.429439 10.1389 1.17958C9.38871 1.92973 8.96729 2.94714 8.96729 4.00801V8.00801H4.96729C3.90642 8.00801 2.889 8.42944 2.13886 9.17958C1.38871 9.92973 0.967285 10.9471 0.967285 12.008C0.967285 13.0689 1.38871 14.0863 2.13886 14.8364C2.889 15.5866 3.90642 16.008 4.96729 16.008H8.96729V56.008H4.96729C3.90642 56.008 2.889 56.4294 2.13886 57.1796C1.38871 57.9297 0.967285 58.9471 0.967285 60.008C0.967285 61.0689 1.38871 62.0863 2.13886 62.8364C2.889 63.5866 3.90642 64.008 4.96729 64.008H8.96729V68.008C8.96729 69.0689 9.38871 70.0863 10.1389 70.8364C10.889 71.5866 11.9064 72.008 12.9673 72.008C14.0282 72.008 15.0456 71.5866 15.7957 70.8364C16.5459 70.0863 16.9673 69.0689 16.9673 68.008V64.008H24.9673V68.008C24.9673 69.0689 25.3887 70.0863 26.1389 70.8364C26.889 71.5866 27.9064 72.008 28.9673 72.008C30.0282 72.008 31.0456 71.5866 31.7957 70.8364C32.5459 70.0863 32.9673 69.0689 32.9673 68.008V64.008H40.9673C44.7455 64.0178 48.4046 62.6868 51.2935 60.2519C54.1824 57.8169 56.1138 54.436 56.7438 50.7107C57.3739 46.9854 56.6618 43.1574 54.7343 39.9078C52.8067 36.6583 49.7888 34.1978 46.2175 32.9646ZM16.9673 16.008H32.9673C35.089 16.008 37.1239 16.8509 38.6241 18.3512C40.1244 19.8515 40.9673 21.8863 40.9673 24.008C40.9673 26.1297 40.1244 28.1646 38.6241 29.6649C37.1239 31.1652 35.089 32.008 32.9673 32.008H16.9673V16.008ZM40.9673 56.008H16.9673V40.008H40.9673C43.089 40.008 45.1239 40.8509 46.6242 42.3512C48.1244 43.8514 48.9673 45.8863 48.9673 48.008C48.9673 50.1297 48.1244 52.1646 46.6242 53.6649C45.1239 55.1652 43.089 56.008 40.9673 56.008Z"
                        fill="#FCFCFC"
                      />
                    </svg>
                  ) : data.id === 2 ? (
                    <svg
                      width="57"
                      height="73"
                      viewBox="0 0 52 84"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M51.6004 42.864C51.6362 42.5771 51.6362 42.2868 51.6004 41.9999C51.6336 41.7236 51.6336 41.4443 51.6004 41.1679C51.6057 41.0613 51.6057 40.9546 51.6004 40.8479C51.5498 40.7035 51.4855 40.5642 51.4084 40.4319L29.0084 2.03195C28.9173 1.84562 28.7862 1.68172 28.6244 1.55195C28.3245 1.22197 27.9589 0.958322 27.5511 0.777907C27.1433 0.597491 26.7023 0.504294 26.2564 0.504294C25.8105 0.504294 25.3695 0.597491 24.9617 0.777907C24.5539 0.958322 24.1883 1.22197 23.8884 1.55195C23.7266 1.68172 23.5955 1.84562 23.5044 2.03195L1.10438 40.4319C1.02726 40.5642 0.962971 40.7035 0.912384 40.8479C0.907047 40.9546 0.907047 41.0613 0.912384 41.1679C0.703532 41.4199 0.531176 41.7 0.400384 41.9999C0.36719 42.2763 0.36719 42.5556 0.400384 42.832C0.395048 42.9385 0.395048 43.0453 0.400384 43.1519C0.450972 43.2964 0.515264 43.4357 0.592384 43.568L22.9924 81.9679C23.2757 82.4455 23.6784 82.841 24.1609 83.1158C24.6434 83.3905 25.1891 83.535 25.7444 83.535C26.2996 83.535 26.8453 83.3905 27.3278 83.1158C27.8103 82.841 28.213 82.4455 28.4964 81.9679L50.8964 43.568C50.9735 43.4357 51.0378 43.2964 51.0884 43.1519C51.2675 43.0718 51.4389 42.9754 51.6004 42.864ZM11.7284 41.9999L22.8004 37.2639V46.864L11.7284 41.9999ZM22.8004 30.2879L11.2484 35.248L22.8004 15.4399V30.2879ZM29.2004 37.2639L40.2724 41.9999L29.2004 46.7359V37.2639ZM29.2004 30.2879V15.4399L40.7524 35.248L29.2004 30.2879ZM26.0004 74L11.2484 48.6879L24.7524 54.4799C25.1472 54.6472 25.5716 54.7333 26.0004 54.7333C26.4292 54.7333 26.8536 54.6472 27.2484 54.4799L40.7524 48.6879L26.0004 74Z"
                        fill="#FCFCFC"
                      />
                    </svg>
                  ) : data.id === 3 ? (
                    <svg
                      width="57"
                      height="73"
                      viewBox="0 0 57 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M53.0001 49H25.0001C24.0051 49.005 23.0439 48.6389 22.3042 47.9733C21.5646 47.3076 21.0996 46.3901 21.0001 45.4L22.2801 32.2L34.0801 29C35.141 28.7136 36.0446 28.0175 36.5922 27.0648C37.1398 26.1121 37.2866 24.9809 37.0001 23.92C36.7137 22.8592 36.0176 21.9555 35.0649 21.4079C34.1122 20.8603 32.981 20.7136 31.9201 21L23.1601 23.48L25.0001 5.40004C25.1062 4.33917 24.7865 3.27961 24.1114 2.45445C23.4363 1.62929 22.461 1.10613 21.4001 1.00004C20.3393 0.893952 19.2797 1.21364 18.4545 1.88877C17.6294 2.5639 17.1062 3.53917 17.0001 4.60004L14.8801 26L3.92013 29C2.85926 29.1433 1.89874 29.702 1.24986 30.5534C0.600988 31.4049 0.316913 32.4792 0.46013 33.54C0.603347 34.6009 1.16212 35.5614 2.01354 36.2103C2.86495 36.8592 3.93926 37.1433 5.00013 37C5.35777 37.0583 5.72248 37.0583 6.08013 37L14.0801 34.72L13.0001 45C13.0001 48.1826 14.2644 51.2349 16.5148 53.4853C18.7653 55.7358 21.8175 57 25.0001 57H53.0001C54.061 57 55.0784 56.5786 55.8286 55.8285C56.5787 55.0783 57.0001 54.0609 57.0001 53C57.0001 51.9392 56.5787 50.9218 55.8286 50.1716C55.0784 49.4215 54.061 49 53.0001 49Z"
                        fill="#FCFCFC"
                      />
                    </svg>
                  ) : data.id === 4 ? (
                    <svg
                      width="74"
                      height="76"
                      viewBox="0 0 74 76"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M56.9992 44C55.2833 44.0258 53.5823 44.3228 51.9592 44.88L46.1992 38L51.9592 31.12C53.5823 31.6771 55.2833 31.9741 56.9992 32C60.669 32.0178 64.2335 30.7736 67.095 28.4758C69.9565 26.1781 71.9411 22.9665 72.7162 19.3794C73.4913 15.7923 73.0097 12.0478 71.3522 8.77356C69.6946 5.49934 66.9619 2.89444 63.6121 1.39554C60.2623 -0.103361 56.499 -0.405149 52.9531 0.540765C49.4073 1.48668 46.2943 3.62279 44.1362 6.59102C41.978 9.55925 40.9059 13.1792 41.0994 16.8439C41.2929 20.5087 42.7404 23.9955 45.1992 26.72L39.1192 34H32.4392C31.4656 30.2293 29.1503 26.9432 25.9272 24.7575C22.7041 22.5719 18.7945 21.6368 14.9312 22.1275C11.0679 22.6182 7.51627 24.501 4.94191 27.423C2.36756 30.345 0.947266 34.1057 0.947266 38C0.947266 41.8943 2.36756 45.6549 4.94191 48.5769C7.51627 51.4989 11.0679 53.3817 14.9312 53.8724C18.7945 54.3631 22.7041 53.428 25.9272 51.2424C29.1503 49.0567 31.4656 45.7706 32.4392 42H39.1192L45.1992 49.28C42.7404 52.0044 41.2929 55.4912 41.0994 59.156C40.9059 62.8207 41.978 66.4406 44.1362 69.4089C46.2943 72.3771 49.4073 74.5132 52.9531 75.4591C56.499 76.4051 60.2623 76.1033 63.6121 74.6044C66.9619 73.1055 69.6946 70.5006 71.3522 67.2263C73.0097 63.9521 73.4913 60.2076 72.7162 56.6205C71.9411 53.0334 69.9565 49.8218 67.095 47.5241C64.2335 45.2263 60.669 43.9821 56.9992 44ZM16.9992 46C15.4169 46 13.8702 45.5308 12.5546 44.6517C11.239 43.7727 10.2137 42.5232 9.60816 41.0614C9.00266 39.5996 8.84423 37.9911 9.15292 36.4392C9.4616 34.8874 10.2235 33.4619 11.3423 32.3431C12.4612 31.2243 13.8866 30.4624 15.4385 30.1537C16.9903 29.845 18.5989 30.0034 20.0607 30.6089C21.5225 31.2144 22.7719 32.2398 23.651 33.5554C24.53 34.871 24.9992 36.4177 24.9992 38C24.9992 40.1217 24.1563 42.1565 22.6561 43.6568C21.1558 45.1571 19.1209 46 16.9992 46ZM56.9992 7.99996C58.5814 7.99996 60.1282 8.46915 61.4438 9.3482C62.7594 10.2273 63.7847 11.4767 64.3902 12.9385C64.9957 14.4003 65.1542 16.0088 64.8455 17.5607C64.5368 19.1125 63.7749 20.538 62.6561 21.6568C61.5372 22.7756 60.1118 23.5376 58.5599 23.8462C57.0081 24.1549 55.3995 23.9965 53.9377 23.391C52.4759 22.7855 51.2265 21.7601 50.3474 20.4445C49.4684 19.1289 48.9992 17.5822 48.9992 16C48.9992 13.8782 49.8421 11.8434 51.3423 10.3431C52.8426 8.84281 54.8775 7.99996 56.9992 7.99996ZM56.9992 68C55.417 68 53.8702 67.5308 52.5546 66.6517C51.239 65.7727 50.2137 64.5232 49.6082 63.0614C49.0027 61.5996 48.8442 59.9911 49.1529 58.4392C49.4616 56.8874 50.2235 55.4619 51.3423 54.3431C52.4612 53.2243 53.8866 52.4624 55.4385 52.1537C56.9903 51.845 58.5989 52.0034 60.0607 52.6089C61.5225 53.2144 62.7719 54.2398 63.651 55.5554C64.53 56.871 64.9992 58.4177 64.9992 60C64.9992 62.1217 64.1563 64.1565 62.6561 65.6568C61.1558 67.1571 59.1209 68 56.9992 68Z"
                        fill="#FCFCFC"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </div>
                <div className="chart-num">
                  <h2>$33.568,60</h2>
                  <span>+12,4%</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
                    <div className="card coin-card bg-primary">
                        <div className="back-image">
                            <svg width="121" height="221" viewBox="0 0 121 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="135.5" cy="84.5" r="40" stroke="#1ABAFF"/>
                                <circle cx="136" cy="85" r="135.5" stroke="#1ABAFF"/>
                                <circle cx="136" cy="85" r="109.5" stroke="#1ABAFF"/>
                                <circle cx="136" cy="85" r="86.5" stroke="#1ABAFF"/>
                                <circle cx="136" cy="85" r="64.5" stroke="#1ABAFF"/>
                            </svg>	
                        </div>
                        <div className="card-body p-4 ">
                            <div className="title">
                                <h4>Ethereum</h4>
                                <svg width="57" height="73" viewBox="0 0 52 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M51.6004 42.864C51.6362 42.5771 51.6362 42.2868 51.6004 41.9999C51.6336 41.7236 51.6336 41.4443 51.6004 41.1679C51.6057 41.0613 51.6057 40.9546 51.6004 40.8479C51.5498 40.7035 51.4855 40.5642 51.4084 40.4319L29.0084 2.03195C28.9173 1.84562 28.7862 1.68172 28.6244 1.55195C28.3245 1.22197 27.9589 0.958322 27.5511 0.777907C27.1433 0.597491 26.7023 0.504294 26.2564 0.504294C25.8105 0.504294 25.3695 0.597491 24.9617 0.777907C24.5539 0.958322 24.1883 1.22197 23.8884 1.55195C23.7266 1.68172 23.5955 1.84562 23.5044 2.03195L1.10438 40.4319C1.02726 40.5642 0.962971 40.7035 0.912384 40.8479C0.907047 40.9546 0.907047 41.0613 0.912384 41.1679C0.703532 41.4199 0.531176 41.7 0.400384 41.9999C0.36719 42.2763 0.36719 42.5556 0.400384 42.832C0.395048 42.9385 0.395048 43.0453 0.400384 43.1519C0.450972 43.2964 0.515264 43.4357 0.592384 43.568L22.9924 81.9679C23.2757 82.4455 23.6784 82.841 24.1609 83.1158C24.6434 83.3905 25.1891 83.535 25.7444 83.535C26.2996 83.535 26.8453 83.3905 27.3278 83.1158C27.8103 82.841 28.213 82.4455 28.4964 81.9679L50.8964 43.568C50.9735 43.4357 51.0378 43.2964 51.0884 43.1519C51.2675 43.0718 51.4389 42.9754 51.6004 42.864ZM11.7284 41.9999L22.8004 37.2639V46.864L11.7284 41.9999ZM22.8004 30.2879L11.2484 35.248L22.8004 15.4399V30.2879ZM29.2004 37.2639L40.2724 41.9999L29.2004 46.7359V37.2639ZM29.2004 30.2879V15.4399L40.7524 35.248L29.2004 30.2879ZM26.0004 74L11.2484 48.6879L24.7524 54.4799C25.1472 54.6472 25.5716 54.7333 26.0004 54.7333C26.4292 54.7333 26.8536 54.6472 27.2484 54.4799L40.7524 48.6879L26.0004 74Z" fill="#FCFCFC"/>
                                </svg>
                            </div>
                            <div  className="chart-num">
                                <h2>$33.568,60</h2>
                                <span>+12,4%</span>
                            </div>
                        </div>	
                    </div>
				</SwiperSlide>
				<SwiperSlide>
                    <div className="card coin-card bg-success">
                        <div className="back-image">
                            <svg width="121" height="221" viewBox="0 0 121 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="135.5" cy="84.5" r="40" stroke="#40CD68"/>
                                <circle cx="136" cy="85" r="135.5" stroke="#40CD68"/>
                                <circle cx="136" cy="85" r="109.5" stroke="#40CD68"/>
                                <circle cx="136" cy="85" r="86.5" stroke="#40CD68"/>
                                <circle cx="136" cy="85" r="64.5" stroke="#40CD68"/>
                            </svg>
                        </div>
                        <div className="card-body p-4 ">
                            <div className="title">
                                <h4>Litecoin</h4>
                                <svg width="57" height="73" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M53.0001 49H25.0001C24.0051 49.005 23.0439 48.6389 22.3042 47.9733C21.5646 47.3076 21.0996 46.3901 21.0001 45.4L22.2801 32.2L34.0801 29C35.141 28.7136 36.0446 28.0175 36.5922 27.0648C37.1398 26.1121 37.2866 24.9809 37.0001 23.92C36.7137 22.8592 36.0176 21.9555 35.0649 21.4079C34.1122 20.8603 32.981 20.7136 31.9201 21L23.1601 23.48L25.0001 5.40004C25.1062 4.33917 24.7865 3.27961 24.1114 2.45445C23.4363 1.62929 22.461 1.10613 21.4001 1.00004C20.3393 0.893952 19.2797 1.21364 18.4545 1.88877C17.6294 2.5639 17.1062 3.53917 17.0001 4.60004L14.8801 26L3.92013 29C2.85926 29.1433 1.89874 29.702 1.24986 30.5534C0.600988 31.4049 0.316913 32.4792 0.46013 33.54C0.603347 34.6009 1.16212 35.5614 2.01354 36.2103C2.86495 36.8592 3.93926 37.1433 5.00013 37C5.35777 37.0583 5.72248 37.0583 6.08013 37L14.0801 34.72L13.0001 45C13.0001 48.1826 14.2644 51.2349 16.5148 53.4853C18.7653 55.7358 21.8175 57 25.0001 57H53.0001C54.061 57 55.0784 56.5786 55.8286 55.8285C56.5787 55.0783 57.0001 54.0609 57.0001 53C57.0001 51.9392 56.5787 50.9218 55.8286 50.1716C55.0784 49.4215 54.061 49 53.0001 49Z" fill="#FCFCFC"/>
                                </svg>	
                            </div>
                            <div  className="chart-num">
                                <h2>$33.568,60</h2>
                                <span>+12,4%</span>
                            </div>
                        </div>	
                    </div>
				</SwiperSlide>
				<SwiperSlide>
                    <div className="card coin-card bg-pink">
                        <div className="back-image">
                            <svg width="121" height="221" viewBox="0 0 121 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="135.5" cy="84.5" r="40" stroke="#F272FD"/>
                                <circle cx="136" cy="85" r="135.5" stroke="#F272FD"/>
                                <circle cx="136" cy="85" r="109.5" stroke="#F272FD"/>
                                <circle cx="136" cy="85" r="86.5" stroke="#F272FD"/>
                                <circle cx="136" cy="85" r="64.5" stroke="#F272FD"/>
                            </svg>		
                        </div>
                        <div className="card-body p-4">
                            <div className="title">
                                <h4>Ripplecoin</h4>
                                <svg width="74" height="76" viewBox="0 0 74 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M56.9992 44C55.2833 44.0258 53.5823 44.3228 51.9592 44.88L46.1992 38L51.9592 31.12C53.5823 31.6771 55.2833 31.9741 56.9992 32C60.669 32.0178 64.2335 30.7736 67.095 28.4758C69.9565 26.1781 71.9411 22.9665 72.7162 19.3794C73.4913 15.7923 73.0097 12.0478 71.3522 8.77356C69.6946 5.49934 66.9619 2.89444 63.6121 1.39554C60.2623 -0.103361 56.499 -0.405149 52.9531 0.540765C49.4073 1.48668 46.2943 3.62279 44.1362 6.59102C41.978 9.55925 40.9059 13.1792 41.0994 16.8439C41.2929 20.5087 42.7404 23.9955 45.1992 26.72L39.1192 34H32.4392C31.4656 30.2293 29.1503 26.9432 25.9272 24.7575C22.7041 22.5719 18.7945 21.6368 14.9312 22.1275C11.0679 22.6182 7.51627 24.501 4.94191 27.423C2.36756 30.345 0.947266 34.1057 0.947266 38C0.947266 41.8943 2.36756 45.6549 4.94191 48.5769C7.51627 51.4989 11.0679 53.3817 14.9312 53.8724C18.7945 54.3631 22.7041 53.428 25.9272 51.2424C29.1503 49.0567 31.4656 45.7706 32.4392 42H39.1192L45.1992 49.28C42.7404 52.0044 41.2929 55.4912 41.0994 59.156C40.9059 62.8207 41.978 66.4406 44.1362 69.4089C46.2943 72.3771 49.4073 74.5132 52.9531 75.4591C56.499 76.4051 60.2623 76.1033 63.6121 74.6044C66.9619 73.1055 69.6946 70.5006 71.3522 67.2263C73.0097 63.9521 73.4913 60.2076 72.7162 56.6205C71.9411 53.0334 69.9565 49.8218 67.095 47.5241C64.2335 45.2263 60.669 43.9821 56.9992 44ZM16.9992 46C15.4169 46 13.8702 45.5308 12.5546 44.6517C11.239 43.7727 10.2137 42.5232 9.60816 41.0614C9.00266 39.5996 8.84423 37.9911 9.15292 36.4392C9.4616 34.8874 10.2235 33.4619 11.3423 32.3431C12.4612 31.2243 13.8866 30.4624 15.4385 30.1537C16.9903 29.845 18.5989 30.0034 20.0607 30.6089C21.5225 31.2144 22.7719 32.2398 23.651 33.5554C24.53 34.871 24.9992 36.4177 24.9992 38C24.9992 40.1217 24.1563 42.1565 22.6561 43.6568C21.1558 45.1571 19.1209 46 16.9992 46ZM56.9992 7.99996C58.5814 7.99996 60.1282 8.46915 61.4438 9.3482C62.7594 10.2273 63.7847 11.4767 64.3902 12.9385C64.9957 14.4003 65.1542 16.0088 64.8455 17.5607C64.5368 19.1125 63.7749 20.538 62.6561 21.6568C61.5372 22.7756 60.1118 23.5376 58.5599 23.8462C57.0081 24.1549 55.3995 23.9965 53.9377 23.391C52.4759 22.7855 51.2265 21.7601 50.3474 20.4445C49.4684 19.1289 48.9992 17.5822 48.9992 16C48.9992 13.8782 49.8421 11.8434 51.3423 10.3431C52.8426 8.84281 54.8775 7.99996 56.9992 7.99996ZM56.9992 68C55.417 68 53.8702 67.5308 52.5546 66.6517C51.239 65.7727 50.2137 64.5232 49.6082 63.0614C49.0027 61.5996 48.8442 59.9911 49.1529 58.4392C49.4616 56.8874 50.2235 55.4619 51.3423 54.3431C52.4612 53.2243 53.8866 52.4624 55.4385 52.1537C56.9903 51.845 58.5989 52.0034 60.0607 52.6089C61.5225 53.2144 62.7719 54.2398 63.651 55.5554C64.53 56.871 64.9992 58.4177 64.9992 60C64.9992 62.1217 64.1563 64.1565 62.6561 65.6568C61.1558 67.1571 59.1209 68 56.9992 68Z" fill="#FCFCFC"/>
                                </svg>
                            </div>
                            <div  className="chart-num">
                                <h2>$33.568,60</h2>
                                <span>+12,4%</span>
                            </div>
                        </div>	
                    </div>
				</SwiperSlide> */}
      </Swiper>
    </>
  );
};
export default Index2Slider;
