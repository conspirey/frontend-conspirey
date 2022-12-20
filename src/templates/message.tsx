import * as React from 'react';
import * as io from 'socket.io-client';

interface IState {
  message: string;
  messages: string[];
}

export default class App extends React.Component<{}, IState> {
  private socket: SocketIOClient.Socket;

  constructor(props: {}) {
    super(props);
    this.state = {
      message: '',
      messages: [],
    };
  }

  public componentDidMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('RECEIVE_MESSAGE', (data: string) => {
      this.addMessage(data);
    });
  }

  public sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.socket.emit('SEND_MESSAGE', {
      message: this.state.message,
    });
    this.setState({ message: '' });
  };

  public addMessage = (data: string) => {
    this.setState({ messages: [...this.state.messages, data] });
    console.log(this.state.messages);
  };

  public render()  {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Global Chat</div>
                <hr />
                <div className="messages">
                  {this.state.messages.map}
                  
                  </div>
               </div>
            </div>
        </div>
        </div>
       </div>
    )
    }
}