import prisma from "@/app/utils/prisma";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { newCard } = await req.json();
    const { id } = await params;
    const cardIdNumber = Number(id);

    const created_card = await prisma.card.update({
      where: {
        id: cardIdNumber,
      },
      data: {
        title: newCard?.title,
        priority: newCard?.priority,
        startDate: newCard?.startDate,
        endDate: newCard?.endDate,
        description: newCard?.description,
      },
    });

    return Response.json(created_card);
  } catch (e) {
    console.error(e);
    return new Response(null, {
      status: 404,
    });
  }
}

export async function DELETE(req: Request) {
  try {
    const { cardId } = await req.json();
    const cardIdNumber = Number(cardId);

    await prisma.card.delete({
      where: {
        id: cardIdNumber,
      },
    });

    return Response.json({
      status: 200,
    });
  } catch (e) {
    console.error(e);
    return new Response(null, {
      status: 404,
    });
  }
}
