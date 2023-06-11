import Image from 'next/image';
import { Pagination } from 'antd';

export default function Home() {
  return (
    <main>
      <Pagination defaultCurrent={1} total={50} />;
    </main>
  );
}
