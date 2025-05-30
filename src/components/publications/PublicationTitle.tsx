import { Publication, PublicationKind } from "@/content/publications";

type Props = Publication;

const PublicationTitle: React.FC<React.PropsWithChildren<Props>> = (props) => {
  let pdfHref = "";

  switch (props.kind) {
    case PublicationKind.Conference:
    case PublicationKind.Journal:
      const { acmDlUrl } = props;
      pdfHref = acmDlUrl.replace("doi", "doi/pdf");
      break;
    case PublicationKind.Workshop:
      const { pdfUrl } = props;
      if (pdfUrl){
        pdfHref = pdfUrl;
      }
      break;
  }

  return (
    <a
      href={pdfHref}
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-primary transition-opacity hover:opacity-75"
    >
      {props.children}
    </a>
  );
};

export default PublicationTitle;
