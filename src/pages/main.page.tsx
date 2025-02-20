import { FaLongArrowAltDown } from "react-icons/fa";
import IParallaxRef from "../interfaces/IParalllaxRef";
import { Helper } from "../utils/Helper";

export default function MainPage({ parallaxRef }: IParallaxRef) {
  const handleScroll = (page: number) => {
    parallaxRef.current?.scrollTo(page);
  };

  const pStyle: string = "text-2xl font-dm_sans font-extrabold flex flex-col";

  return (
    <div className="min-h-screen w-screen pt-20">
      <div className={`flex-col text-center items-center ${Helper.SECTION_BASE_STYLE}`}>
        <div className=" h-96 w-[64rem] p-1 text-center rounded-lg flex flex-col items-center justify-start bg-gradient-to-tr from-neon_violet via-pink-600 to-main_pink">
          <div className="bg-bg_color h-full w-full">
            <h1 className={`text-2xl font-extrabold font-dm_sans p-8 pb-8 ${Helper.GRADIENT_STYLE}`}>
              Hello, I'm Przemyslaw
            </h1>
            <p className="text-7xl font-dm_sans font-bold text-center text-gray-200 p-5">14yo freelance developer</p>
            <div className="h-32 w-full flex flex-row items-center justify-center gap-40 p-8 pt-10">
              <p className={`${pStyle} ${Helper.GRADIENT_STYLE}`}>
                5+ <span className="text-sm">YEARS LEARNING</span>
              </p>
              <p className={`${pStyle} ${Helper.GRADIENT_STYLE}`}>
                2 <span className="text-sm">FINISHED PROJECTS</span>
              </p>
              <p className={`${pStyle} ${Helper.GRADIENT_STYLE}`}>
                2 <span className="text-sm">PROJECTS IN PROGRESS...</span>
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleScroll(1)}
          className="m-10 h-14 w-28 flex text-center items-center justify-center text-white animate-bounce bg-secondary_bg rounded-lg"
        >
          <FaLongArrowAltDown />
        </button>
      </div>
    </div>
  );
}
