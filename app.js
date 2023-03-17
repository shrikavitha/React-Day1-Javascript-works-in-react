console.log("Message to Developer")
function Alertmessage()
{
const Hi=()=>{alert("Message from Javaript Alert!")}
return <div><button onClick={Hi}>click</button></div>
}
ReactDOM.render(<Alertmessage/>,document.getElementById('mydiv'))