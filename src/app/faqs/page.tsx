import SectionHeader from "components/NewHomecomponents/faqsbanner";
import FaqTabs from "components/NewHomecomponents/faqstabs";
import Container from "components/Res-usable/Container/Container";
import { Faqspara } from "data/Homedata/tabdata";

const FAQPage = () => {
  return (
    <div>
      <SectionHeader
        title="Frequently Asked Questions"
        backgroundImage="/assets/Homenew/faqsbanner.webp" 
      />
      <Container>
      <div className="flex justify-center items-center">
      <h2
        className="font-roboto font-normal text-14 md:text-20 text-center mt-2 mb-5 sm:my-7 text-primary md:max-w-screen-lg "
        dangerouslySetInnerHTML={{ __html: Faqspara }}
      />
      </div>
      <FaqTabs/>
      </Container>

    </div>
  );
};

export default FAQPage;
