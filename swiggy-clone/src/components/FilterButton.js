function submitFilter(props){
    console.log(props.recepies)
}
function FilterButton(props){
    return(
        <>
        <button onClick={submitFilter}>Fiter Button</button>
            <div>
              <p>{props.recepies}</p>
            </div>
            </>
    );
}
export default FilterButton