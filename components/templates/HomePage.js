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
        <div className="lg:w-[100%] lg:left-0 left-[-20px] overflow-hidden w-[780px] ml-4 m-auto flex justify-start h-[100vh] bg absolute top-0 ">
          <div className="mx-auto z-40 mt-9 mr-8 lg:hidden fixed right-0 w-full">
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
