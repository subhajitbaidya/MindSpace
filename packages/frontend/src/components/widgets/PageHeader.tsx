export const PageHeader = ({
  text,
  description,
}: {
  text: string;
  description: string;
}) => {
  return (
    <div className="bg-[linear-gradient(90deg,rgba(46,139,87,1)_0%,rgba(255,192,203,1)_0%,rgba(235,162,191,1)_0%,rgba(128,0,128,1)_100%)] py-5">
      <div className="max-w-7xl flex items-center flex-col mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-white mb-2">{text}</h1>
        <p className="text-xl text-white/90">{description}</p>
      </div>
    </div>
  );
};
