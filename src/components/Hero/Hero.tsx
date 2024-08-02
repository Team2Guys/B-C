function Hero() {
  return (
    <section className="bg-hero bg-center bg-no-repeat bg-cover h-screen w-full flex flex-col justify-center items-center">
      <div className="text-center max-w-[800px] px-4">
        <h1 className="font-extrabold md:text-[40px] sm:text-4xl text-2xl leading-10 text-white drop-shadow-lg">
          CUSTOM{' '}
          <span className="bg-primary rounded-md px-1 py-0">WINDOW BLINDS</span>{' '}
          WHERE STYLE MEETS PRECISION
        </h1>
        <p className="text-white font-light md:text-2xl text-xl leading-8 drop-shadow-2xl max-w-[660px] m-auto">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy.
        </p>
      </div>
    </section>
  );
}

export default Hero;
