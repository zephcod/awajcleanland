import React from 'react'
import RoundButton from "@/components/button/round";
import SingleInput from "@/components/input/singleinput";
import {BsFillChatSquareHeartFill} from 'react-icons/bs';


const Subscribe = () => {
  return (
    <section className="relative pb-12 pt-12 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="text-2xl md:text-6xl font-bold">
              Subscribe to our newsletter
            </h1><br/>
            <span className="mb-9 mt-4 text-lg font-light md:text-2xl">
              Enter your email address and get our newsletters straight away.
            </span>
            <div className="max-w-sm justify-items-center m-auto space-y-2">
            <SingleInput/> <br/>
            <RoundButton url='/' text="Subscribe">
              <span><BsFillChatSquareHeartFill/></span>
            </RoundButton>
            </div>
        </div>
      </section>
  )
}

export default Subscribe