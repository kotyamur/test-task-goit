import { CardList } from "./CardsList/CardsList";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 30,
        color: '#010101'
      }}
    >
      <CardList />
    </div>
  );
};
