import React from 'react'
import AdminSidebarJobs from './Sidebar/AdminSidbarJobs'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'

function AdminJobs() {
  useGetAllAdminJobs()
  
  
  return (
    <div>
      <AdminSidebarJobs/>
    </div>
  )
}

export default AdminJobs