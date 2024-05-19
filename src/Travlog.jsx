// @ts-nocheck
import React from 'react';
import CommunityCard from './Communitycard';
import Header2 from './Header2';
import Trapplebox from './Trapplebox';
import './Travlog.css'; 
function Travlog() {
    return (
      <>
        <div>
          <Header2 />
        </div>
        <div><button className="writeButton">글 작성하기</button></div>
        <div className="button">
          <button className="traplechat">트래플챗</button>
          <button className="traplog">트래플로그</button>
        </div>
        <Trapplebox />
        <CommunityCard></CommunityCard>
      </>
    );
  }
  
  export default Travlog;