import { useState } from "react"

export const Grid = () => {
  const [selectedCellIndex, setselectedCellIndex] = useState<number>(9);
  const [selectedColumnIndex, setselectedColumnIndex] = useState<number>(0);
  const [rotationState, setRotationState] = useState<string>('north')
  const emoji = () => {
    return (
      <div className="emoji">
        ☝🏼
      </div>
    );
  };
  
  const columnCells = (columnIndex: number): JSX.Element[] => {
    const cellArray = [];
    
    for (let i = 0; i < 10; i++) {
      const shouldRenderEmoji = () => {
        if (selectedCellIndex === i && columnIndex === selectedColumnIndex) {
          return true;
        }
        return false;
      }
      
      cellArray.push(
        <div className={`Cell ${rotationState}`}>{shouldRenderEmoji() && emoji()}</div>
      )
    }
    
    return cellArray;
  }

  const columns = (): JSX.Element[] => {
    const columnsArray = [];

    for (let i = 0; i < 10; i++) {
      columnsArray.push(
        <div className="Column">
          {columnCells(i)}
        </div>
      )
    }

    return columnsArray;
  }

  const forwardBtnClick = () => {
    switch (rotationState) {
      case 'north':
        if (selectedCellIndex !== 0) {
          setselectedCellIndex((prevState) => prevState - 1);
        }
        break;
      case 'south':
        if (selectedCellIndex !== 9) {
          setselectedCellIndex((prevState) => prevState + 1);
        }
        break;
      case 'east':
        if (selectedColumnIndex !== 9) {
          setselectedColumnIndex((prevState) => prevState + 1);
        }
        break;
      case 'west':
        if (selectedColumnIndex !== 0) {
          setselectedColumnIndex((prevState) => prevState - 1);
        }
        break;
    }
  }

  const rightBtnOnClick = () => {
    if (rotationState === 'north') {
      setRotationState('east');
    } else if (rotationState === 'east') {
      setRotationState('south')
    } else if (rotationState === 'south') {
      setRotationState('west');
    } else if (rotationState === 'west') {
      setRotationState('north');
    }
  }

  return (
    <div className="container">
      <div className="btn-container">
        <button style={{ marginRight: '.5rem' }} onClick={rightBtnOnClick}>Turn Right</button>
        <button onClick={forwardBtnClick}>Move Forward</button>
      </div>
      <div className="Grid">
        {columns()}
      </div>
    </div>

  );
};