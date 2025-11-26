import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const submission = await prisma.contactSubmission.create({
            data: {
                name,
                email,
                message,
            },
        });

        return NextResponse.json(submission, { status: 201 });
    } catch (error) {
        console.error("Error creating contact submission:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
