import React from 'react';
import ListItem from './ListItem';

interface RecommendedProps {
  items?: string[][],
  onShowItem: Function
}

interface RecommendedState {

}

class RecommendedList extends React.Component<RecommendedProps, RecommendedState> {
  private renderListItems(): JSX.Element[] | JSX.Element {
    if (this.props.items) {
      const finalResult: JSX.Element[] = [];
      for (const item of this.props.items) {
        finalResult.push(
          <ListItem
            itemId={Number(item[0])}
            itemName={item[1]}
            price={Number(item[2])}
            stock={Number(item[3])}
            key={Number(item[0])}
            onClickItem={this.props.onShowItem}
          />
        );
      }
      return finalResult;
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
        {this.renderListItems()}
      </div>
    );
  }
}

export default RecommendedList;
