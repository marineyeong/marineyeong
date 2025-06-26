import PostItem from './PostItem';
import React from 'react';

const PostList = () => {
  return (
    <ul>
      <PostItem
        href="/portfolio/healthcare/index.html"
        titleText={'Health Care'}
        detailText={'운송 관련 프로덕트로 대외비 관련 상세 디자인을 제외 후 레이아웃만 공개합니다.'}
        labelText={['Product', 'variable-UI']}
        labelStyle={['bg', 'main']}
        labelClassName={'font-serif mr-1'}
      />
      <PostItem
        href="/portfolio/greenie_board/index.html"
        titleText={'greenie_board'}
        detailText={
          'ESG 관련 프로덕트로, 대외비 관련 상세 디자인을 제외 후 레이아웃만 공개합니다. selectbox, input, radio 등 디자인 시안에 맞게 커스터마이징 하였고, Datepicker을 활용하여 달력 UI를 구현하였습니다. 탭 메뉴, 페이지네이션은 클릭 시 동작하도록, 모달창은 해당 영역 외 클릭 시 닫히도록 구현하였습니다.'
        }
        labelText={['Product', 'Backend-oriented']}
        labelStyle={['bg', 'main']}
        labelClassName={'font-serif mr-1'}
      />
      <PostItem
        href="/portfolio/greenie_eco/index.html"
        titleText={'Greenie Eco'}
        detailText={
          '제품 홈페이지로 외주 디자이너와 협업하며 직접 디자인에 참여하였습니다. PC와 모바일 반응형으로 대응되며, 플러그인을 활용하여 슬라이드 효과를 적용하였습니다. 또한, 스크롤 시 헤더와 헤더 로고의 컬러가 변경되는 기능을 구현하였습니다. '
        }
        labelText={['main', 'design']}
        labelStyle={['border', 'main']}
        labelClassName={'font-serif mr-1'}
      />
      <PostItem
        href="portfolio/greenie/index.html"
        titleText={'Greenie'}
        detailText={
          '외부 행사용 홈페이지로 모바일에서 가로/세로 화면 전환 및 PC 화면 크기 변경에 대비하여 사진 비율이 자동으로 조정되도록 설계하였습니다. 드래그로 전후 사진 비교할 수 있는 기능을 구현하였습니다.'
        }
        labelText={['main']}
        labelStyle={['border']}
        labelClassName={'font-serif'}
      />
    </ul>
  );
};

export default PostList;
