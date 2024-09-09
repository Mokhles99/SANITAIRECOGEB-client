import { FaCartPlus } from "react-icons/fa"; // Vente
import { MdSupportAgent } from "react-icons/md"; // Conseil Client
import { FaTruckMoving } from "react-icons/fa"; // Transport

const Services = () => {
  return (
    <main className="bg-[#f2f2f2] mt-20 lg:py-20" id="service">
      <div className="container mx-auto px-3 text-center">
        <p className="uppercase text-3xl py-8" style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.3em",
            }}>Nos services</p>
        <h1 className="lg:text-2xl text-2xl font-medium " style={{
              fontFamily: "'Playfair Display', serif",
             
            }}>
       Nous offrons une gamme de services personnalisés pour répondre à vos besoins spécifiques, assurant une qualité et une satisfaction exceptionnelles
        </h1>

        <div className="flex lg:flex-row flex-col gap-x-16 gap-y-8 py-20">
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl">
            <button className="bg-[#576D80] text-white rounded-full w-20 h-20 shadow-2xl">
              <FaCartPlus className="w-1/2 h-1/2 m-auto" />
            </button>
            <p className="text-lg font-medium py-4">Vente</p>
            <p className="w-2/3 mx-auto text-[#a5a5a5] text-justify">
              COGEB propose une large gamme de produits de construction, incluant bois et articles sanitaires, pour satisfaire tous les besoins.
            </p>
          </div>
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl">
            <button className="bg-[#576D80] text-white rounded-full w-20 h-20 shadow-2xl">
              <MdSupportAgent className="w-1/2 h-1/2 m-auto " />
            </button>
            <p className="text-lg font-medium py-4">Conseil Client</p>
            <p className="w-2/3 mx-auto text-[#a5a5a5] text-justify">
              Nos experts vous guident dans le choix des produits adaptés à vos projets, en tenant compte de vos besoins et de votre budget.
            </p>
          </div>
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl">
            <button className="bg-[#576D80] text-white rounded-full w-20 h-20 shadow-2xl">
              <FaTruckMoving className="w-1/2 h-1/2 m-auto" />
            </button>
            <p className="text-lg font-medium py-4">Transport</p>
            <p className="w-2/3 mx-auto text-[#a5a5a5] text-justify">
              COGEB assure un transport fiable pour que vos produits arrivent à temps et en bon état.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
