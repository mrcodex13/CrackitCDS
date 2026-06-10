import { useState } from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import "../style/page.css";
import SubjectHeader from "../components/subjectPage/SubjectHeader/SubjectHeader";
import SearchBar from "../components/subjectPage/SearchBar/SearchBar";
import SideChapterBar from "../components/subjectPage/side_chapterbar/side_chapterbar";
import PreviewTopic from "../components/subjectPage/previewTopic/previewTopic";


function GK() {

  return (
    <>
     <Navbar /> 
     <SubjectHeader
                subjectName="Gernal Science"
                totalChapters={15}
                completedChapters={6}
                progress={40}
            />
    <SearchBar />
    <div className="content-layout">
        <SideChapterBar />
        <PreviewTopic />
    </div>
    </>
  );
}

export default GK;