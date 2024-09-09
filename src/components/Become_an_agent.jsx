const Become_an_agent = () => {
  return (
    <main className="container mx-auto mt-32 mb-24 px-3">
      <div className="bg-[#D8DADF] rounded-3xl flex items-center justify-center flex-col lg:pl-16 lg:h-60 relative z-20">
        <div className="flex flex-col items-center w-full lg:pt-0 pt-12 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-4">
  <span className="lg:text-left text-center">
    <h1 className="lg:text-4xl text-3xl font-medium py-3 text-white" style={{
      fontFamily: "'Playfair Display', serif",
      letterSpacing: "0.1em",
    }}>
      Client COGEB.
    </h1>
    <p className="text-white text-sm lg:w-11/12" style={{
      fontFamily: "'Playfair Display', serif",
    }}>
      Restez informé de nos dernières nouveautés et offres exclusives en vous inscrivant à notre newsletter.
    </p>
  </span>
  <button className="bg-white text-[#001F75] px-8 py-3 rounded-full lg:mt-0 mt-8 lg:ml-4" style={{
    fontFamily: "'Playfair Display', serif",
  }}>
    Inscrivez-vous maintenant
  </button>
</div>
        </div>
        <button className="bg-gradient-to-b from-[#fff] to-[#7992d76b] opacity-40 rounded-full h-20 w-20 cursor-auto absolute -top-6 right-20 z-10"></button>
        {/* <button className="bg-gradient-to-r from-[#74cac5] to-[#26ada5] rounded-full h-20 w-20 cursor-auto absolute xl:bottom-10 bottom-20 lg:left-[19rem] left-200 z-10"></button> */}
      </div>
    </main>
  );
};

export default Become_an_agent;
