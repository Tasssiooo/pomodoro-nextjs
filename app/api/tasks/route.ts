import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET() {
  try {
    const allTasks = await sql`SELECT * FROM tasks;`;
    return NextResponse.json(allTasks.rows);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { taskName, taskDescription } = body;
    const createNewTask =
      await sql`INSERT INTO tasks (task_name, task_description) VALUES (${taskName}, ${taskDescription}) RETURNING *`;

    return NextResponse.json(createNewTask.rows);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
