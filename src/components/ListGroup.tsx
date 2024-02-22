export const ListGroup = () => {
    let cities = ['New York', 'San Francisco', 'Oxford', 'Deutschland']
    cities = []

    const getMessage = (message: string) => {
        return cities.length === 0 ? <p>{message}</p> : null
    }
    return (
        <>
            <h1>List Group</h1>
            <ul className="list-group">
                {getMessage('The list is empty')}
                {cities.map((city, index) => <li key={index} className="list-group-item">{city}</li>)}
            </ul>
        </>
    )
}
