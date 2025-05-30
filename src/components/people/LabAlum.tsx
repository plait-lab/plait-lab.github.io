import Image from "next/image";
import cs from "classnames";

import { type Person, Role } from "@/content/people";

type Props = Person;

const LabAlum: React.FC<Props> = ({ name, role, website, headshot }) => {
  return (
    
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className={cs(
        "col-span-6 md:col-span-4 lg:col-span-3 flex items-center gap-2",
        website ? "transition-opacity hover:opacity-75" : ""
      )}
    >
      <Image
        src={headshot}
        alt={name}
        className="h-12 w-12 rounded object-cover shadow"
      />
      <div className={cs(website ? "text-primary" : "text-black")}>
        <p className="text-sm font-bold">{name}, <span className="text-xs italic">{role.split(" ")[0]}</span></p>
      </div>
    </a>
  );
};

export default LabAlum;
