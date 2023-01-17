export const RickAndMortyComponent=(props)=> {
    let {id, name, status, species, gender, image} = props;
    let classNameItem = 'element';
    return (
        <div className={classNameItem}>
            <div className='imeg'>
                <img src={image} alt=''/>
            </div>

            <div className='text1'>
                <h1>{id} {name}</h1>
                <h3>{status}-{species}-{gender}</h3>
            </div>

        </div>
    );
}

