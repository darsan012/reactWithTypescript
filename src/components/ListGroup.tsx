export const ListGroup = () => {
    const cities = ['New York', 'San Francisco', 'Oxford', 'Deutschland']
    return (
        <>
            <h1>List Group</h1>
            <ul className="list-group">
                {cities.map((city, index) => <li key={index} className="list-group-item">{city}</li>)}
            </ul>
        </>
    )
}
