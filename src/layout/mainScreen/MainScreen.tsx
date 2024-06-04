import { useState } from "react";
import { ArrowDownUp, BarChart4, BookUser, Files, PackagePlus, ScanBarcode } from "lucide-react";
import { DropDownMenu } from "./components/dropDownMenu";
import { Outlet, Link, useLocation } from "react-router-dom";

export function MainScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getIconColor = (path: string) => {
    return location.pathname === path ? "#12b2b8" : "#616161";
  };

  // Vou usar isso aqui depois pra poder colocar a localização no header
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location.pathname]);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-1 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={handleSidebarToggle}
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link to="/" className="flex ms-2 md:me-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Home
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <DropDownMenu />
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        {/* adicionar titulos para os links */}
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                title="Dashboard"
                to="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BarChart4
                  strokeWidth={"2px"}
                  size={24}
                  color={getIconColor("/dashboard")}
                />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                title="Estoque"
                to="estoque"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <PackagePlus
                  strokeWidth={"2px"}
                  size={24}
                  color={getIconColor("/estoque")}
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Estoque</span>
              </Link>
            </li>
            <li>
              <Link
                title="Fornecedores"
                to="suppliers"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BookUser
                  strokeWidth={"2px"}
                  size={24}
                  color={getIconColor("/suppliers")} 
                />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Fornecedores
                </span>
              </Link>
            </li>
            <li>
              <Link
                title="Movimentação do Estoque"
                to="movement"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ArrowDownUp
                  strokeWidth={"2px"}
                  size={24}
                  color={getIconColor("/movemento")} 
                />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Mov. de Estoque
                </span>
              </Link>
            </li>
            <li>
              <Link
                title="Produtos"
                to="produtos"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ScanBarcode
                  strokeWidth={"2px"}
                  size={24}
                  color={getIconColor("/produtos")}
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Produtos</span>
              </Link>
            </li>
            <li>
              <Link
                title="Relatórios"
                to="create"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Files
                  strokeWidth={"2px"}
                  size={24}
                  color={getIconColor("/reports")} 
                />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Relatórios
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
          <Outlet />
        </div>
      </div>
    </>
  );
}
