import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const onMenuClick = (e: any) => {
  console.log('click', e);
};

const items = [
  {
    key: '1',
    label: 'Move To Video Interview I',
  },
  {
    key: '2',
    label: 'Move To Video Interview II',
  },
  {
    key: '3',
    label: 'Move To Video Interview III',
  },
];

function DropdownButton() {
  return (
    <Space direction="vertical">
      <Dropdown.Button
      className='rounded-xl'
        icon={<DownOutlined className='text-white' />}
        menu={{
          items,
          onClick: onMenuClick,
        }}
      >
        <p className='text-white text-xs font-poppins font-medium leading-6 break-words self-center'>Move To Video Interview I</p>
      </Dropdown.Button>
    </Space>
  );
}

export default DropdownButton;
