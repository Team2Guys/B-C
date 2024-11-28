import React from 'react';
import { motorisedPageData1 } from 'data/data';
import MotorisedPage from 'components/ui/MotorisedPage';

const MotorisedCurtains = () => {
  return (
    <MotorisedPage
      title={motorisedPageData1.title}
      heroImage={motorisedPageData1.heroImage}
      infoTitle={motorisedPageData1.infoTitle}
      infoSubtitle={motorisedPageData1.infoSubtitle}
      infoDescription={motorisedPageData1.infoDescription}
      infoImage={motorisedPageData1.infoImage}
      measureTitle={motorisedPageData1.measureTitle}
      measureDescription={motorisedPageData1.measureDescription}
      measureTitle1={motorisedPageData1.measureTitle1}
      measureDescription1={motorisedPageData1.measureDescription1}
      chooseustitle={motorisedPageData1.chooseustitle}
      chooseustitle1={motorisedPageData1.chooseustitle1}
      chooseUsItems={motorisedPageData1.chooseUsItems1}
      motorization={motorisedPageData1.motorization1}
      additionalDescription={motorisedPageData1.additionalDescription}
      additionalImage={motorisedPageData1.additionalImage}
      additionalDescription2={motorisedPageData1.additionalDescription2}
      additionalDescription3={motorisedPageData1.additionalDescription3}
    />
  );
};

export default MotorisedCurtains;