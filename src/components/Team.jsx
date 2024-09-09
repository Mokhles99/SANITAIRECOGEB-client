/* eslint-disable react/no-unescaped-entities */
const Team = () => {
  return (
    <main className="container mx-auto px-3">
      <p className="text-[#0c4f37] uppercase md:text-xl text-lg text-center">
        Introduce yourself to
      </p>
      <h1 className="lg:text-4xl text-3xl font-medium capitalize pt-3 pb-12 text-center">
        Our Team of Experts
      </h1>

      <section className="lg:flex items-center lg:grid-cols-none grid grid-cols-2 lg:gap-12 gap-8 justify-center">
        <div className="lg:w-1/4">
          <img
            src="/assets/person1.svg"
            alt=""
            className="md:h-80 h-60 w-full rounded-b-3xl rounded-tr-3xl rounded-tl-[50%] object-cover bg-[#cbcbc9]"
          />
          <p className="text-center pt-4 md:text-2xl font-semibold">Brendom M</p>
          <p className="text-center pt-4 md:text-base text-sm text-[#0c4f37] font-semibold">
            CEO & Founder
          </p>
        </div>
        <div className="lg:w-1/4">
          <img
            src="/assets/female1.jpg"
            alt=""
            className="md:h-80 h-60 w-full rounded-b-3xl rounded-tr-3xl rounded-tl-[50%] object-cover bg-[#cbcbc9]"
          />
          <p className="text-center pt-4 md:text-2xl font-semibold">Jodi J. Appleby</p>
          <p className="text-center pt-4 md:text-base text-sm text-[#0c4f37] font-semibold">
            Real Estate Developer
          </p>
        </div>
        <div className="lg:w-1/4">
          <img
            src="/assets/image_2.jpg"
            alt=""
            className="md:h-80 h-60 w-full rounded-b-3xl rounded-tr-3xl rounded-tl-[50%] object-cover bg-[#cbcbc9]"
          />
          <p className="text-center pt-4 md:text-2xl font-semibold">Justin S. Meza</p>
          <p className="text-center pt-4 md:text-base text-sm text-[#0c4f37] font-semibold">
            Listing Agent
          </p>
        </div>
        <div className="lg:w-1/4">
          <img
            src="/assets/female2.jpg"
            alt=""
            className="md:h-80 h-60 w-full rounded-b-3xl rounded-tr-3xl rounded-tl-[50%] object-cover bg-[#cbcbc9]"
          />
          <p className="text-center pt-4 md:text-2xl font-semibold">Susan T. Smith</p>
          <p className="text-center pt-4 md:text-base text-sm text-[#0c4f37] font-semibold">
            Buyer's Agent
          </p>
        </div>
      </section>
    </main>
  );
};

export default Team;
