import React from 'react';

interface ListItemProps {
  itemId: number,
  itemName: string,
  price: number,
  stock: number,
  thumbnail?: string
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
      <div className="ListItem">
        추천 상품 리스트
      </div>
    );
  }
}

export default ListItem;
