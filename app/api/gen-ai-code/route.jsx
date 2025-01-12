import { GenerateAiCode } from "@/configs/model";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {prompt}= await req.json();
    try {
        const result = await GenerateAiCode.sendMessage(prompt);
        const resp = result.response.text();
        return NextResponse.json(JSON.parse(resp))
    } catch (e) {
        return NextResponse.json(resp)
    }
}