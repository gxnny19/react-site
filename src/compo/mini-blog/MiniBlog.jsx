import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './src/compo/lists/pages/MainPage';
import PostWritePage from './src/compo/lists/pages/PostWritePage';
import PostViewPage from './src/compo/lists/pages/PostViewPage';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;        /* 가로 중앙 */
  justify-content: center;    /* 세로 중앙 */
  min-height: 100vh;          /* 화면 전체 높이 */
  width: 100%;
`;

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

function MiniBlog() {
  return (
    <Wrapper>
      <MainTitleText>미니 블로그</MainTitleText>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </Wrapper>
  );
}

export default MiniBlog;
