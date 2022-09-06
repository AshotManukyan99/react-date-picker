import React, {useState} from 'react';
import styled from 'styled-components'
import {rgba} from 'polished'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

import './App.css';

const Wrapper = styled.div`
  position: relative;
  padding: 1rem 0.5rem;
  border-radius: 3rem;
  background: #6d44bd;
`

const Card = styled.div`
  padding: 0.5rem 0.5rem 3rem 0.5rem;
  border-radius: 3rem;
  background: #471a8a;

  & .react-datepicker {
    border: 0;
    background: transparent;
    color: ${rgba("white", 0.85)};
  }

  & .react-datepicker__navigation {
    top: 0.875rem;
    opacity: 0.5;
  }

  & .react-datepicker__header {
    padding: 0;
    border: 0;
    background: transparent;
  }

  & .react-datepicker__current-month {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    color: ${rgba("white", 0.85)};
  }

  & .react-datepicker__day {
    outline: none;
    border-radius: 50%;
    color: ${rgba("white", 0.5)};
  }

  & .react-datepicker__day-name {
    color: ${rgba("white", 0.25)};
  }

  & .react-datepicker__day--selected,
  & .react-datepicker__day--keyboard-selected,
  & .react-datepicker__day:hover {
    background: #311758;
    color: white
  }

`


function App() {
    const [startDate, setStartDate] = useState<any>(new Date())

    return (
        <div className='App' >
            <div className='appWrapper' >
                <Card>
                    <Wrapper>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            inline
                        />
                    </Wrapper>
                </Card>
            </div>
        </div>
    );
}

export default App;
