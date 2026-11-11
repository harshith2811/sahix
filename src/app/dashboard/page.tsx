import React from 'react';
import { ClientPortalView } from '@/components/portal/ClientPortalView';

export const metadata = {
  title: 'Client Project Dashboard | SAHIX Enterprise Portal',
  description: 'Track sprint progress, approve architectural milestones, download signed deliverables, and message the engineering squad.'
};

export default function DashboardPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ClientPortalView />
    </div>
  );
}
