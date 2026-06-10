import { useState } from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import "../style/page.css";
import SubjectHeader from "../components/subjectPage/SubjectHeader/SubjectHeader";
import SearchBar from "../components/subjectPage/SearchBar/SearchBar";
import SideChapterBar from "../components/subjectPage/side_chapterbar/side_chapterbar";
import PreviewTopic from "../components/subjectPage/previewTopic/previewTopic";

function English() {

  return (
    <>
     <Navbar /> 
     <SubjectHeader
                subjectName="English"
                totalChapters={12}
                completedChapters={4}
                progress={33}
            />
    <SearchBar />
    <div className="content-layout">
        <SideChapterBar />
        <PreviewTopic />
    </div>
    </>
  );
}

export default English;