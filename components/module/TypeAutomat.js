"use client";

import { Typewriter } from "react-simple-typewriter";

function TypeAutomat() {
  return (
    <h1 className="text-6xl z-40 text-[#FFFF] fotn-bold">
      <Typewriter
        words={[
          "آموزش روانشناسی و روانپزشکی",
          "مشاوره آنلاین",
          "روانشانی آرمان",
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={80}
        delaySpeed={1000}
      />
    </h1>
  );
}

export default TypeAutomat;
