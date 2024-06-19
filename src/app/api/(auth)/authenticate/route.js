import jwt from "@/app/utils/jwt";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    // console.log(data);
    const user = jwt.verify(data.token);

    console.log(user)

    return NextResponse.json({ user });
  } catch (err) {
    console.log(err);
  }
}
