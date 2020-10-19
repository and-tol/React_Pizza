// Core
import React from 'react';
import ContentLoader from 'react-content-loader'
// TODO Подогнать размеры лоадера? Рисовать  соответствующее количество лоадеров. Сделать задержку после загрузки с сервера?
export const Loader = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox='0 0 280 460'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='12' y='335' rx='3' ry='3' width='249' height='54' />
    <rect x='142' y='414' rx='20' ry='20' width='115' height='40' />
    <rect x='434' y='467' rx='3' ry='3' width='53' height='11' />
    <rect x='424' y='392' rx='3' ry='3' width='72' height='11' />
    <rect x='360' y='412' rx='3' ry='3' width='100' height='11' />
    <rect x='233' y='552' rx='3' ry='3' width='37' height='11' />
    <rect x='9' y='292' rx='3' ry='3' width='260' height='18' />
    <rect x='395' y='379' rx='3' ry='3' width='173' height='11' />
    <circle cx='135' cy='130' r='130' />
    <rect x='21' y='419' rx='0' ry='0' width='79' height='33' />
  </ContentLoader>
);