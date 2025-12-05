import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { FaPizzaSlice, FaUsers, FaClipboardList, FaBoxOpen } from 'react-icons/fa'

function StatCard({ title, value, icon, className }) {
    return (
        <div className={`card text-white ${className} mb-3`} style={{ maxWidth: '18rem' }}>
            <div className="card-body d-flex align-items-center">

                <div className="me-3" style={{ fontSize: '2rem' }}>
                    {icon}
                </div>

                <div>
                    <h6 className="card-title mb-1">{title}</h6>
                    <h4 className="card-text m-0">{value}</h4>
                </div>
            </div>
        </div>
    )
}


function RecentList({ items = [] }) {
    return (
        <div className="card mb-3">
            <div className="card-header">Recent Orders</div>
            <ul className="list-group list-group-flush">
                {items.length === 0 && <li className="list-group-item">No recent orders</li>}
                {items.map((it, idx) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={idx}>
                        <div>
                            <strong>{it.name}</strong>
                            <div className="text-muted small">{it.date}</div>
                        </div>
                        <span className="badge bg-primary rounded-pill">{it.status}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function Dashboard() {
    const [pizzas, setPizzas] = useState([])
    const [users, setUsers] = useState([])













    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()

        const fetchData = async () => {
            try {
                setLoading(true)
                const [pizzaRes, userRes] = await Promise.all([
                    axios.get('http://localhost:5000/api/pizza/list', { cancelToken: cancelToken.token }),
                    axios.get('http://localhost:5000/api/user/list', { cancelToken: cancelToken.token })
                ])

                if (pizzaRes.data && pizzaRes.data.success) setPizzas(pizzaRes.data.data || [])
                if (userRes.data && userRes.data.success) setUsers(userRes.data.data || [])
                setError(null)
            } catch (err) {
                if (!axios.isCancel(err)) {
                    console.error(err)
                    setError('Failed to load data from backend')
                }
            } finally {
                setLoading(false)
            }
        }

        fetchData()

        return () => cancelToken.cancel()
    }, [])

    const stats = [
        { title: 'Total Pizzas', value: pizzas.length, icon: <FaPizzaSlice />, className: 'bg-danger' },
        { title: 'Registered Users', value: users.length, icon: <FaUsers />, className: 'bg-success' },
        { title: 'Orders Today', value: 0, icon: <FaClipboardList />, className: 'bg-warning text-dark' },
        { title: 'Inventory Items', value: pizzas.length, icon: <FaBoxOpen />, className: 'bg-info text-dark' },
    ]

    // Use createdAt if present to build recent list
    const recent = pizzas
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5)
        .map(p => ({ name: p.name, date: p.createdAt ? new Date(p.createdAt).toLocaleString() : '-', status: 'Available' }))

    return (
        <div>

            <Navbar />

            <div className="container my-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2 className="mb-0">Dashboard</h2>
                        <small className="text-muted">Overview of shop metrics</small>
                    </div>
                    <div>
                        <button className="btn btn-outline-primary me-2">Export</button>
                        <button className="btn btn-primary">Create Pizza</button>
                    </div>
                </div>

                {loading && <div className="alert alert-info">Loading data...</div>}
                {error && <div className="alert alert-danger">{error}</div>}

                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <StatCard {...stats[0]} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <StatCard {...stats[1]} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <StatCard {...stats[2]} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <StatCard {...stats[3]} />
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12 col-lg-8">
                        <RecentList items={recent} />
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="card mb-3">
                            <div className="card-header">Quick Actions</div>
                            <div className="card-body d-flex flex-column">
                                <button className="btn btn-outline-primary mb-2">Add new pizza</button>
                                <button className="btn btn-outline-secondary mb-2">Manage Users</button>
                                <button className="btn btn-outline-success">View Reports</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

