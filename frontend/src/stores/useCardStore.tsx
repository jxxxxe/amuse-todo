import { create } from "zustand";
import { IColumn, ICard } from "../types";
import apiFetch from "../utils/apiFetch";

const useCardStore = create<CardStore>((set) => ({
  cardColumnList: [],
  setCardColumnList: (newColumnList) =>
    set(() => ({
      cardColumnList: newColumnList,
    })),
  addCard: async (columnId, newCard) => {
    set(({ cardColumnList }) => {
      const targetColumn = cardColumnList.find(
        (column) => column.id === columnId
      );
      targetColumn?.cardList.push(newCard);
      return {
        cardColumnList,
      };
    });
    await apiFetch("api/card", {
      method: "POST",
      body: JSON.stringify({
        newCard,
        columnId,
        creatorId: 1,
      }),
    });
  },
  updateCard: async (columnId, cardId, newCardInfo) => {
    set(({ cardColumnList }) => {
      const newColumnList = cardColumnList.map((column) => {
        if (column.id === columnId) {
          return {
            ...column,
            cardList: column.cardList.map((card) =>
              card.id === cardId ? newCardInfo : card
            ),
          };
        } else {
          return column;
        }
      });

      return {
        cardColumnList: newColumnList,
      };
    });
    await apiFetch("api/card", {
      method: "PUT",
      body: JSON.stringify({
        cardId,
        newCard: newCardInfo,
      }),
    });
  },
  deleteCard: async (columnId, cardId) => {
    set(({ cardColumnList }) => {
      const newColumnList = cardColumnList.map((column) => {
        if (column.id === columnId) {
          return {
            ...column,
            cardList: column.cardList.filter((card) => card.id !== cardId),
          };
        } else {
          return column;
        }
      });
      return {
        cardColumnList: newColumnList,
      };
    });
    await apiFetch("api/card", {
      method: "DELETE",
      body: JSON.stringify({
        cardId,
      }),
    });
  },
  sortCardByName: (columnId) =>
    set(({ cardColumnList }) => {
      const sortedColumn = cardColumnList.map((column) => {
        if (column.id === columnId) {
          const sortedCardList = column?.cardList.sort((a, b) => {
            if (a.title > b.title) {
              return 1;
            } else if (a.title < b.title) {
              return -1;
            } else {
              return 0;
            }
          });

          return {
            ...column,
            cardList: sortedCardList,
          };
        } else {
          return column;
        }
      });
      return {
        cardColumnList: sortedColumn,
      };
    }),
  sortCardByPriority: (columnId) =>
    set(({ cardColumnList }) => {
      const sortedColumn = cardColumnList.map((column) => {
        if (column.id === columnId) {
          const sortedCardList = column?.cardList.sort(
            (a, b) => b.priority - a.priority
          );
          return {
            ...column,
            cardList: sortedCardList,
          };
        } else {
          return column;
        }
      });
      return {
        cardColumnList: sortedColumn,
      };
    }),
  sortCardByStartDate: (columnId) =>
    set(({ cardColumnList }) => {
      const sortedColumn = cardColumnList.map((column) => {
        if (column.id === columnId) {
          const sortedCardList = column?.cardList.sort(
            (a, b) => a.startDate.getTime() - b.startDate.getTime()
          );
          return {
            ...column,
            cardList: sortedCardList,
          };
        } else {
          return column;
        }
      });
      return {
        cardColumnList: sortedColumn,
      };
    }),
  sortCardByEndDate: (columnId) =>
    set(({ cardColumnList }) => {
      const sortedColumn = cardColumnList.map((column) => {
        if (column.id === columnId) {
          const sortedCardList = column?.cardList.sort(
            (a, b) => a.endDate.getTime() - b.endDate.getTime()
          );
          return {
            ...column,
            cardList: sortedCardList,
          };
        } else {
          return column;
        }
      });
      return {
        cardColumnList: sortedColumn,
      };
    }),
}));

interface CardStore {
  cardColumnList: IColumn[];
  setCardColumnList: (newColumnList: IColumn[]) => void;
  addCard: (columnId: number, newCard: ICard) => void;
  updateCard: (columnId: number, cardId: number, newCardInfo: ICard) => void;
  deleteCard: (columnId: number, cardId: number) => void;
  sortCardByName: (columnId: number) => void;
  sortCardByPriority: (columnId: number) => void;
  sortCardByStartDate: (columnId: number) => void;
  sortCardByEndDate: (columnId: number) => void;
}

export default useCardStore;
