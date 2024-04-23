import { GetServerSideProps, GetStaticPaths } from "next";
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

// SSR 每次用户访问时执行
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query);
  const res = await fetchBooks(10);

  return {
    props: {
      books: res.data.books,
    },
  };
};
