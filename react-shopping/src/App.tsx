import React from 'react';
import './App.css';

import LoadingScreen from './components/LoadingScreen';
import UpperMenu from './components/UpperMenu';
import MainPage from './components/MainPage';

interface AppProps {

}

interface AppState {
  mode: string
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    document.addEventListener('DOMContentLoaded', () => {
      this.hideLoading();
    });
    this.state = {
      mode: 'main'
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
          <MainPage></MainPage>
        );
    }

    return (
      <MainPage></MainPage>
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
