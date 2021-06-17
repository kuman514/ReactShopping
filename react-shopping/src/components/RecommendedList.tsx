import React from 'react';
import ListItem from './ListItem';

interface RecommendedProps {
  items?: string[][]
}

interface RecommendedState {

}

class RecommendedList extends React.Component<RecommendedProps, RecommendedState> {
  /*
  constructor(props: RecommendedProps) {
    super(props);
    this.setState({
    });
  }
  */

  private renderListItems(): JSX.Element {
    if (this.props.items) {
      const finalResult: JSX.Element[] = [];
      for (const item of this.props.items) {
        finalResult.push(
          <ListItem
            itemId={Number(item[0])}
            itemName={item[1]}
            price={Number(item[2])}
            stock={Number(item[3])}
          />
        );
      }
      return (
        <div>
          {finalResult}
        </div>
      );
    }

    return (
      <div>
        추천 상품이 없습니다.
      </div>
    );
  }

  public render(): JSX.Element {
    return (
      <div className="RecommendedList">
        추천 상품 리스트
        {this.renderListItems()}
      </div>
    );
  }
}

export default RecommendedList;
