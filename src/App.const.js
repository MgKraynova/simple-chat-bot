import { Table } from "./table";

export const ROOMS = "rooms";
export const FLOOR = "floor";

export const STEPS = [
  {
    id: "1",
    message: "Добрый день! Я помогу вам купить квартиру",
    trigger: "2"
  },
  {
    id: "2",
    message: "Как вас зовут?",
    trigger: "3"
  },
  {
    id: "3",
    user: true,
    validator: value => {
      if (value.length === 0) {
        return "Пожалуйста, введите имя";
      }
      return true;
    },
    trigger: "4"
  },
  {
    id: "4",
    message: ({ previousValue }) => {
      return previousValue
        ? `${previousValue}, расскажите мне, сколько комнат вы хотите в квартире?`
        : "Расскажите мне, сколько комнат вы хотите в квартире?";
    },
    trigger: "5"
  },
  {
    id: "5",
    user: true,
    validator: value => {
      if (isNaN(value)) {
        return "Введите число";
      }
      if (value < 1) {
        return "Число комнат должно быть больше 0";
      }
      return true;
    },
    trigger: "6",
    metadata: { typeOfValue: ROOMS }
  },
  {
    id: "6",
    message: "Какой этаж предпочитаете?",
    trigger: "7"
  },
  {
    id: "7",
    options: [
      { value: 1, label: "Низкий (до 5 этажа)", trigger: "8" },
      { value: 2, label: "Средний (5 - 12 этаж)", trigger: "8" },
      { value: 3, label: "Высокий (выше 12 этажа)", trigger: "8" }
    ],
    metadata: { typeOfValue: FLOOR }
  },
  {
    id: "8",
    message: "Давайте подытожим введенные вами данные. Все ли верно?",
    trigger: "9"
  },
  {
    id: "9",
    component: <Table />,
    asMessage: true,
    trigger: "10"
  },
  {
    id: "10",
    options: [
      { value: true, label: "Да", trigger: "11" },
      { value: false, label: "Нет", trigger: "12" }
    ]
  },
  {
    id: "11",
    message: "Замечательно! Я перезвоню вам, когда найду варианты",
    end: true
  },
  {
    id: "12",
    message: "Мне очень жаль. Давайте попробуем сначала",
    trigger: "4"
  }
];

export const THEME = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#EF6C00",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#EF6C00",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a"
};
