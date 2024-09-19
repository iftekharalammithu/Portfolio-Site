import { CodeXml } from "lucide-react";

export function NavbarBrand() {
  return (
    <div className="group transition-transform duration-450 ease-in-expo  hover:scale-125 flex cursor-pointer pb-5">
      <div className="transition-transform duration-500 ease-in-expo group-hover:rotate-[360deg]">
        <CodeXml />
      </div>

      <div className="relative ms-2 flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-expo group-hover:pe-8">
        <h5 className="transition-transform duration-500 ease-in-expo group-hover:-translate-x-full">
          Iftekhar
        </h5>
        <h5 className="ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-14">
          Alam
        </h5>
        <h5 className="absolute left-28 ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-14">
          Mithu
        </h5>
      </div>
    </div>
  );
}
