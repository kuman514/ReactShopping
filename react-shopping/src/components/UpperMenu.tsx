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
        상단 메뉴 바
      </div>
    );
  }
}

export default UpperMenu;
