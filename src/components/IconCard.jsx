function IconCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center h-full">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-ftg-green/10 text-ftg-green flex items-center justify-center mb-3 sm:mb-4">
        <FTGIcon name={icon} size={28} className="text-ftg-green" />
      </div>
      <h3 className="text-base sm:text-lg font-bold text-ftg-forest mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}