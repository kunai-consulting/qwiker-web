import type { PropFunction } from "@builder.io/qwik";

export interface QuestionProps {
  isAnswered: PropFunction<(prop: number) => number>;
}