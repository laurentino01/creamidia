import ButtonPrimary from "@/components/ButtonPrimary";

export default function AppDrawer({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full text-base-content bg-primary text-white">
          {/* Sidebar content here */}
          <li className="border-b-[1px] p-2">
            <a>Início</a>
          </li>
          <li className="border-b-[1px] p-2">
            <a>Portfólio</a>
          </li>
          <li className="border-b-[1px] p-2">
            <a>Dumps</a>
          </li>
          <div className="mt-4 mx-auto">
            <ButtonPrimary />
          </div>
        </ul>
      </div>
    </div>
  );
}
