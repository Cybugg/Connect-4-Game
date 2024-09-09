const Winner = ({winner,reset}) => 
    <p className="text-center font-bold text-3xl">
        <span className="mt-4">{
            winner === -1
            ?   'No player won!!'
            :   `Player ${winner} won !!`}
        </span>
        <br/>
        <button className="bg-[rgb(66,66,66)] hover:text-[rgb(66,66,66)] hover:bg-yellow-500 text-md px-8 py-1 rounded-full mt-5 border border-yellow-500" onClick={reset}>Play again?</button>
    </p>

export default Winner