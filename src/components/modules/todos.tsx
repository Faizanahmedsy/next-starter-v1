"use client";

import { getTodos } from "@/services/todo.api";
import { useQuery } from "@tanstack/react-query";
import Loader from "../shared/loader";

type Props = {};

export default function Todos({}: Props) {
  const { data: todoData, isFetching } = useQuery({
    queryKey: ["getTodos"],
    queryFn: getTodos,
    retry: false,
  });

  return (
    <div>
      {isFetching && <Loader />}
      {Array.isArray(todoData) &&
        todoData
          .map((todo, index) => {
            return <div key={index}>{todo?.title}</div>;
          })
          .slice(0, 10)}
    </div>
  );
}
