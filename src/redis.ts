import { Redis as Rediss } from "@upstash/redis";

interface SessionOptions {
  redisUrl: string;
  redisToken: string;
}

export class Redis {
  private redis: Rediss;

  constructor(options: SessionOptions) {
    this.redis = new Rediss({
      url: options.redisUrl,
      token: options.redisToken,
    });
  }

  async getSession(email: string) {
    return await this.redis.hgetall(email);
  }
}
