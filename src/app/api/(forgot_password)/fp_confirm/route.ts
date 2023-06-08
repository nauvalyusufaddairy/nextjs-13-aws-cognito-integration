import {
  ConfirmForgotPasswordCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";

import { NextRequest, NextResponse } from "next/server";
const { REGION, COGNITO_CLIENT_ID } = process.env;
export async function POST(req: NextRequest, res: NextResponse) {
  const { password, email, confirmCode } = await req.json();
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
