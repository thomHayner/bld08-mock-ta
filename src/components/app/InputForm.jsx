import React from 'react';

function InputForm(props) {
    return (
        <div>
            <form>
                <label>Name:</label>
                <input type="text" name="cowName"></input>
                <label>Description:</label>
                <input type="text" name="cowDescription"></input>
            </form>
        </div>
    )
}

export default InputForm;