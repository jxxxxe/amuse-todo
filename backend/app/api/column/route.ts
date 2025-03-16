import prisma from "@/app/utils/prisma";

export async function GET() {
  const columnList = await prisma.column.findMany();

  return Response.json(columnList);
}
