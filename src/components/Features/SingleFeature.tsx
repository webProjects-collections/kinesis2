import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { imgSrc, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp " data-wow-delay=".15s">
        <img src={imgSrc} alt={title} className="h-full w-full object-cover" />
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
