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
