import SectionHeader from "components/NewHomecomponents/faqsbanner";
import FaqTabs from "components/NewHomecomponents/faqstabs";
import Container from "components/Res-usable/Container/Container";
import { Faqspara } from "data/Homenewdata/tabdata";

const FAQPage = () => {
  return (
    <div>
      <SectionHeader
        title="Frequently Asked Questions"
        backgroundImage="/assets/Homenew/faqsbanner.webp" 
      />
      <Container>
      <h2
        className="font-roboto font-normal text-14 md:text-20 text-center mt-2 mb-5 sm:my-7 text-primary"
        dangerouslySetInnerHTML={{ __html: Faqspara }}
      />
      <FaqTabs/>
      </Container>

    </div>
  );
};

export default FAQPage;
