let ws = null;

export const openSocket = ({url, openCallback, closeCallback, messageCallback}) => {
  ws = new WebSocket(url);
  ws.onopen = openCallback;
  ws.onclose = closeCallback;
  ws.onmessage = messageCallback;
}

export const cloceSocket = () => {
  if (ws) {
    ws.close();
  }
}