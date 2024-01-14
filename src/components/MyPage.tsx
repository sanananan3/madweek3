import React, { FC } from "react";

// interface MyPageProps {
//     userData: {
//         id: string;
//         username: string;
//     };
// }

const MyPage: React.FC = () => {
    // 사용자 정보 및 설정 로딩 로직

    return (
        <div className="mypage">
            <h1>My Page</h1>
            {/* 사용자 정보 및 설정을 표시하는 컴포넌트들 */}
            <div className="user-info">
                {/* 예: 사용자 이름, 이메일 등 */}
                {/* <p>Username: {userData.username}</p>
                <p>ID: {userData.id}</p> */}
                <h3>정지연님 안녕하세요</h3>
            </div>
            <div className="settings">
                {/* 예: 비밀번호 변경, 계정 설정 등 */}
            </div>
        </div>
    );
};

export default MyPage;
