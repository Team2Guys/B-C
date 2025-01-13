import Container from 'components/Res-usable/Container/Container'
import { projectsTags } from 'data/data'
import React from 'react'
import { Montserrat , Roboto } from 'next/font/google';
export const MontserratFont = Montserrat({
  weight: '400',
  subsets: ['latin-ext'],
});
export const RobotoFont = Roboto({
   weight: '400',
   subsets: ['latin-ext'],
 });

const ProjectsTags = () => {
   return (
      <Container className='pt-20 pb-10 w-full !max-w-[982px]'>
         <h2 className={`text-3xl sm:text-4xl lg:text-5xl text-center ${RobotoFont.className}`}>Made-To-Measure Blinds & Curtains</h2>
         <p className={`text-base sm:text-xl lg:text-2xl w-full md:w-2/3 text-center mx-auto mt-5 ${MontserratFont.className}`}>A RANGE OF THE VAST CHOICES OF WINDOW COVERINGS</p>
         <div className='flex flex-wrap justify-center mt-5 gap-x-2 gap-y-3'>
            {projectsTags.map((tag, index) => (
               <span key={index} className={`bg-secondary text-white rounded-lg p-2 text-12 xs:text-14 sm:text-16 tracking-widest mr-2 ${MontserratFont.className}`}>{tag}</span>
            ))}
         </div>
      </Container>
   )
}

export default ProjectsTags