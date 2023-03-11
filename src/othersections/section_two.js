import React ,{ useState,useEffect } from 'react';
// import {Boox} from "./secondsectionstyle"

const Box1  = {
    svg : <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M25 0.00292969C18.3696 0.00292969 12.0107 2.63685 7.32233 7.32526C2.63392 12.0137 0 18.3725 0 25.0029C0 31.6333 2.63392 37.9922 7.32233 42.6806C12.0107 47.369 18.3696 50.0029 25 50.0029C37.023 50.0029 50 40.4449 50 25.0029C49.9926 18.3748 47.3563 12.0202 42.6695 7.33344C37.9827 2.64664 31.6281 0.0103408 25 0.00292969V0.00292969ZM10.311 9.79193C10.611 10.6439 10.885 11.4849 11.131 12.3079H9.231V16.1539H12.108C12.331 17.1979 12.515 18.2289 12.658 19.2309H10V23.0769H13.009C13.068 24.3559 13.068 25.6449 13.009 26.9229H10V30.7689H12.659C12.552 31.5309 12.422 32.3029 12.272 33.0769H9.231V36.9229H11.352C11.052 37.9969 10.701 39.0969 10.311 40.2079C8.26647 38.2377 6.64019 35.8755 5.52939 33.2625C4.41859 30.6494 3.84607 27.8393 3.84607 24.9999C3.84607 22.1606 4.41859 19.3504 5.52939 16.7374C6.64019 14.1244 8.26647 11.7621 10.311 9.79193V9.79193ZM15.336 36.9229H18.462V33.0769H16.194C16.331 32.3079 16.45 31.5359 16.549 30.7689H19.231V26.9229H16.867C16.922 25.6439 16.922 24.3559 16.867 23.0769H19.231V19.2309H16.548C16.417 18.2259 16.248 17.2089 16.04 16.1539H17.692V12.3029H15.141C14.69 10.6759 14.141 8.98493 13.49 7.26193C16.914 5.02976 20.9132 3.84133 25.0005 3.84133C29.0878 3.84133 33.087 5.02976 36.511 7.26193C35.864 8.98693 35.311 10.6779 34.86 12.3029H32.308V16.1489H33.96C33.75 17.2049 33.582 18.2209 33.451 19.2259H30.769V23.0719H33.133C33.078 24.3509 33.078 25.6389 33.133 26.9179H30.769V30.7639H33.451C33.551 31.5309 33.668 32.3029 33.806 33.0719H31.538V36.9229H34.664C35.1753 38.8745 35.7861 40.7987 36.494 42.6879C33.0687 44.9096 29.0824 46.1116 25 46.1539C20.9117 46.1588 16.911 44.9698 13.489 42.7329C14.2039 40.8292 14.8203 38.89 15.336 36.9229V36.9229ZM39.686 40.1979C39.298 39.0929 38.951 37.9979 38.648 36.9229H40.769V33.0769H37.729C37.578 32.3029 37.449 31.5309 37.342 30.7689H40V26.9229H36.991C36.932 25.6439 36.932 24.3549 36.991 23.0769H40V19.2309H37.343C37.486 18.2309 37.67 17.1999 37.893 16.1539H40.77V12.3029H38.87C39.116 11.4809 39.39 10.6399 39.69 9.78693C41.7337 11.7594 43.3593 14.1232 44.4698 16.7374C45.5804 19.3516 46.1531 22.1626 46.154 25.0029C46.1832 27.845 45.6236 30.6623 44.5104 33.2774C43.3972 35.8925 41.7546 38.2488 39.686 40.1979Z" fill="white"></path> </svg>,
    subheading : 'Challenge',
    heading : 'Sports',
    paragraph : "Sponsorship activation has historically been siloed into social, digital, print and in-venue.",
}

function Section_two() {
  return (
    <div className='industryx'>
      <Box
      svg = {Box1.svg}
      subheading = {Box1.subheading}
      heading = {Box1.heading}
      paragraph = {Box1.paragraph}
      ></Box>
    </div>
  );
}

const Box = (props) => {
    const {svg,subheading,heading,paragraph} = props
    return(
        <div className='Box-main' onClick={
          () =>{
            
          }
        } >
            <div className='Box-head'>
                <div className='Left-eye'>
                    <div className='oneeye'>
                      {svg}
                    </div>
                    <div className='twoeye'>
                      {svg}
                    </div>

                </div>
                <div className='Right-eye'>{subheading}</div>
            </div>
            <h3 className='eyeheading'>{heading}</h3>
            <p className='eyepara'>{paragraph}</p> 
        </div>
    );
}

export default Section_two;