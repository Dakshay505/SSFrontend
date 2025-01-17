import { useEffect, useState } from "react";
import { getLoggedInUserFunc } from "../api/authApi/authApi";
import LoginPage from "../screens/login/LoginPage";
interface Props {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: Props) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLoggedInUserFunc();
        setUser(data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!user && !loading){
    return <LoginPage />;
  }

  return <>{children}</>;
};

export default AuthGuard;
