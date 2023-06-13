import {
  CognitoIdentityProviderClient,
  GetUserCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { REGION } = process.env;
  const { user_token } = await req.json();

  const cognito = new CognitoIdentityProviderClient({ region: REGION });
  const getUserCommand = new GetUserCommand({
    AccessToken: user_token,
  });

  try {
    const result = await cognito.send(getUserCommand);

    return NextResponse.json({ result });
  } catch (e: any) {
    return NextResponse.json({ e });
  }
}
