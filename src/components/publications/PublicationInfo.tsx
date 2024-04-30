import {
  Publication,
  PublicationKind,
  ConferencePublication,
  JournalPublication,
} from "@/content/publications";

type Props = Publication;

/**
 * Formats a list of authors into a human-readable string.
 * @example <caption>List length of 1.</caption>
 * // returns "Kiké Hernandez"
 * formatAuthors(["Kiké Hernandez"])
 * @example <caption>List length of 2.</caption>
 * // returns "Kiké Hernandez and Mastaka Yoshida"
 * formatAuthors(["Kiké Hernandez", "Mastaka Yoshida"])
 * @example <caption>List length > 2.</caption>
 * // returns "Kiké Hernandez, Mastaka Yoshida, and Alex Verdugo"
 * formatAuthors(["Kiké Hernandez", "Mastaka Yoshida", "Alex Verdugo"])
 *
 * @param authors – A list of authors.
 * @returns A human-readable string of authors.
 */
function formatAuthors(authors: string[]): string {
  switch (authors.length) {
    case 0:
      return "";
    case 1:
      return authors[0];
    case 2:
      return authors.join(" and ");
    default:
      return authors
        .slice(0, -1)
        .join(", ")
        .concat(`, and ${authors.at(-1)!}`);
  }
}

/**
 * Formats a conference object into a string with the conference name, acronym, and year.
 * @example
 * // returns "Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (CHI '23)"
 * formatConferenceName({
 *   name: "Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems",
 *   acronym: "CHI"
 * }, new Date("2023-04-23"));
 *
 * @param conference – A conference object containing the name and acronym of the conference.
 * @param date – A Date object containing the date of the conference.
 * Prefer using the date of the publication listed on the ACM Digital Library.
 * @returns A string containing the conference name, acronym, and year.
 */
function formatConferenceName(
  conference: ConferencePublication["conference"],
  date: Date
): string {
  const { name, acronym } = conference;
  const year = date.getUTCFullYear().toString().slice(-2);

  return `${name} (${acronym} '${year})`;
}

/**
 * Formats a journal object into a string with journal name, volume, issue, and year.
 * @example
 * // returns "Communications of the ACM, Vol. 64, Issue 8 • 2021"
 * formatJournalName({
 *   name: "Communications of the ACM",
 *   volume: 64,
 *   issue: 8
 * }, new Date("2021-07-26"))
 *
 * @param journal – A journal object containing the name, volume, and issue of the journal.
 * @param date – A Date object containing the date of publication.
 * @returns A string containing the journal name, volume, issue, and year.
 */
function formatJournalName(
  journal: JournalPublication["journal"],
  date: Date
): string {
  const { name, volume, issue } = journal;

  return `${name}, Vol. ${volume}, Issue ${issue} • ${date.getUTCFullYear()}`;
}

const PublicationInfo: React.FC<Props> = (props) => {
  const { kind, authors, equalContribution, date } = props;

  const formattedAuthors = formatAuthors(authors, equalContribution);
  let venue = "";

  switch (kind) {
    case PublicationKind.Conference: {
      const { conference } = props;
      venue = formatConferenceName(conference, date);
      break;
    }
    case PublicationKind.Journal: {
      const { journal } = props;
      venue = formatJournalName(journal, date);
      break;
    }
    case PublicationKind.Workshop: {
      const { workshop } = props;
      venue = `${workshop} ${date.getUTCFullYear()}`;
    }
  }

  return (
    <>
      <p className="text-sm leading-6">
        {formattedAuthors}
        {equalContribution ? <span className="text-gray-400"> (* equal contribution)</span> : ""}</p>
      <p className="font-serif text-sm italic">{venue}</p>
    </>
  );
};

export default PublicationInfo;
