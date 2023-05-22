interface CoverProps{
    url?: string
}
export function Cover({ url = "#" }: CoverProps){

    return (
        <div className="overflow-hidden rounded-lg shadow-lg w-20" >
        <img className="object-scale-down" src={url}  alt="Linking Park" />
        </div>

    )
}