import { FaReact } from "react-icons/fa6";
export default function SkillCard({ title, rotate }) {
  return (
    <div
      className={`bg-[#1c1c1c] text-white rounded-2xl p-8 w-64 h-72 flex flex-col items-center justify-start gap-6 shadow-lg transition-transform duration-300 ${
        rotate ? "rotate-[-6deg]" : ""
      }`}
    >
      
      <div className="text-6xl text-white relative">
        <FaReact></FaReact>
        
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-lime-400 rounded-full"></span>
      </div>

      <h3 className="text-xl font-bold text-white text-center">{title}</h3>

      <p className="text-gray-400 text-center text-sm">
        Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis
      </p>
    </div>
  );
}