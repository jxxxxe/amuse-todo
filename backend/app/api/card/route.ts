import prisma from "@/app/utils/prisma";

export async function POST(req: Request) {
  try {
    const { newCard, columnId, creatorId } = await req.json();
    const columnIdNumber = Number(columnId);
    const creatorIdNumber = Number(creatorId);

    const created_card = await prisma.card.create({
      data: {
        title: newCard?.title,
        priority: newCard?.priority,
        startDate: newCard?.startDate,
        endDate: newCard?.endDate,
        columnId: columnIdNumber,
        creatorId: creatorIdNumber,
        assignedUserList: {
          connect: [
            {
              id: creatorIdNumber,
            },
          ],
        },
      },
    });

    return Response.json(created_card);
  } catch {
    return new Response(null, {
      status: 404,
    });
  }
}

export async function PUT(req: Request) {
  try {
    const { cardId, newCard } = await req.json();
    const cardIdNumber = Number(cardId);

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
  } catch {
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

    return new Response(null, {
      status: 200,
    });
  } catch {
    return new Response(null, {
      status: 404,
    });
  }
}
