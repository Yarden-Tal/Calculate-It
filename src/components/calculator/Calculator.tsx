const Calculator = (): JSX.Element => {
  return (
    <div className="calc-grid">
      <div className="output">
        <div className="prev-operand"></div>
        <div className="curr-operand"></div>
        <button>AC</button>
        <button>+/-</button>
        <button>%</button>
        <button>÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>x</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            className="bi bi-arrow-counterclockwise"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
          </svg>
        </button>
        <button>0</button>
        <button>.</button>
        <button>=</button>
      </div>
    </div>
  );
};

export default Calculator;
