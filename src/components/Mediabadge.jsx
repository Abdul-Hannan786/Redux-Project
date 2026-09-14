const Mediabadge = ({ type }) => {
  const getMediaTagColor = () => {
    switch (type) {
      case "video":
        return "text-lime-500 bg-lime-50 border border-lime-500/20";
      case "image":
        return "text-amber-500 bg-amber-50 border border-amber-500/10";
      default:
        return "text-rose-500 bg-rose-50 border border-rose-500/10";
    }
  };
  return (
    <div
      className={`absolute top-4 left-5 ${getMediaTagColor()} px-4 rounded-full`}
    >
      <h2 className="font-semibold text-[13px]">{type}</h2>
    </div>
  );
};

export default Mediabadge;
