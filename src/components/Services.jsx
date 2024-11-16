import { FaCartPlus } from "react-icons/fa"; // Vente
import { MdSupportAgent } from "react-icons/md"; // Conseil Client
import { FaTruckMoving } from "react-icons/fa"; // Transport
import { useTranslation } from "react-i18next";  // Importer useTranslation

const Services = () => {
  const { t } = useTranslation();  // Utiliser useTranslation pour accéder aux traductions
  
  return (
    <main className="bg-[#f2f2f2] mt-20 lg:py-20" id="service">
      <div className="container mx-auto px-3 text-center">
        <p className="uppercase text-3xl py-8" style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.3em",
            }}>
          {t('services_title')} {/* Traduction du titre "Nos services" */}
        </p>
        <h1 className="lg:text-2xl text-2xl font-medium " style={{
              fontFamily: "'Playfair Display', serif",
            }}>
          {t('services_description')} {/* Traduction de la description */}
        </h1>

        <div className="flex lg:flex-row flex-col gap-x-16 gap-y-8 py-20">
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl">
            <button className="bg-[#576D80] text-white rounded-full w-20 h-20 shadow-2xl cursor-default">
              <FaCartPlus className="w-1/2 h-1/2 m-auto" />
            </button>
            <p className="text-lg font-medium py-4">{t('sales')}</p> {/* Traduction de "Vente" */}
            <p className="w-2/3 mx-auto text-[#a5a5a5] text-justify">
              {t('sales_description')} {/* Traduction de la description de la vente */}
            </p>
          </div>
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl">
            <button className="bg-[#576D80] text-white rounded-full w-20 h-20 shadow-2xl cursor-default">
              <MdSupportAgent className="w-1/2 h-1/2 m-auto " />
            </button>
            <p className="text-lg font-medium py-4">{t('customer_advice')}</p> {/* Traduction de "Conseil Client" */}
            <p className="w-2/3 mx-auto text-[#a5a5a5] text-justify">
              {t('customer_advice_description')} {/* Traduction de la description du conseil client */}
            </p>
          </div>
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl">
            <button className="bg-[#576D80] text-white rounded-full w-20 h-20 shadow-2xl cursor-default">
              <FaTruckMoving className="w-1/2 h-1/2 m-auto" />
            </button>
            <p className="text-lg font-medium py-4">{t('transport')}</p> {/* Traduction de "Transport" */}
            <p className="w-2/3 mx-auto text-[#a5a5a5] text-justify">
              {t('transport_description')} {/* Traduction de la description du transport */}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
