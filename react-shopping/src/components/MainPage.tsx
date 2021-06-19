import React from 'react';

import RecommendedList from './RecommendedList';
import RecentList from './RecentList';
import Data from './Data';

interface MainProps {
  onShowItem: Function
}

interface MainState {

}

class MainPage extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {

    };
  }

  public render(): JSX.Element {
    return (
      <div className="MainPage">
        <RecommendedList
          items={Data}
          onShowItem={this.props.onShowItem}
        />
        <RecentList
        />
      </div>
    );
  }
}

export default MainPage;
