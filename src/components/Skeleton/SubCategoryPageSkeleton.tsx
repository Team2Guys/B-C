import Container from 'components/Res-usable/Container/Container';
import React from 'react';
const SubCategoryPageSkeleton = () => {
    return (
        <div>
            <div
                className={`bg-gray-300 h-60 w-full rounded-lg`}
            ></div>
            <Container className="flex flex-col gap-5 mt-10">
                <div className="bg-gray-300 h-10 w-3/4 mx-auto rounded-lg"></div>
                <div className="bg-gray-300 h-40 w-full rounded-lg mt-5"></div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 animate-pulse'>
                    <div className="bg-gray-300 h-96 w-full rounded-lg"></div>
                    <div className="bg-gray-300 h-96 w-full rounded-lg"></div>
                    <div className="bg-gray-300 h-96 w-full rounded-lg"></div>
                    <div className="bg-gray-300 h-96 w-full rounded-lg"></div>
                </div>
            </Container>
            <div className="bg-gray-300 h-60 w-full rounded-lg mt-10"></div>
            <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-pulse my-10'>
                    <div className="bg-gray-300 h-96 w-full rounded-lg"></div>
                    <div className="bg-gray-300 h-96 w-full rounded-lg"></div>
                    <div className="bg-gray-300 h-96 w-full rounded-lg"></div>
            </Container>
        </div>
    );
};

export default SubCategoryPageSkeleton;
