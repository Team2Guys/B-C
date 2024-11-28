import React from 'react';
import MotorisedPage from 'components/ui/MotorisedPage';
import { motorisedPageData } from 'data/data';

const MotorisedBlinds = () => {
  return (
    <MotorisedPage
      title={motorisedPageData.title}
      heroImage={motorisedPageData.heroImage}
      infoTitle={motorisedPageData.infoTitle}
      infoSubtitle={motorisedPageData.infoSubtitle}
      infoDescription={motorisedPageData.infoDescription}
      infoImage={motorisedPageData.infoImage}
      measureTitle={motorisedPageData.measureTitle}
      measureDescription={motorisedPageData.measureDescription}
      measureTitle1={motorisedPageData.measureTitle1}
      measureDescription1={motorisedPageData.measureDescription1}
      chooseustitle={motorisedPageData.chooseustitle}
      chooseustitle1={motorisedPageData.chooseustitle1}
      chooseUsItems={motorisedPageData.chooseUsItems}
      motorization={motorisedPageData.motorization}
      additionalDescription={motorisedPageData.additionalDescription}
      additionalImage={motorisedPageData.additionalImage}
      additionalDescription2={motorisedPageData.additionalDescription2}
      additionalDescription3={motorisedPageData.additionalDescription3}
    />
  );
};
export default MotorisedBlinds;