import Image from "next/image";

import Text from "@/components/shared/Text";
import { Project } from "@/content/projects";

import AcmDl from "@/../public/acm-dl.png";
import GitHub from "@/../public/github-mark.png";
import YouTube from "@/../public/yt.png";

type Props = Project;

const Project: React.FC<Props> = ({
  title,
  description,
  image: { src, alt },
  href,
  githubUrl,
  acmDlUrl,
  youtubeUrl,
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
        <div className="stack stack-xs text-base font-bold">
          <Image
            src={src}
            alt={alt}
            className="h-52 w-auto rounded-md object-cover shadow-lg"
          />
          <p>{title}</p>
        </div>
      )}
      <div>
        {githubUrl ?
          (<a className="text-primary inline-block mr-2" href={githubUrl}>
              <Image
                src={GitHub}
                alt={`${title} on GitHub`}
                width={20}
                height={20} />
          </a>) : ""
        }
        {acmDlUrl ?
          (<a className="text-primary inline-block mr-2" href={acmDlUrl}>
              <Image
                src={AcmDl}
                alt={`${title} on ACM DL`}
                width={20}
                height={20} />
          </a>) : ""
        }
        {youtubeUrl ?
          (<a className="text-primary inline-block mr-2 align-text-top" href={youtubeUrl}>
              <Image
                src={YouTube}
                alt={`${title} on Youtube`}
                width={20}
                height={20} />
          </a>) : ""
        }
      </div>
      <Text>{description}</Text>
    </div>
  );
};

export default Project;
