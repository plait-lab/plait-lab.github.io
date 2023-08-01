import Image from "next/image";

import Text from "@/components/shared/Text";
import { Project } from "@/content/projects";

type Props = Project;

const Project: React.FC<Props> = ({
  title,
  description,
  image: { src, alt },
  href,
}) => {
  return (
    <div className="stack stack-xs col-span-12 md:col-span-6">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="stack stack-xs text-base font-bold text-primary transition-opacity hover:opacity-75"
        >
          <Image
            src={src}
            alt={alt}
            className="h-52 w-auto rounded-md object-cover shadow-lg"
          />
          <p>{title}</p>
        </a>
      ) : (
        <div className="stack stack-xs text-base font-bold transition-opacity hover:opacity-75">
          <Image
            src={src}
            alt={alt}
            className="h-52 w-auto rounded-md object-cover shadow-lg"
          />
          <p>{title}</p>
        </div>
      )}
      <Text>{description}</Text>
    </div>
  );
};

export default Project;
