import { CodeXml } from "lucide-react";

export function NavbarBrand() {
  return (
    <div
      onClick={() => (window.location.href = "/")}
      className="group  flex cursor-pointer items-center pb-2 sm:pb-5 transition-transform duration-450 ease-in-expo hover:scale-110 sm:hover:scale-125"
    >
      <div className="transition-transform duration-500 ease-in-expo group-hover:rotate-[360deg]">
        <CodeXml className="h-4 w-4 sm:h-10 sm:w-10" />
      </div>

      <div className="relative ms-2 flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-expo group-hover:pe-4 sm:group-hover:pe-8">
        <h5 className="text-sm md:text-lg lg:text-xl transition-transform duration-500 ease-in-expo group-hover:-translate-x-full">
          Iftekhar
        </h5>
        <h5 className="text-sm md:text-lg lg:text-xl ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-14">
          Alam
        </h5>
        <h5 className="text-sm md:text-lg lg:text-xl absolute left-20 sm:left-28 ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-14">
          Mithu
        </h5>
      </div>
    </div>
  );
}
