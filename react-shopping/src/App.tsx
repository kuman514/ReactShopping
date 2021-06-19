import React from 'react';
import './App.css';

import LoadingScreen from './components/LoadingScreen';
import UpperMenu from './components/UpperMenu';
import MainPage from './components/MainPage';

interface AppProps {

}

interface AppState {
  mode: string,
  currentSelected: number
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    document.addEventListener('DOMContentLoaded', () => {
      this.hideLoading();
    });
    this.state = {
      mode: 'main',
      currentSelected: -1
    };
  }

  public hideLoading(): void {
    const loadingScr = document.querySelector('.LoadingScreen');
    if (loadingScr) {
      loadingScr.classList.add('Hidden');
    }
  }

  public showLoading(): void {
    const loadingScr = document.querySelector('.LoadingScreen');
    if (loadingScr) {
      loadingScr.classList.remove('Hidden');
    }
  }

  private getModeContent(): JSX.Element {
    switch (this.state.mode) {
      case 'main':
        return (
          <MainPage onShowItem={(itemNo: number): void => {
            this.setState({
              mode: 'item',
              currentSelected: itemNo
            });
          }}/>
        );
    }

    return (
      <div>
        모드가 잘못되었습니다.
      </div>
    );
  }

  public render(): JSX.Element {
    return (
      <div className="App">
        <LoadingScreen></LoadingScreen>
        <UpperMenu></UpperMenu>
        {this.getModeContent()}
      </div>
    );
  }
}

export default App;
