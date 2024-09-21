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
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Area',
    dataIndex: 'area',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone_number',
  },
  {
    title: 'WhatsApp Number',
    dataIndex: 'whatsapp_number',
  },
  {
    title: 'Preferred Contact Method',
    dataIndex: 'prefered_contact_method',
  },
  {
    title: 'Windows',
    dataIndex: 'windows',
  },
  {
    title: 'Product Type',
    dataIndex: 'product_type',
  },
  {
    title: 'How User Found Us',
    dataIndex: 'how_user_find_us',
  },
  {
    title: 'User Query',
    dataIndex: 'user_query',
  },

  {
    title: 'Preferred Date',
    dataIndex: 'prefered_Date',
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
