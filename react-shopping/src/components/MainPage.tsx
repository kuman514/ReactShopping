import React from 'react';

import RecommendedList from './RecommendedList';
import RecentList from './RecentList';

interface MainProps {

}

interface MainState {

}

class MainPage extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.setState({
    });
  }

  public render(): JSX.Element {
    return (
      <div className="MainPage">
        <RecommendedList></RecommendedList>
        <RecentList></RecentList>
      </div>
    );
  }
}

export default MainPage;
