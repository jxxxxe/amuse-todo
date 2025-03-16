import prisma from "@/app/prisma";

export async function GET() {
  const columnList = await prisma.column.findMany();

  return Response.json(columnList);
}
