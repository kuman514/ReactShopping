import React from 'react';

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
        메인 페이지
      </div>
    );
  }
}

export default MainPage;
