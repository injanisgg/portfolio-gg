import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope  } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
  const contactData = [
    { icon: faSquareGithub, label: 'Github', path: 'https://github.com/injanisgg' },
    { icon: faLinkedin, label: 'Linkedin', path: 'https://www.linkedin.com/in/suginiinjani/' },
    { icon: faSquareInstagram, label: 'Instagram', path: 'https://www.instagram.com/s.injzhani' },
    { icon: faSquareEnvelope, label: 'Email', path: 'mailto:forggdev@gmail.com' }
  ]

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
                <p className='text-base lg:text-lg '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eligendi modi maxime officiis nam explicabo ipsa corporis numquam nobis tenetur enim ab quia voluptas, quisquam nostrum fuga suscipit libero ipsum.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-4 md:gap-8">
                  {contactData.map((contact, index) => (
                    <Link
                      key={index}
                      href={contact.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center w-20"
                    >
                      <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition">
                        <FontAwesomeIcon icon={contact.icon} className="text-2xl text-white" />
                      </div>
                      <span className="mt-2 text-sm text-white text-center">{contact.label}</span>
                    </Link>
                  ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection;
