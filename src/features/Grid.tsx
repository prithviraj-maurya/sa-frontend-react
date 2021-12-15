import './Grid.css';

function Grid(props: any) {
    return (
        <main className="grid">
            {
                props.data.map((ele: any, i: number) => {
                    return (
                        <article key={ele.id} className="card">
                            <div className="text">
                                <h3>{ele.name}</h3>
                                <p>Code: {ele.code}</p>
                                <p>City: {ele.city}</p>
                                <p>Space Available: {ele.space_available}</p>
                                <p>Type: {ele.type}.</p>
                                <p>Cluster: {ele.cluster}</p>
                            </div>
                        </article>
                    )
                })
            }
        </main>
    );
}

export default Grid;