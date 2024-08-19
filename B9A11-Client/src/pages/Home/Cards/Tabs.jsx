

function Tabs({ selectedTab, setSelectedTab }) {
  return (
    <div
      role="tablist"
      className="flex  justify-center tabs-boxed my-9"
    >
      <button
        role="tab"
        className={selectedTab === "All" ? "tab-active tab " : "tab"}
        onClick={() => setSelectedTab("All")}
      >
        All
      </button>
      <button
        role="tab"
        className={selectedTab === "Remote" ? "tab-active  tab" : "tab"}
        onClick={() => setSelectedTab("Remote")}
      >
        Remote
      </button>
      <button
        role="tab"
        className={selectedTab === "PartTime" ? "tab-active  tab" : "tab"}
        onClick={() => setSelectedTab("PartTime")}
      >
        PartTime
      </button>
      <button
        role="tab"
        className={selectedTab === "On-Site" ? "tab-active tab" : "tab"}
        onClick={() => setSelectedTab("On-Site")}
      >
        OnSite
      </button>
      <button
        role="tab"
        className={selectedTab === "Hybrid" ? "tab-active tab" : "tab"}
        onClick={() => setSelectedTab("Hybrid")}
      >
        Hybrid
      </button>
    </div>
  );
}

export default Tabs