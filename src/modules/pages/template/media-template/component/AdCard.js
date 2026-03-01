export const AdCard = ({ bgImg, link }) => {
  return (
    <a
    href={link}
    className="ml-0 flex items-center text-sm font-medium text-blue-200 hover:underline dark:text-cyan-500 md:ml-1 md:inline-flex"
  >
    <section
      className="ad-card relative rounded-md bg-center bg-no-repeat bg-gray-200 bg-blend-multiply bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
    </section>
    </a>
  );
};
