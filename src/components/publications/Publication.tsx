import Image from "next/image";

import PublicationInfo from "@/components/publications/PublicationInfo";
import PublicationLinks from "@/components/publications/PublicationLinks";
import PublicationTitle from "@/components/publications/PublicationTitle";
import { Publication as Props } from "@/content/publications";

const Publication: React.FC<Props> = (props) => {
  return (
    <li className="stack stack-sm sm:stack-reset sm:stack-h sm:stack-h-sm">
      <Image
        src={props.hero}
        alt={props.title}
        className="h-48 w-full rounded-sm object-cover shadow sm:h-24 sm:w-36"
      />
      <div>
        <PublicationTitle {...props}>{props.title}</PublicationTitle>
        <PublicationInfo {...props} />
        <PublicationLinks {...props} />
      </div>
    </li>
  );
};

export default Publication;
