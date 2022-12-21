import react, {useEffect, useState} from "react"
import io from "socket.io-client"
function Test() {
    useEffect(() => {
        const socket = io('ws://localhost:3000', {transports: ["websockets"]})
        socket.on('echo', (data: any) => {
            console.log(data);
        });
        socket.emit("echo", { text: "hello" }, function(response: any) {
            console.log(response);
        })
    })

    return (<div>
        
    </div>)
}
export default Test;