import React from 'react';

interface ItemProps {
  onShowItem: Function
}

interface ItemState {

}

class ItemView extends React.Component<ItemProps, ItemState> {
  constructor(props: ItemProps) {
    super(props);
    this.state = {

    };
  }

  public render(): JSX.Element {
    return (
      <div className="ItemView">
      </div>
    );
  }
}

export default ItemView;
