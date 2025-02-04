// 'use client';

// import { Icon } from '@lobehub/ui';
// import { Typography } from 'antd';
// import { LoaderCircle } from 'lucide-react';
// import { useTranslation } from 'react-i18next';
// import { Center, Flexbox } from 'react-layout-kit';

// export default () => {
//   const { t } = useTranslation('common');
//   return (
//     <Center height={'100%'} width={'100%'}>
//       <Flexbox align={'center'} gap={8}>
//         <div>
//           <Icon icon={LoaderCircle} size={'large'} spin />
//         </div>
//         <Typography.Text style={{ letterSpacing: '0.1em' }} type={'secondary'}>
//           {t('loading')}
//         </Typography.Text>
//       </Flexbox>
//     </Center>
//   );
// };



'use client';

import { Icon } from '@lobehub/ui';
import { Typography } from 'antd';
import { LoaderCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';

export default () => {
  const { t } = useTranslation('common');

  return (
    <Center height={'100%'} width={'100%'} className="bg-gray-900 animate-pulse"> {/* Pulsing background */}
      <Flexbox align={'center'} gap={12}> {/* Increased spacing */}
        <div>
          <Icon icon={LoaderCircle} size={64} spin color="red" /> {/* Bigger and red */}
        </div>
        <Typography.Text style={{ letterSpacing: '0.1em', fontSize: '1.2em', color: 'white' }}>
          🚀 {t('loading')}...
        </Typography.Text>
      </Flexbox>
    </Center>
  );
};
