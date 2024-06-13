import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./PageLayout.scss"; // Import file SCSS của riêng bạn cho PageLayout

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const isAuthPage = pathname === "/auth";

  return (
    <div className="page-layout">
      {!isAuthPage && (
        <div className="sidebar">
          <Sidebar />
        </div>
      )}
      <div className={`main-content ${isAuthPage ? "full-width" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
