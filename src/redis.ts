import { Redis } from "@upstash/redis";

interface SessionOptions {
  redisUrl: string;
  redisToken: string;
}

export class Session {
  private redis: Redis;

  constructor(options: SessionOptions) {
    this.redis = new Redis({
      url: options.redisUrl,
      token: options.redisToken,
    });
  }

  async getSession(email: string) {
    return await this.redis.hgetall(email);
  }
}
