import HomePage from '../../pages/home-page/home-page';

type AppScreenProps = {
  countPlaces: number;
}

function App({ countPlaces }: AppScreenProps): JSX.Element {
  return (
    <div>
      <HomePage countPlaces={countPlaces} />
    </div>
  );
}

export default App;
