import React from 'react';

interface RecentProps {

}

interface RecentState {

}

class RecentList extends React.Component<RecentProps, RecentState> {
  constructor(props: RecentProps) {
    super(props);
    this.setState({
    });
  }

  public render(): JSX.Element {
    return (
      <div className="RecentList">
        최근 상품 리스트
      </div>
    );
  }
}

export default RecentList;
