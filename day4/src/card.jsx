
function Card({name , address , password , img1}){
    return (
        <div className="card">
            <img className="img" src={img1}></img>
            <div className=" detail">
                name : {name} <br></br> <br></br>
                address : {address} <br></br><br></br>
                password : {password} <br></br> <br></br>
            </div>
        </div>
    )
}
export default Card