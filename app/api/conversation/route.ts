import { auth } from "@clerk/nextjs";
import axios from "axios";
import { NextResponse } from "next/server";

const API_KEY = process.env.RAPID_API_OPENAI_API_KEY;

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;
    if (!userId) return new NextResponse("Unauthorised", { status: 401 });
    if (!API_KEY) return new NextResponse("API Key missing", { status: 500 });
    if (!messages)
      return new NextResponse("Messages are required", { status: 400 });
    console.log(messages);
    const options = {
      method: "POST",
      url: "https://open-ai21.p.rapidapi.com/conversation",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": process.env.RapidAPI_Host,
      },
      data: {
        messages,
        temperature: 1,
        web_access: false,
      },
    };

    const response = await axios.request(options);
    return NextResponse.json({ role: "bot", content: response.data.ChatGPT });
  } catch (error) {
    console.log("[CONVERSATION API]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
