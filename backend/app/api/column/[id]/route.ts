import prisma from "@/app/utils/prisma";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const columnList = await prisma.column.findUnique({
      where: {
        id: Number(id),
      },
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
