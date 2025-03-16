'use server'
import { db } from "@/src/db";
import { User, user } from "@/src/db/schema";
import { eq } from "drizzle-orm";
import { Error } from "@/src/pages/home/model/types";
import { NextResponse } from "next/server";

export async function GET(): Promise<User[] | Error> {
  try {
    const team = await db
      .select()
      .from(user)
      .where(eq(user.role, "USER") && eq(user.isPublic, 1));
    console.log(team);
    return NextResponse.json(team);
  } catch {
    return NextResponse.json({ success: false });
  }
}
