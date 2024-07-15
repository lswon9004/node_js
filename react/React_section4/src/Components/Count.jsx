const Count = ({count, onClickButton}) =>{

    return(
    
        <div className="App">
        <h1>Count</h1>
        <section>
            <p>Current count:{count}</p>
        </section>
        <section>
            <button onClick={()=>{onClickButton(count+1)}}>
                increment
            </button>
        </section>
        </div>
    
    )
}

export default Count;