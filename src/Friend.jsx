export default function Friend({friend}){
    const{title, body, userId} = friend
    return(
        
            <div className="box">
                <h4>Title:{title}</h4>
                <p>Body:{body}</p>
                <p>userId:{userId}</p>
            </div>
    )
}