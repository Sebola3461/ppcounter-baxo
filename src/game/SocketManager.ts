export class SocketManager {
  public socket = new WebSocket("ws://localhost:24050/websocket/v2");

  constructor() {
    this.socket.onmessage = (message) => {
      const event = new CustomEvent("gamedata", {
        detail: JSON.parse(message.data),
      });

      window.dispatchEvent(event);
    };
  }
}
