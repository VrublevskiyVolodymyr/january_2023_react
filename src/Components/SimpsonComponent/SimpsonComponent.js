 const SimpsonComponent=({simpson})=> {

    const {itemName, pic, text,phrases,description} = simpson;
     console.log(itemName)
    const classNameItem = 'card';
    return (
        <div className={classNameItem}>
            <h1 className='name'>{itemName}</h1>
            <div className='bodyCard'>
                <div className='imeg'>
                    <img src={pic} alt=''/></div>
                <div className='text'>
                    <p>{text}</p>
                    <p><h3>{phrases}</h3>
                        {description} </p>
                </div>
            </div>
        </div>
    );
}

export{SimpsonComponent}
