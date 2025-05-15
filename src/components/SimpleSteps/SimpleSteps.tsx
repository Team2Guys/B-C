"use client";

import Container from "components/Res-usable/Container/Container";
import { workingProcessData } from "data/SellerSlider";
import Image from "next/image";

export default function SimpleSteps() {
    return (
        <Container className="py-12 md:py-20">
            <div className="mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    {workingProcessData.heading}
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                    {workingProcessData.subheading}
                </p>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative w-full h-[350px] md:h-[500px]">
                        <Image
                            src={workingProcessData.imageUrl}
                            alt="Working Process"
                            fill
                            className="rounded-xl object-cover"
                        />
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-yellow-600 mb-6 ">
                            Just 4 Simple Steps
                        </h3>
                        <div className="space-y-6 ">
                            {workingProcessData.steps.map((step, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="rounded-full bg-yellow-400 p-5 text-sm text-black font-semibold flex items-center justify-center shadow-md min-w-[60px] min-h-[80px]">
                                        {step.step}
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold">{step.title}</p>
                                        <p className="text-sm text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
