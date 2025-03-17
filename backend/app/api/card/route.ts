import prisma from "@/app/utils/prisma";

export async function GET() {
  try {
    const column = await prisma.column.findUnique({
      where: {
        id: 1,
      },
      include: {
        cardList: true,
      },
    });

    return Response.json(column?.cardList);
  } catch (e) {
    console.error(e);
    return Response.json(null, {
      status: 500,
    });
  }
}

export async function POST(req: Request) {
  try {
    const { newCard, creatorId } = await req.json();
    const creatorIdNumber = Number(creatorId);

    const created_card = await prisma.card.create({
      data: {
        title: newCard?.title,
        priority: newCard?.priority,
        startDate: newCard?.startDate,
        endDate: newCard?.endDate,
        columnId: 1,
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
  } catch (e) {
    console.error(e);
    return Response.json(null, {
      status: 404,
    });
  }
}

export async function PUT(req: Request) {
  try {
    const { newCardList } = await req.json();

    const columnList = await prisma.column.update({
      where: {
        id: 1,
      },
      include: {
        cardList: true,
      },
      data: {
        cardList: {
          deleteMany: {},
          create: newCardList.map((card) => ({
            id: card.id,
            title: card.title,
            priority: card.priority,
            startDate: card.startDate,
            endDate: card.endDate,
            creatorId: 1,
          })),
        },
      },
    });
    return Response.json(columnList);
  } catch (e) {
    console.error(e);
    return Response.json(null, {
      status: 500,
    });
  }
}
