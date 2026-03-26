import React from "react";

export default function AdminUsers() {
  const users = [
    { id: 1, name: "Admin", role: "Süper Admin", email: "admin@depremwiki.com" },
    { id: 2, name: "Editör", role: "Editör", email: "editor@depremwiki.com" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-200">
        <h3 className="text-lg font-bold text-slate-800">Kullanıcı Yönetimi</h3>
      </div>
      <table className="w-full text-left">
        <thead className="bg-slate-50 text-slate-500 text-sm uppercase">
          <tr>
            <th className="px-6 py-4 font-medium">İsim</th>
            <th className="px-6 py-4 font-medium">Rol</th>
            <th className="px-6 py-4 font-medium">Email</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 text-slate-600">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                  {user.role}
                </span>
              </td>
              <td className="px-6 py-4">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
