import { useState } from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import "../style/page.css";
import SubjectHeader from "../components/subjectPage/SubjectHeader/SubjectHeader";
import SearchBar from "../components/subjectPage/SearchBar/SearchBar";
import SideChapterBar from "../components/subjectPage/side_chapterbar/side_chapterbar";
import PreviewTopic from "../components/subjectPage/previewTopic/previewTopic";
import StatsCards from "../components/subjectPage/StatsCards/StatsCards";


function Mathematics() {

  return (
    <>
     <Navbar /> 
     <SubjectHeader
                subjectName="Mathematics"
                totalChapters={18}
                completedChapters={9}
                progress={50}
            />
      <div>
      <SearchBar />
      {/* <StatsCards /> */}
      </div>
      <div className="content-layout">
        <SideChapterBar />
        <PreviewTopic />
      </div>
      {/* <ActionButtons /> */}

      

      {/* <PracticeSection /> */}

      {/* <PYQSection /> */}

      {/* <FloatingChatButton /> */}
    </>
  );
}

export default Mathematics;