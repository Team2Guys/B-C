import React from 'react'
import { Skeleton, Button, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const HeroSkeleton = () => {
    return (
        <div className="flex justify-between p-5 Hero-slider z-40 pb-3 xl:pt-0 2xl:pt-10 content-center min-h-[60svh] xs:h-full md:h-[55vh] lg:h-[65vh] xl:h-[80vh] 2xl:h-[84vh]">
            <div className="flex pr-5 w-1/2  justify-center items-center flex-col">
                <Skeleton active>
                    <Title level={4} className="text-2xl font-semibold">Header</Title>
                    <Paragraph className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Paragraph>
                    <Button type="primary" className=" text-white">Click Me</Button>
                </Skeleton>
            </div>

            <div className="flex gap-2 items-center">
                <Skeleton.Avatar active size={350} shape="circle" />
                <Skeleton.Avatar active size={450} shape="circle" className="mb-4" />
            </div>
        </div>
    );
};

export default HeroSkeleton;
