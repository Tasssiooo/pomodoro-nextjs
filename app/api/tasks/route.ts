import { NextResponse } from "next/server";
import pool from "@/db/pool";

export async function GET() {
  try {
    const allTasks = await pool.query("SELECT * FROM tasks");
    return NextResponse.json(allTasks.rows);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { taskName, taskDescription } = body;
    const createNewTask = await pool.query(
      "INSERT INTO tasks (task_name, task_description) VALUES ($1, $2) RETURNING *",
      [taskName, taskDescription]
    );

    return NextResponse.json(createNewTask.rows);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
