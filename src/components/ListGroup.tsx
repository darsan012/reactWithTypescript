export const ListGroup = () => {
    let cities = ['New York', 'San Francisco', 'Oxford', 'Deutschland']
    cities = []

    return (
        <>
            <h1>List Group</h1>
            <ul className="list-group">
                {cities.length === 0 && <p>No items found</p>}
                {cities.map((city, index) => <li key={index} className="list-group-item">{city}</li>)}
            </ul>
        </>
    )
}
