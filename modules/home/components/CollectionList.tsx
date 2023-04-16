import { useSetRecoilState } from 'recoil';

import Collection from './Collection';

import filterAtom, { defaultFilter } from '@/common/recoil/filter';
import lemon8Image from '@/public/img/lemon8.jpg';
import tiktokImage from '@/public/img/tiktok.jpg';
import unisexImage from '@/public/img/unisex.jpg';
import appstoreImage from '@/public/img/app-store.jpg';

const CollectionList = () => {
  const setFilter = useSetRecoilState(filterAtom);

  return (
    <div className="py-28">
      <div className="flex w-full flex-col items-center md:px-16 lg:px-0">
        <div className="w-full lg:w-[40rem] lg:translate-x-20 xl:w-[60rem]">
          <Collection
            title="创作模块"
            subtitle="See our collection for summer"
            image={tiktokImage}
            handleClick={() =>
              setFilter({
                ...defaultFilter,
                gender: {
                  ...defaultFilter.gender,
                  men: true,
                },
              })
            }
          />
          <Collection
            title="创作文档"
            subtitle="Fresh collection avaible now"
            image={appstoreImage}
            right
            handleClick={() =>
              setFilter({
                ...defaultFilter,
                gender: {
                  ...defaultFilter.gender,
                  women: true,
                },
              })
            }
          />
        </div>

        <div className="w-full lg:w-[40rem] lg:-translate-x-20 xl:w-[60rem]">
          <Collection
            title="平臺文案"
            subtitle="See what we offer"
            image={lemon8Image}
            handleClick={() =>
              setFilter({
                ...defaultFilter,
                kids: { boys: true, girls: true },
              })
            }
          />
          <Collection
            title="创作权益"
            subtitle="See what we have in our offer"
            image={unisexImage}
            right
            handleClick={() =>
              setFilter({
                ...defaultFilter,
                gender: {
                  ...defaultFilter.gender,
                  unisex: true,
                },
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionList;
