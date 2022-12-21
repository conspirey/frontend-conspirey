import react, {useEffect, useState} from "react"
import io from "socket.io-client"
function Test() {
    // function Connect() {
    //     return io.connect('ws://localhost:3000', {transports: ["websockets"]})
    // }
    const [msg, SetMsg] = useState("")
useEffect(() => {
    const socket = io.connect('ws://localhost:3000', {
        transports: ["websockets"],
        withCredentials:true,
    })
    socket.on('echo', (data: any) => {
        SetMsg(data.text)
    });
    socket.emit("echo", { text: "hello" }, function(response: any) {
        console.log(response);
    })
    return () => {
        socket.off('echo');
      };
}, [])
    return (
        <div>
            Text: {msg != ""? msg : "no connection"}
        </div>
    )
}
export default Test;