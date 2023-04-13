import { Inter } from "next/font/google";
import Layout from "../../layouts/Layout";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="py-8">
        <h2 className="text-2xl font-semibold">Welcome to Your App</h2>
        <p className="mt-4">Your app content goes here.</p>
      </div>
    </Layout>
  );
};

export default Home;
