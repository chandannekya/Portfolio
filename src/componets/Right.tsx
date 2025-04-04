const Right = () => {
  return (
    <div className="right-0 bottom-0 h-screen fixed flex items-end pr-8">
      <div className="flex flex-col items-center gap-6 text-[#64ffda] font-mono">
        {/* Rotated Email */}
        <a
          href="mailto:chandannekya@gmail.com"
          className="tracking-wider text-2xl hover:text-white transition duration-300 cursor-pointer"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          chandannekya@gmail.com
        </a>

        {/* Vertical Line */}
        <div className="w-[1px] h-32 bg-[#ccd6f6]"></div>
      </div>
    </div>
  );
};

export default Right;
