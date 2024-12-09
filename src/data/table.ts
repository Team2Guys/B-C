import { formatDate, formatDateTime } from 'config';

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
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Area',
    dataIndex: 'area',
    width: 200,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: 200,
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone_number',
    width: 150,
  },
  {
    title: 'WhatsApp Number',
    dataIndex: 'whatsapp_number',
    width: 170,
  },
  {
    title: 'User Query',
    dataIndex: 'user_query',
    width: 200,
  },
  {
    title: 'Preferred Contact Method',
    dataIndex: 'prefered_contact_method',
    width: 200,
  },
  {
    title: 'Windows',
    dataIndex: 'windows',
    width: 200,
  },
  {
    title: 'Product Type',
    dataIndex: 'product_type',
    width: 200,
  },
  {
    title: 'How User Found Us',
    dataIndex: 'how_user_find_us',
    width: 200,
  },

  {
    title: 'Preferred Date',
    dataIndex: 'prefered_Date',
    key: 'prefered_Date',
    width: 250,
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
