import React from 'react';

interface ListItemProps {
  itemId: number,
  itemName: string,
  price: number,
  stock: number
}

interface ListItemState {

}

class ListItem extends React.Component<ListItemProps, ListItemState> {
  /*
  constructor(props: ListItemProps) {
    super(props);
  }
  */

  public render(): JSX.Element {
    return (
      <div className="ListItem" key={this.props.itemId}>
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
