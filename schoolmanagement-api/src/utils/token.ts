// utils/tokens.ts
import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

// Correct SignOptions from jsonwebtoken package
const ACCESS_TOKEN_OPTIONS: SignOptions = {
  expiresIn: "60m", // 15 minutes
};

const REFRESH_TOKEN_OPTIONS: SignOptions = {
  expiresIn: "30d", // 7 days
};

// Interface for token payload (you can extend this based on your app's needs)
export interface TokenPayload extends JwtPayload {
  userId: string;
  email: string;
  role: string;
}

// Generate Access Token
export function generateAccessToken(payload: TokenPayload): string {
  const secret = process.env.ACCESS_TOKEN_SECRET!;
  return jwt.sign(payload, secret, ACCESS_TOKEN_OPTIONS);
}

// Generate Refresh Token
export function generateRefreshToken(payload: TokenPayload): string {
  const secret = process.env.REFRESH_TOKEN_SECRET!;
  return jwt.sign(payload, secret, REFRESH_TOKEN_OPTIONS);
}

// Verify Access Token
export function verifyAccessToken(token: string): TokenPayload {
  const secret = process.env.ACCESS_TOKEN_SECRET!;
  return jwt.verify(token, secret) as TokenPayload;
}

// Verify Refresh Token
export function verifyRefreshToken(token: string): TokenPayload {
  const secret = process.env.REFRESH_TOKEN_SECRET!;
  return jwt.verify(token, secret) as TokenPayload;
}
