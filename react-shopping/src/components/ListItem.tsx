import React from 'react';

interface ListItemProps {
  itemId: number,
  itemName: string,
  price: number,
  stock: number,
  onClickItem: Function
}

interface ListItemState {

}

class ListItem extends React.Component<ListItemProps, ListItemState> {
  public render(): JSX.Element {
    return (
      <div
        className="ListItem"
        onClick={() => {
          this.props.onClickItem(this.props.itemId);
        }}
      >
        <div className="ListItemTitle">
          {this.props.itemName}
        </div>
        <div className="ListItemPrice">
          {this.props.price}원
        </div>
        <div className="ListItemStock">
          잔여 {this.props.stock}개
        </div>
      </div>
    );
  }
}

export default ListItem;
