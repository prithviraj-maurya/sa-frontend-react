import './EditData.css';

export default function EditData(props: any) {
    let data = { ...props.data };
    function submitForm(event: any) {
        event.preventDefault();
        props.submitData(data);
    }
    function editData(event: any, field: string) {
        data[field] = event.target.value;
    }
    return (
        <form className="form" onSubmit={submitForm}>
            Name:<input type="text" defaultValue={data.name} onChange={e => editData(e, 'name')}></input>
            <br />
            Code:
            <input defaultValue={data.code} onChange={e => editData(e, 'code')}></input>
            <br />
            City:
            <input defaultValue={data.city} onChange={e => editData(e, 'city')}></input>
            <br />
            Type:
            <input defaultValue={data.type} onChange={e => editData(e, 'type')}></input>
            <br />
            Cluster
            <input defaultValue={data.cluster} onChange={e => editData(e, 'cluster')}></input>
            <br />
            Is registered:
            <input defaultValue={data.is_registered} onChange={e => editData(e, 'is_registered')}></input>
            <br />
            Is alive:
            <input defaultValue={data.is_alive} onChange={e => editData(e, 'is_alive')}></input>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}