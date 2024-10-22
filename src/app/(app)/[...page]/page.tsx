const page = ({ params }: { params: { page: string } }) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-purple-600 capitalize">
        {params.page} page
      </h1>
      <br />
      <p className="text-2xl font-bold text-red-500">Under Construction...</p>
    </div>
  );
};

export default page;
