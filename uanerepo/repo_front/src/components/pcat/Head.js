export const Head = ({api, categoria}) => {
    return(
        <div>
            <h className="text-3xl font-serif">{api}:{categoria}</h>
            <div className="divider"></div>

        </div>
    )
}