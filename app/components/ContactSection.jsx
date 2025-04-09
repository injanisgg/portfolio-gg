import React from 'react';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section>
        <div className="text-white flex flex-col justify-center md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            {/* photo */}
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <Image 
                src={'/images/profile.png'}
                alt='profile'
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                width={350}
                height={350}/>
            </div>

            {/* contact */}
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl text-white font-bold mb-4'>Contact Me!</h2>
                <p className='text-base lg:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eligendi modi maxime officiis nam explicabo ipsa corporis numquam nobis tenetur enim ab quia voluptas, quisquam nostrum fuga suscipit libero ipsum.
                </p>
                
            </div>
        </div>
    </section>
  )
}

export default ContactSection;
