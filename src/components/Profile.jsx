import React from 'react';
import { Button } from "@/components/ui/button";
import { User, Bell, Edit, Activity, Settings } from 'lucide-react';

const Profile = () => {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-y-auto p-4">
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-2"></div>
          <h1 className="text-xl font-semibold">Carli Theron</h1>
          <p className="text-sm text-gray-600">South Africa</p>
        </div>
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            <User className="mr-2 h-4 w-4" /> Personal Information
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Bell className="mr-2 h-4 w-4" /> Notifications
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Edit className="mr-2 h-4 w-4" /> Contribution
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Activity className="mr-2 h-4 w-4" /> Activity
          </Button>
          <Button variant="outline" className="w-full justify-start text-green-500">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
        </div>
      </main>
      <Navigation />
    </div>
  );
};

export default Profile;