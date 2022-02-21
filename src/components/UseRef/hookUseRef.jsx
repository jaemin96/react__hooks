import React, { useEffect, useRef, useState } from "react";

const HookUseRef = (props) => {
  const [value, setValue] = useState(0);
  const countRef = useRef(null);

  // EnterKey Pressed & SaveBtn Clicked
  const onSave = (e) => {
    e.preventDefault();
    // 현재 input value 가져오기
    console.log("countRef >> ", countRef.current.value);
    setValue(parseInt(countRef.current.value) + 1);
  };

  // value가 변할때만 console.log 찍음
  useEffect(() => {
    console.log("currentValue >> ", value);
  }, [value]);

  return (
    <form onSubmit={onSave}>
      <input ref={countRef} type="text" />
      <button>save</button>
    </form>
  );
};

export default HookUseRef;
