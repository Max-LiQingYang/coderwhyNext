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

export async function getStaticProps(context: any) {
  const res = await fetchBooksDetail();

  return {
    props: {
      book: res.data.book,
        revalidate: 5, // 每隔5秒重新生成一次静态页面
    },
  };
}
