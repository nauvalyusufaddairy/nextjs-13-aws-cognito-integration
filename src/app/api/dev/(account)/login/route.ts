import {
  CognitoIdentityProviderClient,
  AdminInitiateAuthCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { NextRequest, NextResponse } from "next/server";
/**
 *
 * @param req this param get request from api hit
 * @param res this param return response to client
 */
export async function POST(req: NextRequest, res: NextResponse) {
  // get data from user which is email address and password who registered before

  // the backend will verify if the credential is accepted or not
  // btw today i want finish up this particular method to gain accesss control the web
  // after i build the function so there i want to keep it up to build another function
  console.log("hahahaha", req.url);
  const {
    COGNITO_CLIENT_ID,
    COGNITO_POOL_ID,
    REGION,
    AWS_SECRET_ACCESS_KEY,
    AWS_ACCESS_ID,
  } = process.env;
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email") as string;
  const password = searchParams.get("password") as string;

  const administratifClient = new AdminInitiateAuthCommand({
    AuthFlow: "ADMIN_USER_PASSWORD_AUTH",
    ClientId: COGNITO_CLIENT_ID,
    UserPoolId: COGNITO_POOL_ID,
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
    },
  });
  const client = new CognitoIdentityProviderClient({
    region: REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_ID!,
      secretAccessKey: AWS_SECRET_ACCESS_KEY!,
    },
  });

  try {
    const response = await client.send(administratifClient);
    console.log(response);
    return NextResponse.json(response);
  } catch (e: any) {
    return NextResponse.json({ status: 400, e });
  }
}
