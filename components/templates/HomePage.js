// components/module
import CallBtn from "../element/CallBtn";
import HamburgerMenu from "../module/HamburgerMenu";
import LeftMenu from "../module/LeftMenu";
import TypeAutomat from "../module/TypeAutomat";

//react-icons

function HomePage() {
  return (
    <div>
      <div className="absolute z-10 top-[15rem] lg:right-[10rem] right-[40px]">
        <TypeAutomat />
      </div>
      <div className="flex justify-between">
        <div className="w-[100%] m-auto flex justify-start h-[100vh] bg absolute top-0 ">
          <div className="w-[1400px] mx-auto mt-9 mr-8 lg:hidden">
            <HamburgerMenu />
          </div>
        </div>
        <div className="z-10 absolute left-0 h-full hidden lg:block">
          <LeftMenu />
        </div>
      </div>
      <div className="fixed right-0 z-30">
        <CallBtn />
      </div>
    </div>
  );
}

export default HomePage;
