import { NextResponse } from "next/server";
import checkUser from "../../repository/checkUser";
import  jwt from "@/app/utils/jwt";

export async function POST(req) {
  try {
    const data = await req.json();

    console.log(data);
    if (!checkUser(data.username, data.password))
      throw new Error("USER_INVALID");

    const payload = { user: data.user };
    const accessToken = jwt.sign(payload)

    return NextResponse.json({ accessToken });
  } catch (err) {
    console.log(err);
  }
}
