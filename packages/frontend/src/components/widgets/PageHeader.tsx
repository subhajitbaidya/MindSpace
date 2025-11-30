export const PageHeader = ({
  text,
  description,
}: {
  text: string;
  description: string;
}) => {
  return (
    <div className="bg-linear-to-r from-[#e3ffe7] to-[#d9e7ff] py-5">
      <div className="max-w-7xl flex items-center flex-col mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-gray-600 mb-2">{text}</h1>
        <p className="text-xl text-gray-600">{description}</p>
      </div>
    </div>
  );
};
