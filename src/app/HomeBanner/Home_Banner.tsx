import Banner from 'components/HomeBanner/Home_Banner';

const HomepageBanner: React.FC = () => {
  const bannerData = {
    imageUrl: '/assets/images/dd.png',
    title: 'MADE TO MEASURE SHUTTERS FOR YOU..',
    buttonText: 'Booking Now',
  };

  return (
    <div className=" mx-auto ">
      <Banner data={bannerData} />
    </div>
  );
};

export default HomepageBanner;
