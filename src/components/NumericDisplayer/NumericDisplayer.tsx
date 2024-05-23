import { useEffect, useState } from "react";
import "./NumericDisplayer.scss";

export function NumericDisplayer({
  value,
  itemsClass,
}: {
  value: number;
  itemsClass?: string;
}) {
  itemsClass = itemsClass || "";

  const [numericSlots, setNumericSlots] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const numberArray = value.toString().split("");

    const indexDiff = numericSlots.length - numberArray.length;
    for (let i = 0; i < numberArray.length; i++) {
      numericSlots[i + indexDiff] = Number(numberArray[i]);
    }

    setNumericSlots(numericSlots);

    // for (let i = 0; i < numberArray.length; i++) {
    //   numericSlots[numericSlots.length - i] = Number(numberArray[i]);

    //   setNumericSlots(numericSlots);

    //   console.log(numericSlots);
    // }
  }, [value]);

  return (
    <div className="numeric_displayer">
      {/* <div className="absolute_row">
        <p
          className={"numeric_displayer_item_static" + ` ${itemsClass}`}
          key={value}
        >
          {numericSlots.join("")}
        </p>
      </div> */}
      {numericSlots.map((n, i) => (
        <p className={"numeric_displayer_item" + ` ${itemsClass}`} key={i}>
          {n}
        </p>
      ))}
    </div>
  );
}
