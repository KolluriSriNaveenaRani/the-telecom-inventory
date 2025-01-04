const users = [
    { id: 1, username: 'admin', password: 'admin123', role: 'Admin' },
    { id: 2, username: 'manager', password: 'manager123', role: 'Manager' },
    { id: 3, username: 'staff', password: 'staff123', role: 'Staff' },
  ];
  
  const products = [
    { id: 1, name: 'Router', category: 'Networking', stock: 20, reorder_point: 5 },
    { id: 2, name: 'Modem', category: 'Networking', stock: 10, reorder_point: 3 },
  ];
  
  const suppliers = [
    { id: 1, name: 'Supplier A', contact_email: 'supA@example.com', contact_phone: '1234567890', address: '123 Street, City' },
    { id: 2, name: 'Supplier B', contact_email: 'supB@example.com', contact_phone: '0987654321', address: '456 Avenue, City' },
  ];
  
  const transactions = [
    { id: 1, product_id: 1, quantity: 5, type: 'IN', timestamp: new Date() },
    { id: 2, product_id: 2, quantity: 2, type: 'OUT', timestamp: new Date() },
  ];
  
  const notifications = [
    { id: 1, message: 'Low stock alert for Router', status: 'PENDING', created_at: new Date() },
  ];
  
  module.exports = { users, products, suppliers, transactions, notifications };
  