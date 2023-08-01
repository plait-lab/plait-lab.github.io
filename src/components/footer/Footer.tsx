import Text from "@/components/shared/Text";

const GitHubIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="stack stack-xs md:stack-reset md:stack-h md:stack-h-sm mx-auto max-w-screen-md items-center p-4 md:justify-between">
      <a
        href="https://github.com/plait-lab"
        target="_blank"
        rel="noopener noreferrer"
        className="stack-h stack-h-sm flex shrink-0 text-primary transition-opacity hover:opacity-75"
      >
        {GitHubIcon}
        <span className="font-mono">plait-lab</span>
      </a>
      <Text>
        PLAIT Lab combines techniques from Programming Languages and
        Human-Computer Interaction to invent usable programming tools—especially
        programming tools to help teams working for social good.
      </Text>
    </footer>
  );
};

export default Footer;
