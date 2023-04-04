import React from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const smallRef = React.useRef();
    const smallBgRef = React.useRef();
    const handleChange = () => {
        smallBgRef.current.style.height = "80px";
        smallBgRef.current.style.width = "150px";
        smallRef.current.textContent = "Text";
        smallRef.current.style.textAlign = "center";
        smallRef.current.style.display = "block";
        smallRef.current.style.height = "100%";
        smallRef.current.style.width = "100%";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={smallBgRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small onClick={handleChange} ref={smallRef}>
                    Блок
                </small>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
