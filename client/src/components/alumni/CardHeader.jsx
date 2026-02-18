export function Header({ title, desc, link, badge }) {
  return (
    <div className="flex justify-between mb-5">

      <div>
        <h3 className="font-serif text-lg text-[#1C1C1E]">
          {title}
        </h3>

        {desc && (
          <p className="text-xs text-gray-400 mt-1">
            {desc}
          </p>
        )}
      </div>

      {link && (
        <button className="text-xs text-[#2A6B7C] hover:underline">
          {link}
        </button>
      )}

      {badge && (
        <span className="bg-red-600 text-white text-[10px] px-2 py-1 rounded-full font-bold">
          {badge}
        </span>
      )}
    </div>
  );
}
