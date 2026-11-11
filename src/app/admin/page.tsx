import React from 'react';
import { AdminDashboardView } from '@/components/admin/AdminDashboardView';

export const metadata = {
  title: 'Admin CRM & Lead Operations | SAHIX Control Plane',
  description: 'Enterprise pipeline management, lead status updates, quote reviews, and client overview.'
};

export default function AdminPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <AdminDashboardView />
    </div>
  );
}
