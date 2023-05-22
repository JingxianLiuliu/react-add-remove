import React, { useState } from 'react';
import './AddPerson.css';
const AddPerson = () => {
    // State variables to store input values and data
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [data, setData] = useState([]);

    const handleInputChange1 = (e) => {// Event handler for the name input
        setInputValue1(e.target.value);
    };


    const handleInputChange2 = (e) => {// Event handler for the age input
        const value = e.target.value;
        const numericValue = value.replace(/\D/g, ''); // keep numbers only
        setInputValue2(numericValue);
    };

    const handleAddItem = () => {// Event handler for adding a person
        const combinedValue = inputValue1 + ' Age:' +inputValue2;
        if (combinedValue.trim() !== '') {
            setData([...data, combinedValue]);
            setInputValue1('');
            setInputValue2('');
        }
    };

    const handleDeleteItem = (index) => {// Event handler for deleting a person
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    return (
        <div style={{ margin: '10px' }}>
            <div>
                <input
                    placeholder="Name"
                    style={{ width: '250px', marginRight: '10px' }}
                    value={inputValue1}
                    onChange={handleInputChange1}
                />
                <input
                    placeholder="Age"
                    style={{ width: '250px', marginRight: '10px' }}
                    value={inputValue2}
                    onChange={handleInputChange2}
                />
                <button type="button" onClick={handleAddItem}>
                    Add Person
                </button>
            </div>
            {/*<div style={{ margin: '10px', width: '300px' }}>*/}
            <div className="person-box">
                <ul>
                    {data.map((item, index) => (
                        <div key={index} className="person" onClick={() => handleDeleteItem(index)}>
                            {item}
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AddPerson;
