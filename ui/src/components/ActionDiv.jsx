import React, { useEffect, useRef, useState } from 'react';
import mockShipLog from './mockship';
import mockLog from './mocklog';

function ActionDiv() {
    const actionDivRef = useRef(null);
    const [showSideDivs, setShowSideDivs] = useState(false); // State to control the visibility of the side divs
    const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
    const [currentLogs, setCurrentLogs] = useState([]);

    const people = Object.keys(mockLog);

    const handleCycleLeftButtonClick = () => {
        setCurrentPersonIndex(prevIndex => {
            const newIndex = (prevIndex - 1 + people.length) % people.length;
            setCurrentLogs(mockLog[people[newIndex]]);
            return newIndex;
        });
    }

    const handleCycleRightButtonClick = () => {
        setCurrentPersonIndex(prevIndex => {
            const newIndex = (prevIndex + 1) % people.length;
            setCurrentLogs(mockLog[people[newIndex]]);
            return newIndex;
        });
    }

    useEffect(() => {
        setCurrentLogs(mockLog[people[currentPersonIndex]]);
    }, [currentPersonIndex]);

    const sideDivStyle = {
        width: '600px',
        height: '600px',
        borderRadius: '100%',
        opacity: showSideDivs ? '100%' : '0%',
        pointerEvents: showSideDivs ? 'auto' : 'none',
        overflowY: 'auto'
    };

    const handleLeftButtonClick = () => {
      setShowSideDivs(true);
    }

  
    const handleMouseMove = (e) => {
      if (window.innerHeight - e.clientY <= 50 && !showSideDivs && actionDivRef.current) {
          actionDivRef.current.classList.remove('remove-action-div');
          actionDivRef.current.classList.add('show-action-div');
      }
  };
  
  const handleDocumentClick = (e) => {
    console.log("Document clicked!");

    if (actionDivRef.current && !actionDivRef.current.contains(e.target)) {
        setShowSideDivs(false);
        actionDivRef.current.classList.remove('show-action-div');
        actionDivRef.current.classList.add('remove-action-div');
    }
};

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('click', handleDocumentClick);
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('click', handleDocumentClick);
        };
    }, [showSideDivs]);

    function formatDateOrTime(dateObj) {
      const today = new Date();
      if (dateObj.getDate() === today.getDate() && 
          dateObj.getMonth() === today.getMonth() &&
          dateObj.getFullYear() === today.getFullYear()) {
          return dateObj.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' });
      } else {
          return `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
      }
    }


    return (
      <div ref={actionDivRef} className="action-div">
        <div className="content-wrapper">
    
          {/* Original content */}
          <div className="original-content">
            <div className="log-div" style={sideDivStyle}>
              <div id="control-div" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <button id="left-cycle-button" onClick={handleCycleLeftButtonClick}>Prev</button>
                <div>{people[currentPersonIndex]}</div>
                <button id="right-cycle-button" onClick={handleCycleRightButtonClick}>Next</button>
              </div>
              <table>
                <tbody>
                  {currentLogs.map((log, i) => {
                    var when = new Date(log.when);
                    return (
                      <tr key={i}>
                        <td>{formatDateOrTime(when)}</td>
                        <td>{log.position}</td>
                        <td>{log.intention}</td>
                        <td>{log.momentum}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div id="button-container">
              <button onClick={handleLeftButtonClick} className="action-button black-btn"></button>
            </div>
          </div>
    
          {/* Blurred content for glow effect */}
          <div className="blurred-glow">
            <div className="log-div" style={sideDivStyle}>
              <div id="control-div" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <button id="left-cycle-button" onClick={handleCycleLeftButtonClick}>Prev</button>
                <div>{people[currentPersonIndex]}</div>
                <button id="right-cycle-button" onClick={handleCycleRightButtonClick}>Next</button>
              </div>
              <table>
                <tbody>
                  {currentLogs.map((log, i) => {
                    var when = new Date(log.when);
                    return (
                      <tr key={i}>
                        <td>{formatDateOrTime(when)}</td>
                        <td>{log.position}</td>
                        <td>{log.intention}</td>
                        <td>{log.momentum}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div id="button-container">
              <button onClick={handleLeftButtonClick} className="action-button black-btn"></button>
            </div>
          </div>
    
        </div>
      </div>
    );    
}

export default ActionDiv;
