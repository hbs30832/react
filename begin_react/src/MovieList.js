import React from "react";

function MovieItem({ movie }) {
  return (
    <li>
      <h2>{movie.title}</h2>
      <p>{movie.actors.map((actor) => actor + " ")}</p>
    </li>
  );
}

function MovieList() {
  const movieList = [
    {
      id: 1,
      title: "닥터스트레인지2",
      actors: ["베네딕트 컴베비치", "엘리자베스 올슨", "베네딕트 웡"],
    },
    {
      id: 2,
      title: "범죄도시2",
      actors: ["마동석", "손석구"],
    },
    {
      id: 3,
      title: "안녕하세요",
      actors: ["김환희", "유선"],
    },
  ];
  return (
    <>
      <ul>
        {movieList.map((item) => {
          return <MovieItem movie={item} key={item.id} />;
        })}
      </ul>
      {/* <ul>
        {[
          <MovieItem movie={movieList[0]} />,
          <MovieItem movie={movieList[1]} />,
          <MovieItem movie={movieList[2]} />,
        ]}
      </ul> */}
    </>
  );
}

export default MovieList;
