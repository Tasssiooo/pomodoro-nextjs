import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const id = params.slug;
    const body = await request.json();
    const { newTaskName, newTaskDescription } = body;
    //Update task title
    await sql`UPDATE tasks SET task_name = ${newTaskName} WHERE task_id = ${id}`;
    //Update task description
    await sql`UPDATE tasks SET task_description = ${newTaskDescription} WHERE task_id = ${id}`;
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
    await sql`DELETE FROM tasks WHERE task_id = ${id}`;

    return NextResponse.json("This task has been deleted successfully!");
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
