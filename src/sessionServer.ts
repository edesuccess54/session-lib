import * as http from "http";
import { Server as SocketIOServer, Socket } from "socket.io";
import { Session } from "./redis";

interface ServerOptions {
  redisUrl: string;
  redisToken: string;
  port?: number;
  path?: string;
}

export class SessionServer {
  private io: SocketIOServer;
  private server: http.Server;
  private session: Session;
  private port: number;

  constructor(options: ServerOptions) {
    this.session = new Session({
      redisUrl: options.redisUrl,
      redisToken: options.redisToken,
    });

    this.port = options.port || 3000;
    this.server = http.createServer();
    this.io = new SocketIOServer(this.server, {
      path: options.path || "/session",
      transports: ["websocket"],
    });

    this.setupSocketHandlers();
  }

  private setupSocketHandlers() {
    this.io.on("connection", (socket: Socket) => {
      console.log("Socket connected");

      socket.on("get-session", async (email: string) => {
        const userData = await this.session.getSession(email);
        socket.emit("user-session", userData);
        console.log("Emitted user session successfully");
      });

      socket.on("disconnect", () => {
        console.log("Socket disconnected");
      });
    });
  }

  start() {
    this.server.listen(this.port, () => {
      console.log(`WebSocket server running on http://localhost:${this.port}`);
    });
  }
}
