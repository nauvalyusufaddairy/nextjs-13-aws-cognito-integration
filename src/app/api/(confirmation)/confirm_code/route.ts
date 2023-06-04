import {
  CognitoIdentityProviderClient,
  ConfirmSignUpCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { NextRequest, NextResponse } from "next/server";

const { REGION, COGNITO_CLIENT_ID, AWS_ACCESS_ID, AWS_SECRET_ACCESS_KEY } =
  process.env;

export async function POST(req: NextRequest, res: Response) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code") as string;
  const email = searchParams.get("email") as string;

  const client = new CognitoIdentityProviderClient({
    region: REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_ID!,
      secretAccessKey: AWS_SECRET_ACCESS_KEY!,
    },
  });

  const confirm = new ConfirmSignUpCommand({
    ClientId: COGNITO_CLIENT_ID!,
    ConfirmationCode: code,
    Username: email,
  });
  try {
    const result = await client.send(confirm);

    return NextResponse.json(result);
  } catch (e: any) {
    return NextResponse.json(e);
  }
}
