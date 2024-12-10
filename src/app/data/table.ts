import { formatDateTime } from 'config';

export const ordercolumns = [
  {
    title: 'OrderId',
    dataIndex: 'OrderId',
    key: 'OrderId',
  },
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
  },
  {
    title: 'Address',
    dataIndex: 'Address',
    key: 'Address',
  },
  {
    title: 'Country',
    dataIndex: 'Country',
    key: 'Country',
  },
  {
    title: 'Email',
    dataIndex: 'Email',
    key: 'Email',
  },
  {
    title: 'Phone Number',
    dataIndex: 'PhoneNumber',
    key: 'PhoneNumber',
  },
];

export const appointmentColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 60,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 100,
  },
  {
    title: 'Area',
    dataIndex: 'area',
    width: 100,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: 150,
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone_number',
    width: 150,
  },
  {
    title: 'WhatsApp Number',
    dataIndex: 'whatsapp_number',
    width: 120,
  },
  {
    title: 'Preferred Contact Method',
    dataIndex: 'prefered_contact_method',
    width: 100,
  },
  {
    title: 'Windows',
    dataIndex: 'windows',
    width: 100,
  },
  {
    title: 'Product Type',
    dataIndex: 'product_type',
    width: 150,
  },
  {
    title: 'How User Found Us',
    dataIndex: 'how_user_find_us',
    width: 100,
  },
  {
    title: 'User Query',
    dataIndex: 'user_query',
    width: 100,
  },

  {
    title: 'Preferred Date',
    dataIndex: 'prefered_Date',
    width: 100,
  },
];

export const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

export const columns = [
  {
    title: 'Name',
    dataIndex: 'title',
    key: 'title',
  },

  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text: any, record: any) => {
      const createdAt = new Date(record.createdAt);
      return formatDateTime(createdAt);
    },
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
];
