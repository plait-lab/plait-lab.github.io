import Image from "next/image";
import cs from "classnames";

import { type Person, Role } from "@/content/people";

type Props = Person;

const LabMember: React.FC<Props> = ({ name, role, website, headshot }) => {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className={cs(
        "stack-sm col-span-6 md:col-span-4 lg:col-span-3",
        website ? "transition-opacity hover:opacity-75" : ""
      )}
    >
      <Image
        src={headshot}
        alt={name}
        className="h-44 rounded object-cover shadow-lg sm:h-60 lg:h-44"
      />
      <div className={cs(website ? "text-primary" : "text-black")}>
        <p className="text-sm font-bold">{name}</p>
        <p className="text-xs italic">{role}</p>
      </div>
    </a>
  );
};

export default LabMember;
