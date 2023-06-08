import {
  CognitoIdentityProviderClient,
  SignUpCommand,
} from "@aws-sdk/client-cognito-identity-provider";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { COGNITO_CLIENT_ID, REGION } = process.env;
  const { searchParams } = new URL(req.url);
  const password = searchParams.get("password") as string;
  const email = searchParams.get("email") as string;

  const client = new CognitoIdentityProviderClient({
    region: REGION,
  });
  const signup = new SignUpCommand({
    ClientId: COGNITO_CLIENT_ID,
    Password: password,
    Username: email,
  });

  try {
    const response = await client.send(signup);

    return NextResponse.json({ status: 200, data: response });
  } catch (e: any) {
    console.log("error >> ", e);
    return NextResponse.json({ status: 400, data: e });
  }
}
