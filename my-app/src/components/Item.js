import React from 'react';

function Item(props) {
    const { item } = props;
    const [isChecked, setIsChecked] = React.useState(false);
    
    const handleChecking = () => {
        setIsChecked(!isChecked);
    }
    return (
        <div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleChecking(true)}
            />
            <label>{item}</label>
        </div>
    );
}

export default Item;
