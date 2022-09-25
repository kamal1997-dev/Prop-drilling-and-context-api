const GrandChild=({secret})=>{
    return (
        <div className="gc">
     <p>grandchilds:{secret.onlyForgrandChild()}</p>
        </div>
    )

}
export default GrandChild;