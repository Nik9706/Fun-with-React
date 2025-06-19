import withAuth from './utilis/withAuth';
import withDarkmode from './utilis/withDarkmode';
import Dashboard from './Dashboard';

function App() {
  const AuthDash=withDarkmode(withAuth(Dashboard))
  return (
  <>
  <AuthDash/>
    </>
  );
}

export default App;
