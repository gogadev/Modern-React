import React, { useState, useEffect, useReducer } from "react";

import Header from "./components/header/Header";
import CoursesList from "./components/courses-list/CoursesList";
import Search from "./components/search/Search";

import loadingImg from "./assets/loader.gif";

import "./App.css";

const courses_data = [
  {
    id: 1,
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    author: "Maximilian Schwarzmülller",
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/react-complete-guide/",
  },
  {
    id: 2,
    title: "Modern React with Redux",
    author: "Stephen Grider",
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/modern-react-with-redux/",
  },
  {
    id: 3,
    title: "The Complete React Developer Course (w/ Hooks and Redux)",
    author: "Andrew Mead",
    rating: 4.7,
    url:
      "http://codingthesmartway.net/courses/complete-react-web-app-developer/",
  },
];

const coursesReducer = (state, action) => {
  switch (action.type) {
    case "SET_COURSES":
      return action.payload;
    case "REMOVE_COURSE":
      return state.filter((course) => action.payload.id !== course.id);
    default:
      return state;
  }
};

const App = () => {
  const [courses, dispatchCourses] = useReducer(coursesReducer, []);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState(
    localStorage.getItem("searchText") || ""
  );

  const getCoursesAsync = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ courses: courses_data }), 2000)
    );

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("searchText", searchText);
  }, [searchText]);

  useEffect(() => {
    setLoading(true);
    getCoursesAsync().then((result) => {
      dispatchCourses({
        type: "SET_COURSES",
        payload: result.courses,
      });
      setLoading(false);
    });
  }, []);

  const filteredCourses = courses.filter((course) => {
    return (
      course.title.includes(searchText) || course.author.includes(searchText)
    );
  });

  const handleRemoveCourse = (course) => {
    dispatchCourses({
      type: "REMOVE_COURSE",
      payload: course,
    });
  };

  return (
    <React.Fragment>
      <Header />
      <Search value={searchText} onSearch={handleSearch} />
      {loading ? (
        <img className="loading-img" src={loadingImg} alt="" />
      ) : (
        <CoursesList
          courses={filteredCourses}
          handleRemoveCourse={handleRemoveCourse}
        />
      )}
    </React.Fragment>
  );
};

export default App;
