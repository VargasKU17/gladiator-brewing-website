export default function MenuItem ({item, proof, description}) {
    return(
        <div>
            <h3>{item}: {proof}</h3>
            <p className="item-description">
            {description}
            </p>
        </div>
    )
}