import Image from "next/image";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 ">
            <div
              className="mb-12w flex flex-col rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:flex-row lg:justify-between lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <div className="w-full">
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Vuoi Prenotare Una Visita?
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  Prenotala ora online in meno di un minuto
                </p>

                <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                  Prenotazione Online
                </button>
              </div>
              <div className="w-full">
                <img
                  src="/images/visita.jpg"
                  className="hidden h-full w-full max-w-lg object-cover lg:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
