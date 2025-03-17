import prisma from "@/app/utils/prisma";

export async function GET() {
  try {
    const columnList = await prisma.column.findMany({
      include: {
        cardList: true,
      },
    });
    return Response.json(columnList);
  } catch {
    return new Response(null, {
      status: 404,
    });
  }
}
