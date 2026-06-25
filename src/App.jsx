import './App.css'

const employees = [
  {
    id: 'EMP-1024',
    name: 'Aarav Mehta',
    role: 'Senior Frontend Engineer',
    team: 'Product Engineering',
    location: 'Bengaluru',
    status: 'Active',
    allocation: '92%',
  },
  {
    id: 'EMP-1031',
    name: 'Priya Nair',
    role: 'Cloud DevOps Lead',
    team: 'Platform',
    location: 'Pune',
    status: 'On Leave',
    allocation: '64%',
  },
  {
    id: 'EMP-1047',
    name: 'Rohan Kapoor',
    role: 'QA Automation Engineer',
    team: 'Quality',
    location: 'Hyderabad',
    status: 'Active',
    allocation: '81%',
  },
  {
    id: 'EMP-1052',
    name: 'Sneha Iyer',
    role: 'Business Analyst',
    team: 'Client Success',
    location: 'Mumbai',
    status: 'Probation',
    allocation: '73%',
  },
]

const metrics = [
  { label: 'Total Employees', value: '248', delta: '+12 this quarter' },
  { label: 'Billable Utilization', value: '86%', delta: '+4.2% vs last month' },
  { label: 'Open Positions', value: '18', delta: '6 priority roles' },
  { label: 'Avg. Tenure', value: '3.4y', delta: 'Stable retention' },
]

const teams = [
  { name: 'Product Engineering', people: 86, capacity: 78 },
  { name: 'Platform & DevOps', people: 42, capacity: 91 },
  { name: 'QA & Automation', people: 37, capacity: 73 },
  { name: 'Client Delivery', people: 83, capacity: 84 },
]

function App() {
  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Primary">
        <div className="brand">
          <span className="brand-mark">IT</span>
          <div>
            <strong>EmpFlow</strong>
            <span>IT workforce desk</span>
          </div>
        </div>

        <nav className="nav-list">
          <a className="active" href="#dashboard">Dashboard</a>
          <a href="#employees">Employees</a>
          <a href="#teams">Teams</a>
          <a href="#requests">Requests</a>
          <a href="#reports">Reports</a>
        </nav>

        <div className="sidebar-note">
          <span>Next payroll lock</span>
          <strong>28 Jun, 6:00 PM</strong>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Employee Management</p>
            <h1>IT Company Workforce Dashboard</h1>
          </div>
          <div className="topbar-actions">
            <button type="button" className="secondary-button">Export</button>
            <button type="button" className="primary-button">Add Employee</button>
          </div>
        </header>

        <section className="metric-grid" id="dashboard" aria-label="Company metrics">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <p>{metric.delta}</p>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="panel employee-panel" id="employees">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Directory</p>
                <h2>Employee Records</h2>
              </div>
              <input type="search" placeholder="Search employee" aria-label="Search employee" />
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Team</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Allocation</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.id}>
                      <td>
                        <strong>{employee.name}</strong>
                        <span>{employee.role} · {employee.id}</span>
                      </td>
                      <td>{employee.team}</td>
                      <td>{employee.location}</td>
                      <td>
                        <span className={`status ${employee.status.toLowerCase().replace(' ', '-')}`}>
                          {employee.status}
                        </span>
                      </td>
                      <td>{employee.allocation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <aside className="side-stack">
            <article className="panel" id="teams">
              <div className="panel-header compact">
                <div>
                  <p className="eyebrow">Capacity</p>
                  <h2>Team Load</h2>
                </div>
              </div>
              <div className="team-list">
                {teams.map((team) => (
                  <div className="team-row" key={team.name}>
                    <div>
                      <strong>{team.name}</strong>
                      <span>{team.people} employees</span>
                    </div>
                    <meter min="0" max="100" value={team.capacity}>{team.capacity}%</meter>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel" id="requests">
              <div className="panel-header compact">
                <div>
                  <p className="eyebrow">HR Queue</p>
                  <h2>Pending Actions</h2>
                </div>
              </div>
              <ul className="request-list">
                <li><span>5</span> onboarding checklists</li>
                <li><span>9</span> leave approvals</li>
                <li><span>3</span> asset handovers</li>
                <li><span>7</span> appraisal updates</li>
              </ul>
            </article>
          </aside>
        </section>
      </section>
    </main>
  )
}

export default App
