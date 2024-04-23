import { GetStaticPaths } from "next";
import React from "react";

export default function Books(props) {
  const { children, books } = props;

  return (
    <div>
      <div>
        {books.map((book: any) => {
          return book;
        })}
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const res = await fetchBooks(5);
  const ids = res.data.books.map((item: any) => {
    return {
      params: {
        id: item.id + "",
      },
    };
  });

  return {
    paths: ids || [],
    fallback: false, // 如果动态路由没有匹配上的，返回 404
  };
};

export async function getStaticProps(context: any) {
  console.log(context.params.id);

  const res = await fetchBooksDetail(content.params?.id);

  return {
    props: {
      book: res.data.book,
    },
  };
}
