import Image from "next/image";

import { Publication, PublicationKind } from "@/content/publications";

import AcmDl from "@/../public/acm-dl.png";
import YouTube from "@/../public/yt.png";

type Props = Publication;

const ExternalLinkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const PublicationLinks: React.FC<Props> = (props) => {
  const { title, kind } = props;

  let body: React.ReactNode;

  switch (kind) {
    case PublicationKind.Conference: {
      const { acmDlUrl, youtubeUrl } = props;

      body = (
        <>
          <a
            href={acmDlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="stack-h stack-h-xs mt-2 items-center transition-opacity hover:opacity-75"
          >
            <Image
              src={AcmDl}
              alt={`${title} on the ACM Digital Library`}
              width={20}
              height={20}
            />
            <span className="font-mono text-xs">ACM DL</span>
          </a>
          {youtubeUrl ? (
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="stack-h stack-h-xs mt-2 items-center transition-opacity hover:opacity-75"
            >
              <Image src={YouTube} alt={`${title} on YouTube`} width={20} />
              <span className="font-mono text-xs">YouTube</span>
            </a>
          ) : null}
        </>
      );
      break;
    }
    case PublicationKind.Journal: {
      const { acmDlUrl } = props;

      body = (
        <a
          href={acmDlUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="stack-h stack-h-xs mt-2 items-center transition-opacity hover:opacity-75"
        >
          <Image
            src={AcmDl}
            alt={`${title} on the ACM Digital Library`}
            width={20}
            height={20}
          />
          <span className="font-mono text-xs">ACM DL</span>
        </a>
      );
      break;
    }
    case PublicationKind.Workshop: {
      const { pdfUrl } = props;
      if (pdfUrl){
        body = (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="stack-h stack-h-xs mt-2 items-center transition-opacity hover:opacity-75"
          >
            {ExternalLinkIcon}
            <span className="font-mono text-xs">PDF</span>
          </a>
        );
        break;
      }
    }
  }

  return <div className="stack-h stack-h-sm items-center">{body}</div>;
};

export default PublicationLinks;
