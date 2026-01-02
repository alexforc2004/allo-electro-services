import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[600px] flex items-center justify-center py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-slate-900 dark:text-white mb-4">
            404
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Page non trouvée
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
