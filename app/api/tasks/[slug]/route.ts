import { NextResponse } from "next/server";

import pool from "@/db/pool";

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const id = params.slug;
    const body = await request.json();
    const { newTaskName, newTaskDescription } = body;
    //Update task title
    await pool.query("UPDATE tasks SET task_name = $1 WHERE task_id = $2", [
      newTaskName,
      id,
    ]);
    //Update task description
    await pool.query(
      "UPDATE tasks SET task_description = $1 WHERE task_id = $2",
      [newTaskDescription, id]
    );
    return NextResponse.json({
      message: "This task has been updated successfully!",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const id = params.slug;
    await pool.query("DELETE FROM tasks WHERE task_id = $1", [id]);

    return NextResponse.json("This task has been deleted successfully!");
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
