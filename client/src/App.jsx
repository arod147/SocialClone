import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/HomePage/Homepage";
import "./App.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getPosts } from "./app/postsThunks";
import { selectPosts } from "./app/postsSlice";

function App() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, posts]);

  return (
    <div id="page">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
