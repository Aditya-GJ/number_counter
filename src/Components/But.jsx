import React, { useState } from "react";

export default function But() {
  const [count, setCount] = useState(0);
      

  return (
    <>
      {/* first main div */}
      <div className="maindiv">
        <h1 className="head1">Number Counter📟</h1>

        {/* subdiv */}
        <div className="subdiv">
          <h1 className="head2">Counter : {count}</h1>

          {/* div for button */}
          <div className="btndiv">
            {/* button 1 */}
            <button
              className="btn1"
              type="button"
              onClick={() => setCount(count + 1)}
            >
              Increament++
            </button>
            <br />

            {/* button 2 */}
            <button
              className="btn1"
              type="button"
              onClick={() => setCount(count - 1)}
            >
              Decreament --
            </button>

            {/* button 3 */}
            <button
              className="btn3"
              type="button"
              onClick={() => setCount(0)}
            >
              Set to zero
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
