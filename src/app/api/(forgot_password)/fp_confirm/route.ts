import {
  ConfirmForgotPasswordCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";

import { NextRequest, NextResponse } from "next/server";
const { REGION, COGNITO_CLIENT_ID } = process.env;
export async function POST(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const confirmCode = searchParams.get("code") as string;
  const email = searchParams.get("email") as string;
  const password = searchParams.get("password") as string;
  const client = new CognitoIdentityProviderClient({
    region: REGION,
  });
  const confirmForgotPasswordCommand = new ConfirmForgotPasswordCommand({
    ClientId: COGNITO_CLIENT_ID,
    ConfirmationCode: confirmCode,
    Password: password,
    Username: email,
  });

  try {
    const result = await client.send(confirmForgotPasswordCommand);
    return NextResponse.json(result);
  } catch (e: any) {
    return NextResponse.json(e);
  }
}
