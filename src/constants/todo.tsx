export interface ITodo {
  id: number;
  text: string;
  done: boolean;
  img?: string;
}
export const todoItems: ITodo[] = [
  {
    id: 0,
    text: "재난 지원금 신청하기",
    done: true,
    img: "",
  },
  {
    id: 1,
    text: "재활용품 버리기",
    done: false,
    img: "",
  },
  {
    id: 2,
    text: "침실 블라인드 구매하기",
    done: false,
    img: "",
  },
];
