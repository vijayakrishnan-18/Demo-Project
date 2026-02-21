import { Box } from "lucide-react";
import { Button } from './ui/Button';
import { useOutletContext } from "react-router"
import { signIn } from "../lib/puter.action";

const Navbar = () => {
  const { isSignedIn, userName, signOut, signIn } = useOutletContext<AuthContext>()

  const handleAuthClick = async () => {
    if (isSignedIn) {
      try {
        await signOut();
      } catch (e) {
        console.error('Puter Signed out Failed');
      }
      return;
    }

    try {
      await signIn();
    } catch (e) {
      console.error(`Puter Signed in Failed ${e}`);
    }
  };
  return (
    <header className="navbar">
      <nav className="inner">
        <div className="left">
          <div className="brand">
            <Box className="logo" />

            <span className="name">Rendify</span>
          </div>

          <ul className="links">
            <a href="/">Product</a>
            <a href="/">Pricing</a>
            <a href="/">Community</a>
            <a href="/">Enterprise</a>
          </ul>
          <div className="actions">
            {isSignedIn ? (
              <>
                <span className="greeting">
                  {userName ? `Hi, ${userName}` : 'Signed In'}
                </span>

                <Button size='sm' onClick={handleAuthClick} className="btn">
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Button onClick={handleAuthClick} size='sm' variant="outline">
                  Log In
                </Button>
                <a href="#upload" className="cta">Get Started</a>
              </>

            )}


          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
