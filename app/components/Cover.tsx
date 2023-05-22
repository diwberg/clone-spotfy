interface CoverProps{
    url?: string,
    type: "playlist" | "author"
}
export function Cover({ url = "#", type="playlist" }: CoverProps){

    const playlist = (<img className="object-cover h-16 w-16 rounded-lg shadow-lg" src={url}  alt="Linking Park" />)

    const author = (<img className="object-cover h-16 w-16 rounded-full shadow-lg" src={url}  alt="Linking Park" />)

    if(type == "author"){
        return ( <div>{author}</div> )
    }else{
        return ( <div>{playlist}</div> )
    }

}