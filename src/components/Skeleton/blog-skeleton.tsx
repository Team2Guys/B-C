import Container from 'components/Res-usable/Container/Container';
import React from 'react';

const BlogSkeleton = () => {
    return (
        <>
        <Container className="flex px-2 max-sm:flex-wrap max-sm:flex-col-reverse">
            <div className="w-full sm:w-3/4">
                <div className="flex flex-col gap-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            className="flex gap-4 p-4 flex-col sm:flex-row border-b items-center border-gray-300 animate-pulse">
                            <div className="rounded-lg bg-gray-300 w-full sm:w-[160px] h-52 sm:h-[160px]"></div>

                            <div className="grow space-y-4">
                                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full sm:w-1/4 px-2 mt-4 sm:mt-14 flex flex-col gap-4 items-center">
                <div className="h-10 bg-gray-300 rounded-md w-full animate-pulse"></div>
                <div className="w-full bg-gray-400 rounded-md py-3 animate-pulse space-y-3 p-2">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="h-8 bg-gray-300 rounded-md w-full animate-pulse"
                        ></div>
                    ))}
                </div>
            </div>
             </Container>
        </>
    );
};

export default BlogSkeleton;
