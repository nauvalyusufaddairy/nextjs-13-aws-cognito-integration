import {
  ForgotPasswordCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";

import { NextRequest, NextResponse } from "next/server";
const { REGION, COGNITO_CLIENT_ID } = process.env;
export async function POST(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email") as string;
  const client = new CognitoIdentityProviderClient({
    region: REGION,
  });
  const forgotPasswordCommand = new ForgotPasswordCommand({
    ClientId: COGNITO_CLIENT_ID,
    Username: email,
  });

  try {
    const result = await client.send(forgotPasswordCommand);
    return NextResponse.json(result);
  } catch (e: any) {
    return NextResponse.json(e);
  }
}
