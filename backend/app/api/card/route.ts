import prisma from "@/app/utils/prisma";

export async function POST(req: Request) {
  const { newCard, columnId, creatorId } = await req.json();
  const columnIdNumber = Number(columnId);
  const creatorIdNumber = Number(creatorId);

  if (isNaN(columnIdNumber) || isNaN(creatorIdNumber)) {
    return null;
  }

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
}

export async function PUT(req: Request) {
  const { cardId, newCard } = await req.json();
  const cardIdNumber = Number(cardId);

  if (isNaN(cardIdNumber)) {
    return null;
  }

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
}

export async function DELETE(req: Request) {
  const { cardId } = await req.json();
  const cardIdNumber = Number(cardId);

  if (isNaN(cardIdNumber)) {
    return null;
  }

  await prisma.card.delete({
    where: {
      id: cardIdNumber,
    },
  });

  return new Response(null, {
    status: 200,
  });
}
