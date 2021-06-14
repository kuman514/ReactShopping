import React from 'react';

interface UpperProps {

}

interface UpperState {

}

class UpperMenu extends React.Component<UpperProps, UpperState> {
  constructor(props: UpperProps) {
    super(props);
    this.setState({
    });
  }

  public render(): JSX.Element {
    return (
      <div className="UpperMenu">
        <div className="TopMenuButton">
          메뉴
        </div>
        <div className="AppLogo">
          <h1>React Shopping</h1>
        </div>
        <div className="LoginInfo">
          로그인
        </div>
      </div>
    );
  }
}

export default UpperMenu;
