import React from 'react';

interface RecommendedProps {

}

interface RecommendedState {

}

class RecommendedList extends React.Component<RecommendedProps, RecommendedState> {
  constructor(props: RecommendedProps) {
    super(props);
    this.setState({
    });
  }

  public render(): JSX.Element {
    return (
      <div className="RecommendedList">
        추천 상품 리스트
      </div>
    );
  }
}

export default RecommendedList;
