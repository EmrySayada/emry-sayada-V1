import React, { useEffect, useState } from "react";

function Cursor(props) {
  const [xP, setXP] = useState();
  const [yP, setYP] = useState();
  useEffect(() => {
    console.log(props);
    setXP(props.x);
    setYP(props.y);
    const cursor = document.getElementById("cursor");
    cursor.style.top = yP;
    cursor.style.left = xP;
  });
  return (
    <div
      className={`h-[100px] w-[100px] rounded-[10px] bg-white transition-all`}
      id={"cursor"}
    >
      kaki
    </div>
  );
}

export default Cursor;
